<?php

require_once __DIR__ . '/../config/bootstrap.php';
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../chatbot/website-info.php';

header("Content-Type: application/json");


// =====================================================
// ONLY ACCEPT POST REQUEST
// =====================================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "error" => "Method not allowed"
    ]);

    exit;
}


// =====================================================
// READ REQUEST
// =====================================================

$data = json_decode(
    file_get_contents("php://input"),
    true
);


$message = trim(
    $data["message"] ?? ""
);


// =====================================================
// VALIDATE MESSAGE
// =====================================================

if ($message === "") {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "error" => "Message is required"
    ]);

    exit;
}


// =====================================================
// GET GEMINI API KEY
// =====================================================

$apiKey = $_ENV["GEMINI_API_KEY"] ?? null;


if (!$apiKey) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "error" => "Gemini API key is missing"
    ]);

    exit;
}


// =====================================================
// TEMPORARY CHAT HISTORY
// =====================================================

$history = $data["history"] ?? [];


// =====================================================
// LIMIT HISTORY
// =====================================================

// Keep only the latest 20 messages.
// This prevents unnecessarily large requests.

if (count($history) > 20) {

    $history = array_slice(
        $history,
        -20
    );
}


// =====================================================
// CREATE GEMINI CONTENT
// =====================================================

$contents = [];


// =====================================================
// ADD PREVIOUS CONVERSATION
// =====================================================

foreach ($history as $item) {

    $role = $item["role"] ?? "";
    $text = trim($item["text"] ?? "");


    if ($text === "") {
        continue;
    }


    // Convert our frontend roles
    // to Gemini roles.

    if ($role === "user") {

        $geminiRole = "user";

    } else {

        $geminiRole = "model";
    }


    $contents[] = [

        "role" => $geminiRole,

        "parts" => [

            [
                "text" => $text
            ]

        ]

    ];
}


// =====================================================
// ADD CURRENT USER MESSAGE
// =====================================================

$contents[] = [

    "role" => "user",

    "parts" => [

        [
            "text" => $message
        ]

    ]

];


// =====================================================
// GEMINI REQUEST
// =====================================================

try {


    /*
    |--------------------------------------------------------------------------
    | IMPORTANT
    |--------------------------------------------------------------------------
    |
    | Use a model that is currently available to your Gemini API key.
    | Check Google AI Studio/API model documentation if this model
    | is unavailable for your project.
    |
    */

    $model = "gemini-3.5-flash";


    $url =
        "https://generativelanguage.googleapis.com/"
        . "v1beta/models/"
        . $model
        . ":generateContent";


    // =================================================
    // GEMINI PAYLOAD
    // =================================================

    $payload = [

        /*
        |--------------------------------------------------------------------------
        | SYSTEM INSTRUCTION
        |--------------------------------------------------------------------------
        */

        "systemInstruction" => [

            "parts" => [

                [
                    "text" => $websiteInfo
                ]

            ]

        ],


        /*
        |--------------------------------------------------------------------------
        | CONVERSATION
        |--------------------------------------------------------------------------
        */

        "contents" => $contents,


        /*
        |--------------------------------------------------------------------------
        | GENERATION SETTINGS
        |--------------------------------------------------------------------------
        |
        | maxOutputTokens was raised from 500 -> 1500. If this model
        | uses extended "thinking" internally, thinking tokens are
        | drawn from the SAME budget as the visible reply — so 500
        | was often being spent before the answer even finished
        | writing, cutting replies off mid-sentence or mid-URL.
        |
        | thinkingConfig.thinkingBudget = 0 turns that thinking off
        | entirely for this endpoint, so the full token budget goes
        | to the actual visible answer. If the model/API version
        | doesn't support this field, Gemini will just ignore it —
        | safe either way.
        |
        */

        "generationConfig" => [

            "temperature" => 0.3,

            "maxOutputTokens" => 1500,

            "thinkingConfig" => [

                "thinkingBudget" => 0

            ]

        ]

    ];


    // =================================================
    // CURL INITIALIZE
    // =================================================

    $ch = curl_init($url);


    curl_setopt_array(
        $ch,
        [

            CURLOPT_RETURNTRANSFER => true,

            CURLOPT_POST => true,

            CURLOPT_HTTPHEADER => [

                "Content-Type: application/json",

                "x-goog-api-key: " . $apiKey

            ],

            CURLOPT_POSTFIELDS =>
                json_encode($payload),

            CURLOPT_TIMEOUT => 30

        ]
    );


    // =================================================
    // EXECUTE REQUEST
    // =================================================

    $result = curl_exec($ch);


    // =================================================
    // CURL ERROR
    // =================================================

    if ($result === false) {

        throw new Exception(
            curl_error($ch)
        );

    }


    // =================================================
    // HTTP STATUS
    // =================================================

    $httpCode = curl_getinfo(
        $ch,
        CURLINFO_HTTP_CODE
    );


    curl_close($ch);


    // =================================================
    // DECODE RESPONSE
    // =================================================

    $response = json_decode(
        $result,
        true
    );


    // =================================================
    // GEMINI ERROR
    // =================================================

    if ($httpCode >= 400) {

        $errorMessage =
            $response["error"]["message"]
            ?? "Gemini API request failed";


        throw new Exception(
            $errorMessage
        );

    }


    // =================================================
    // DEBUG: LOG FINISH REASON
    // =================================================

    // If replies still look cut off after this fix, check your PHP
    // error log for "STOP" vs "MAX_TOKENS". "MAX_TOKENS" confirms the
    // reply is still hitting the token ceiling and maxOutputTokens
    // needs to go even higher. Safe to remove once confirmed fixed.

    $finishReason =
        $response["candidates"][0]["finishReason"]
        ?? "unknown";

    error_log("Gemini finishReason: " . $finishReason);


    // =================================================
    // GET AI RESPONSE
    // =================================================

    $reply =
        $response["candidates"][0]["content"]["parts"][0]["text"]
        ?? null;


    if (!$reply) {

        throw new Exception(
            "Gemini returned an empty response"
        );

    }


    // =================================================
    // SUCCESS RESPONSE
    // =================================================

    echo json_encode([

        "success" => true,

        "reply" => trim($reply)

    ]);

} catch (\Throwable $e) {


    // =================================================
    // ERROR RESPONSE
    // =================================================

    http_response_code(500);


    echo json_encode([

        "success" => false,

        "error" => $e->getMessage(),

        "type" => get_class($e)

    ]);

}

?>
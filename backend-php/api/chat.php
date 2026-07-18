<?php

require_once __DIR__ . '/../config/bootstrap.php';
require_once __DIR__ . "/../config/cors.php";


$client = \OpenAI::client($_ENV['OPENAI_API_KEY']);

$data = json_decode(file_get_contents("php://input"), true);

$message = $data["message"];
try {

    $response = $client->chat()->create([
        "model" => "gpt-5.5",
        "messages" => [
            [
                "role" => "user",
                "content" => $message
            ]
        ]
    ]);

    echo json_encode([
        "success" => true,
        "reply" => $response->choices[0]->message->content
    ]);

} catch (\Throwable $e) {

    echo json_encode([
        "success" => false,
        "error" => $e->getMessage(),
        "type" => get_class($e)
    ]);
}
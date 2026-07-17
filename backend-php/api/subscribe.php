<?php

require_once __DIR__ . '/../config/bootstrap.php';
require_once __DIR__ . "/../config/cors.php";
header("Content-Type: application/json");

require_once __DIR__ . "/../config/mail.php";

try {
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        http_response_code(405);

        echo json_encode([
            "success" => false,
            "message" => "Method Not Allowed"
        ]);

        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $email = trim($data["email"] ?? "");


    if (

        empty($email)
    ) {

        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "Please fill email."
        ]);

        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "Invalid email address."
        ]);

        exit;
    }

    // Generate Email HTML
    ob_start();

    require __DIR__ . "/../templates/subscribe-mail.php";

    $html = ob_get_clean();

    $mail = getMailer();

    $mail->addAddress($_ENV['HOSTINGER_EMAIL']);

    $mail->addReplyTo(
        $email
    );

    $mail->isHTML(true);
    $mail->Subject = "📩 New Newsletter Subscription";
    $mail->Body = $html;

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (Exception $e) {

    http_response_code(500);
    echo json_encode($e->getMessage());
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
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

    // Receive FormData
    $firstName = trim($_POST["firstName"] ?? "");
    $lastName = trim($_POST["lastName"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $phone = trim($_POST["phone"] ?? "");
    $companyName = trim($_POST["companyName"] ?? "");
    $website = trim($_POST["website"] ?? "");
    $service = trim($_POST["service"] ?? "");
    $projectType = trim($_POST["projectType"] ?? "");
    $budget = trim($_POST["budget"] ?? "");
    $timeline = trim($_POST["timeline"] ?? "");
    $country = trim($_POST["country"] ?? "");
    $projectTitle = trim($_POST["projectTitle"] ?? "");
    $projectDescription = trim($_POST["projectDescription"] ?? "");
    $preferredContact = trim($_POST["preferredContact"] ?? "");

    // Validation
    if (
        empty($firstName) ||
        empty($email) ||
        empty($phone) ||
        empty($service) ||
        empty($projectType) ||
        empty($budget) ||
        empty($timeline) ||
        empty($country) ||
        empty($projectTitle) ||
        empty($projectDescription)
    ) {

        http_response_code(400);

        echo json_encode([
            "success" => false,
            "message" => "All marked fields are required."
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

    // Attachment
    $attachment = null;

    if (
        isset($_FILES["attachment"]) &&
        $_FILES["attachment"]["error"] === UPLOAD_ERR_OK
    ) {
        $attachment = $_FILES["attachment"];
    }

    // Load Email Template
    ob_start();

    include __DIR__ . '/../templates/quote-mail.php';

    $html = ob_get_clean();

    // Mail
    $mail = getMailer();

    $mail->addAddress($_ENV['HOSTINGER_EMAIL']);
    // $mail->addAddress("vermaayush9170@gmail.com");

    // $mail->addReplyTo($email, $firstName . " " . $lastName);

    $mail->Subject = "📩 New Project Quote Request - {$projectTitle}";

    $mail->Body = $html;

    // Attachment
    if ($attachment) {

        $mail->addAttachment(
            $attachment["tmp_name"],
            $attachment["name"]
        );

    }

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Quote request submitted successfully."
    ]);

} catch (Exception $e) {

    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);

}
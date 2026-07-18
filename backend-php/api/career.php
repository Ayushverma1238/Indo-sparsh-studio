<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../config/bootstrap.php";
require_once __DIR__ ."/../config/cors.php";
require_once __DIR__ . "/../config/mail.php";
require_once __DIR__ . "/../templates/career-mail.php";

try {

    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        http_response_code(405);
        echo json_encode([
            "success" => false,
            "message" => "Method Not Allowed"
        ]);
        exit;
    }

    $required = [
        "name",
        "email",
        "phone",
        "experience",
        "role",
        "about"
    ];

    foreach ($required as $field) {
        if (!isset($_POST[$field]) || trim($_POST[$field]) === "") {
            echo json_encode([
                "success" => false,
                "message" => ucfirst($field) . " is required."
            ]);
            exit;
        }
    }

    if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email address."
        ]);
        exit;
    }

    if (!isset($_FILES["resume"])) {
        echo json_encode([
            "success" => false,
            "message" => "Resume is required."
        ]);
        exit;
    }

    if ($_FILES["resume"]["error"] !== UPLOAD_ERR_OK) {
        echo json_encode([
            "success" => false,
            "message" => "Resume upload failed."
        ]);
        exit;
    }

    $allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    $mime = mime_content_type($_FILES["resume"]["tmp_name"]);

    if (!in_array($mime, $allowed)) {
        echo json_encode([
            "success" => false,
            "message" => "Only PDF, DOC and DOCX files are allowed."
        ]);
        exit;
    }

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $experience = trim($_POST["experience"]);
    $role = trim($_POST["role"]);
    $about = trim($_POST["about"]);

    $mail = getMailer();

    // Recipient
    $mail->addAddress($_ENV["HOSTINGER_EMAIL"], "IndoSparsh Studio");

    // Candidate reply email
    $mail->addReplyTo($email, $name);

    $mail->Subject = "New Job Application - {$role} | {$name}";
    $mail->isHTML(true);

    $mail->Body = careerMailTemplate([
        "name" => $name,
        "email" => $email,
        "phone" => $phone,
        "experience" => $experience,
        "role" => $role,
        "about" => $about
    ]);

    // Attach Resume
    $mail->addAttachment(
        $_FILES["resume"]["tmp_name"],
        $_FILES["resume"]["name"]
    );

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
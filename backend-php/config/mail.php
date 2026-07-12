<?php

require_once __DIR__ . '/../config/bootstrap.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader

/**
 * Returns a configured PHPMailer instance.
 */
function getMailer()
{
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username =  $_ENV['HOSTINGER_EMAIL'];
        $mail->Password =  $_ENV['HOSTINGER_PASS']; // Replace with your Hostinger email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Default Sender
        $mail->setFrom(
             $_ENV['HOSTINGER_EMAIL'],
            'Indo Sparsh Studio'
        );

        // $mail->isSMTP();

        // $mail->Host = 'smtp.gmail.com';
        // $mail->SMTPAuth = true;

        // $mail->Username = 'vermaayush9170@gmail.com';
        // $mail->Password = 'sacxhpaxbngkjbeo';

        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        // $mail->Port = 465;

        // $mail->setFrom(
        //     'vermaayush9170@gmail.com',
        //     'Indo Sparsh Studio'
        // );

        // Email Format
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';

        return $mail;
    } catch (Exception $e) {
        throw new Exception("Mailer Configuration Error: " . $e->getMessage());
    }
}
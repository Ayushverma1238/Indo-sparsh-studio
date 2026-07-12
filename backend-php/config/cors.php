<?php

$allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://www.indosparsh.com",
    "https://indosparsh.com",
];

if (
    isset($_SERVER["HTTP_ORIGIN"]) &&
    in_array($_SERVER["HTTP_ORIGIN"], $allowedOrigins)
) {
    header("Access-Control-Allow-Origin: " . $_SERVER["HTTP_ORIGIN"]);
}

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}
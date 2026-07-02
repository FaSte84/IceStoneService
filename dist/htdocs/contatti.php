<?php

header('Content-Type: application/json');

try {

    $data = json_decode(file_get_contents("php://input"), true);

    $nome = trim($data['nome'] ?? '');
    $email = trim($data['email'] ?? '');
    $telefono = trim($data['telefono'] ?? '');
    $messaggio = trim($data['messaggio'] ?? '');

    if (!$nome || !$email || !$messaggio) {
        throw new Exception('Campi obbligatori mancanti');
    }

    $to = 'info@icestoneservice.it';
    $subject = 'Nuovo messaggio dal sito';
    
    $body =
        "Nome: $nome\n\n" .
        "Email: $email\n\n" .
        "Telefono: $telefono\n\n" .
        "Messaggio:\n$messaggio";
    
    $headers = "From: Ice Stone Service <info@icestoneservice.it>\r\n";
    $headers .= "Reply-To: $nome <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (!mail($to, $subject, $body, $headers)) {
        throw new Exception('Impossibile inviare l\'email');
    }

    echo json_encode([
        'success' => true
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
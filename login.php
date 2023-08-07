<?php
// captura os dados que foram enviados do formulario
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

// verifica as credenciais
if ($username === 'vendemmia' && $password === '123123123') {
    // retorno de sucesso
    echo json_encode(['success' => true]);
} else {
    // retorno de falha
    echo json_encode(['success' => false]);
}
?>
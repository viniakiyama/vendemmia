// login.js - autenticação do usuário
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // chama o login.php para ver se as credenciais do fomulário batem com as que estão no PHP
    // os dados do formulario sao enviados como POST para o PHP para realizar a autenticação
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        //verificação de sucesso ou falha
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // armazena um sinal que o usuário esta autenticado no armazenamento cache (sessionStorage)
                sessionStorage.setItem('userAuthenticated', true);

                // redireciona o usuário para a página que tem a lista dos usuários
                window.location.href = 'lista.html';
            } else {
                //caso as credenciais forem incorretas haverá um alerta de erro
                alert('Usuário ou senha incorretos. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao autenticar:', error);
            alert('Ocorreu um erro ao autenticar. Tente novamente mais tarde.');
        });
});

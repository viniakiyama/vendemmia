
// requisição para a API para obter a lista de usuários
fetch('https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users')
    .then(response => response.json())
    .then(data => {
        const userListDiv = document.getElementById('userList');

        // criando uma tabela para exibir os dados dos usuários
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>ID</th><th>Nome</th><th>Avatar</th>';
        table.appendChild(headerRow);

        // preenchendo a tabela com os dados dos usuários
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td><img src="${user.avatar}" alt="${user.name}" width="50"></td>`;
            table.appendChild(row);
        });

        userListDiv.appendChild(table);
    })
    .catch(error => {
        console.error('Erro ao carregar a lista de usuários:', error);
        alert('Ocorreu um erro ao carregar a lista de usuários. Tente novamente mais tarde.');
    });

// função para realizar o logout do usuário
function logout() {
    // remove a informação de autenticação do armazenamento de sessão, cache (sessionStorage )
    sessionStorage .removeItem('userAuthenticated');

    // redireciona o usuário de volta para a página de login
    window.location.href = 'index.html';
}

// adiciona um evento de clique no botão "Sair" para chamar a função de logout
document.getElementById('botaoSair').addEventListener('click', logout);
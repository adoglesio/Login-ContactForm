function handleLogin() {
    // Obtenha os valores do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Faça uma solicitação ao servidor para autenticar o usuário
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Login bem-sucedido', data);

        // Redirecione para a página de tarefas ou outra página após o login bem-sucedido
        window.location.href = '/caminho-da-sua-pagina-de-tarefas';
    })
    .catch(error => {
        console.error('Erro no login:', error);
        // Adicione lógica para lidar com falhas no login, se necessário
    });
}

function redirectRegister() {
    window.location.href = '/contact.html';
}
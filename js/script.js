// Função de validação do formulário
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validando o campo "nome"
    if (nome.trim() === "") {
        alert("Por favor, insira seu nome.");
        return false;
    }

    // Validando o campo "email"
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validando o campo "mensagem"
    if (mensagem.trim() === "") {
        alert("Por favor, insira sua mensagem.");
        return false;
    }

    // Se todas as validações passarem, o formulário é enviado
    return true;
}

// Função para exibir os dados enviados via GET (na página formAction.html)
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Captura os parâmetros da URL
    const nome = urlParams.get('nome');
    const email = urlParams.get('email');
    const mensagem = urlParams.get('mensagem');

    // Exibe os dados na página
    if (nome) {
        document.getElementById("nome").textContent = nome;
    } else {
        document.getElementById("nome").textContent = "Não informado";
    }

    if (email) {
        document.getElementById("email").textContent = email;
    } else {
        document.getElementById("email").textContent = "Não informado";
    }

    if (mensagem) {
        document.getElementById("mensagem").textContent = mensagem;
    } else {
        document.getElementById("mensagem").textContent = "Não informada";
    }
};

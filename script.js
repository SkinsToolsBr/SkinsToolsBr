function redirecionar(nome, imagem) {
    localStorage.setItem('itemNome', nome);
    localStorage.setItem('itemImagem', imagem);
    window.location.href = "enviar.html";
}

function carregarItem() {
    const nome = localStorage.getItem('itemNome');
    const imagem = localStorage.getItem('itemImagem');

    if (nome && imagem) {
        document.getElementById('selected-name').textContent = nome;
        document.getElementById('selected-img').src = imagem;
    }
}

function validarID() {
    const input = document.getElementById('user-id');
    const errorMsg = document.getElementById('error-message');

    if (!/^\d*$/.test(input.value)) {
        errorMsg.classList.remove('hidden');
        setTimeout(() => errorMsg.classList.add('hidden'), 3000);
        input.value = input.value.replace(/\D/g, '');
    }
}

function enviarItem() {
    const userID = document.getElementById('user-id').value;
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 

    if (!isLoggedIn) {
        document.getElementById('login-message').classList.remove('hidden');
        setTimeout(() => document.getElementById('login-message').classList.add('hidden'), 3000);
        return;
    }

    if (!userID) {
        alert("Digite um ID válido.");
        return;
    }

    alert("Item enviado com sucesso para o ID: " + userID);
}
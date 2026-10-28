
// ELEMENTOS DA PÁGINA
const form = document.getElementById("formLogin");
const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("senha");

const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");

const btnConfirmar = document.getElementById("confirmar");
const btnCancelar = document.getElementById("cancelar");
const btnLimpar = document.getElementById("limpar");

// VARIÁVEL PARA CONTAR AS TENTATIVAS
let tentativas = 3;

// EVENTO DO BOTÃO CONFIRMAR
form.addEventListener("submit", function (evento) {

    // Impede o formulário de recarregar a página
    evento.preventDefault();

    // VERIFICAR SE AINDA EXISTEM TENTATIVAS
    if (tentativas <= 0) {
        mensagem.textContent = "Acesso bloqueado!";
        mensagem.className = "erro";
        return;
    }

    // CAPTURAR OS VALORES DIGITADOS
    const login = campoLogin.value.trim();
    const senha = campoSenha.value;

    // VERIFICAR CAMPOS VAZIOS
    if (login === "" || senha === "") {
        mensagem.textContent = "Preencha o login e a senha.";
        mensagem.className = "erro";
        return;
    }

    // VERIFICAR LOGIN E SENHA
    if (login === "aluno" && senha === "1234") {

        mensagem.textContent = "Acesso válido! Redirecionando...";
        mensagem.className = "sucesso";

        // Desativa o botão para evitar novos envios
        btnConfirmar.disabled = true;

        // Abre outra página após o acesso correto
        setTimeout(function () {
            window.location.href = "boletim.html";
        }, 1000);

    } else {

        // DIMINUIR UMA TENTATIVA
        tentativas--;

        // VERIFICAR QUANTAS TENTATIVAS RESTAM
        if (tentativas > 0) {
            mensagem.textContent = "Acesso inválido! Tente novamente.";
            mensagem.className = "erro";

        } else {
            mensagem.textContent =
                "Acesso bloqueado! Você esgotou as 3 tentativas.";

            mensagem.className = "erro";
            btnConfirmar.disabled = true;
        }

        tentativasTexto.textContent =
            "Tentativas disponíveis: " + tentativas;
    }
});

// BOTÃO LIMPAR
btnLimpar.addEventListener("click", function () {

    campoLogin.value = "";
    campoSenha.value = "";

    mensagem.textContent = "";
    mensagem.className = "";

    campoLogin.focus();

    // Não restaura as tentativas utilizadas
});

// BOTÃO CANCELAR
btnCancelar.addEventListener("click", function () {

    form.reset();

    mensagem.textContent = "";
    mensagem.className = "";

    campoLogin.focus();

    // Cancela a digitação, mas não recupera tentativas
});

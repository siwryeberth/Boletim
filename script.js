
const nome = document.getElementById("nome");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

const resultadoNome = document.getElementById("resultadoNome");
const resultadoMedia = document.getElementById("resultadoMedia");
const resultadoSituacao = document.getElementById("resultadoSituacao");
const mensagemErro = document.getElementById("mensagemErro");

let mediaCalculada = null;

function calcularMedia() {
    mensagemErro.textContent = "";
    resultadoSituacao.textContent = "---";
    resultadoSituacao.className = "";

    const n1 = nota1.value.trim();
    const n2 = nota2.value.trim();

    if (nome.value.trim() === "") {
        mensagemErro.textContent = "Digite o nome do aluno.";
        return;
    }

    if (n1 === "" || n2 === "") {
        mensagemErro.textContent = "Preencha as duas notas.";
        return;
    }

    const valor1 = Number(n1);
    const valor2 = Number(n2);

    if (
        !Number.isFinite(valor1) ||
        !Number.isFinite(valor2) ||
        valor1 < 0 || valor1 > 10 ||
        valor2 < 0 || valor2 > 10
    ) {
        mensagemErro.textContent =
            "Erro: as notas devem estar entre 0 e 10.";
        return;
    }

    mediaCalculada = (valor1 + valor2) / 2;

    resultadoNome.textContent = nome.value.trim();
    resultadoMedia.textContent = mediaCalculada.toFixed(2);
}

function verificarSituacao() {
    if (mediaCalculada === null) {
        mensagemErro.textContent =
            "Calcule uma média válida antes de verificar a situação.";
        return;
    }

    mensagemErro.textContent = "";

    if (mediaCalculada >= 7) {
        resultadoSituacao.textContent = "Aprovado";
        resultadoSituacao.className = "aprovado";
    } else {
        resultadoSituacao.textContent = "Reprovado";
        resultadoSituacao.className = "reprovado";
    }
}

function limparCampos() {
    document.getElementById("formulario").reset();

    resultadoNome.textContent = "---";
    resultadoMedia.textContent = "---";
    resultadoSituacao.textContent = "---";

    resultadoSituacao.className = "";
    mensagemErro.textContent = "";
    mediaCalculada = null;
}

document.getElementById("btnMedia")
    .addEventListener("click", calcularMedia);

document.getElementById("btnSituacao")
    .addEventListener("click", verificarSituacao);

document.getElementById("btnLimpar")
    .addEventListener("click", limparCampos);

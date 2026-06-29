// Pegando os elementos do site para mexer com eles
const botao = document.getElementById('btnVerificar');
const campoSenha = document.getElementById('senhaInput');
const resultado = document.getElementById('resultadoTexto');

// Função que roda quando clica no botão
botao.addEventListener('click', function() {
    const senha = campoSenha.value;

    // Matemática simples: medindo o comprimento (número de caracteres) da senha
    if (senha.length === 0) {
        resultado.innerText = "Por favor, digite alguma senha!";
        resultado.style.color = "orange";
    } else if (senha.length < 8) {
        resultado.innerText = "Senha Fraca! Menos de 8 caracteres é perigoso para o sistema.";
        resultado.style.color = "red";
    } else {
        resultado.innerText = "Senha Segura! Boa proteção para os dados da fazenda.";
        resultado.style.color = "green";
    }
});

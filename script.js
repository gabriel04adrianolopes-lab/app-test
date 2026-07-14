// Seleciona os elementos do HTML
const formulario = document.getElementById('formularioVaga');
const resultadoDiv = document.getElementById('resultado');

// Escuta o evento de envio (submit) do formulário
formulario.addEventListener('submit', function(event) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados e converte para os tipos corretos
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Remove as classes de estilização anteriores e exibe a div de resultado
    resultadoDiv.className = 'resultado';

    // Regra de negócio: Altura >= 1.70 E Idade >= 18
    if (altura >= 1.70 && idade >= 18) {
        resultadoDiv.textContent = `Olá ${nome}. Parabéns! Você pode prosseguir no processo para a vaga!`;
        resultadoDiv.classList.add('sucesso');
    } else {
        resultadoDiv.textContent = `Olá ${nome}. Infelizmente você não é apto à vaga.`;
        resultadoDiv.classList.add('erro');
    }
});
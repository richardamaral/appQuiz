function carregarQuizProgramacao() {
    const quizContainer = document.querySelector('main');
    quizContainer.innerHTML = '';

    const perguntas = [
        {
            pergunta: "Qual o protocolo mais comum utilizado?",
            opcoes: ["HTTPS", "SQL", "Ruby"],
            resposta: 0 // HTTPS
        },
        {
            pergunta: "Qual linguagem é utilizada para criar a estrutura de marcação/texto na página?",
            opcoes: ["HTML", "JavaScript", "COBOL", "Assembly"],
            resposta: 0 // HTML
        },
        {
            pergunta: "Dentro de qual tag <html> eu insiro as configurações do titulo da página Web?",
            opcoes: ["<head>", "<body>", "<footer>", "Nenhuma das Alternativas"],
            resposta: 0 // <head>
        }
    ];

    perguntas.forEach((pergunta, indice) => {
        const divPergunta = document.createElement('div');
        divPergunta.classList.add('pergunta');
        divPergunta.innerHTML = `
            <h2>Pergunta ${indice + 1}:</h2>
            <p>${pergunta.pergunta}</p>
            <ul>
                ${pergunta.opcoes.map((opcao, index) => `
                    <li>
                        <label>
                            <input type="radio" name="resposta${indice}" value="${index}">
                            ${opcao}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(divPergunta);
    });

    const botaoEnviar = document.createElement('button');
    botaoEnviar.textContent = 'Enviar Respostas';
    botaoEnviar.addEventListener('click', verificarRespostas);
    quizContainer.appendChild(botaoEnviar);
}

function verificarRespostas() {
    const respostasUsuario = [];
    const perguntas = document.querySelectorAll('.pergunta');

    perguntas.forEach((pergunta, indice) => {
        const opcaoSelecionada = pergunta.querySelector(`input[name="resposta${indice}"]:checked`);
        if (opcaoSelecionada) {
            respostasUsuario.push(parseInt(opcaoSelecionada.value));
        } else {
            respostasUsuario.push(-1); 
        }
    });


    const respostasCorretas = [0, 0, 0];

    let totalCorretas = 0;
    for (let i = 0; i < respostasUsuario.length; i++) {
        if (respostasUsuario[i] === respostasCorretas[i]) {
            totalCorretas++;
        }
    }

    const resultadoContainer = document.createElement('div');
    resultadoContainer.classList.add('resultado');
    resultadoContainer.innerHTML = `
        <h2>Resultado:</h2>
        <p>Você acertou ${totalCorretas} de ${respostasCorretas.length} perguntas!</p>
    `;

    const quizContainer = document.querySelector('main');
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultadoContainer);
    
}

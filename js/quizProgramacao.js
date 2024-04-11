function carregarQuizProgramacao() {
    const quizContainer = document.querySelector('main');
    quizContainer.innerHTML = '';

    const perguntas = [
        {
            pergunta: "JavaScript é uma linguagem de?",
            opcoes: ["Programação", "Banco de Dados", "Marcação"],
            resposta: 0 // Programação
        },
        {
            pergunta: "Qual linguagem é utilizada para criar a estrutura de marcação/texto na página?",
            opcoes: ["HTML", "JavaScript", "COBOL", "Assembly"],
            resposta: 0 // HTML
        },
        {
            pergunta: "O IF se encaixa em qual parte de estrutura?",
            opcoes: ["Estrutura de Condição", "Estrutura de Repetição", "Tratamento de Exceção", "Nenhuma das Alternativas"],
            resposta: 0 // Estrutura de Condição
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

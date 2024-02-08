const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "const",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Realiza uma comparação de valor.",
        "Realiza uma comparação de valor e tipo.",
        "Realiza uma atribuição de valor.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o propósito do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar múltiplos elementos do DOM.",
        "Selecionar um elemento do DOM com base em uma classe.",
        "Selecionar um elemento do DOM com base em um seletor CSS.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'callback' em JavaScript?",
      respostas: [
        "Um método para chamar uma função síncrona.",
        "Um mecanismo para adicionar estilos a elementos HTML.",
        "Uma função passada como argumento para outra função, a ser executada posteriormente.",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara um array vazio em JavaScript?",
      respostas: [
        "array vazio = [];",
        "const array = ();",
        "const array = [];",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'forEach' faz em arrays JavaScript?",
      respostas: [
        "Filtra os elementos do array com base em uma condição.",
        "Executa uma função para cada elemento do array.",
        "Ordena os elementos do array em ordem decrescente.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
      respostas: [
        "Realizar operações matemáticas em uma única linha de código.",
        "Substituir condicionais 'if' em uma forma mais compacta.",
        "Concatenar strings de maneira eficiente.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o objeto global 'window' em JavaScript?",
      respostas: [
        "Um objeto que representa a janela do navegador.",
        "Um método para fechar a janela do navegador.",
        "Um array que armazena informações sobre as abas abertas.",
      ],
      correta: 0
    },
    {
      pergunta: "Como você adiciona um evento de clique a um botão com id 'btn' em JavaScript?",
      respostas: [
        "document.getElementById('btn').addEventListener('click', function() {});",
        "button#btn.addEventListener('click', function() {});",
        "btn.addEventListener('click', function() {});",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'scope' em JavaScript?",
      respostas: [
        "A largura da janela do navegador.",
        "A visibilidade e acessibilidade de variáveis em uma determinada parte do código.",
        "Uma função que executa um determinado código após um período de tempo.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
     
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()

    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
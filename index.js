const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
      respostas: [
        "function: minhaFuncao",
        "função minhaFuncao",
        "function minhaFuncao",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de selecionar um elemento pelo ID em JavaScript?",
      respostas: [
        "getElementByTagName",
        "getElementByID",
        "getElementById",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador utilizado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como você define uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "variable myVar;",
        "var myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print",
        "console.log",
        "log",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push",
        "add",
        "append",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i <= 5)",
        "for (i = 0; i <= 5; i++)",
        "loop (i = 0; i <= 5)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "convertToNumber",
        "parseInt",
        "stringToNumber",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&",
        "&&",
        "||",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop",
        "remove",
        "delete",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
  
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  
  for(let respostas of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      if(estaCorreta) {
        corretas.add(item)
      } else(corretas.delete(item))
      mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
  }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
   quizItem.querySelector('dl dt').remove()
  
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
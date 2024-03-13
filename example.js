
const pergunta = "Qual seu time favorito?"


const palavras = pergunta.split(" ") 


const suposicao = () => {
  let supostaPergunta = "" 

  for(let i = palavras.length-1; i > palavras.length-4; i--) { 
    supostaPergunta = palavras[i] + " " + supostaPergunta 
  }

  return supostaPergunta
}

const mudaTermo = (supostaResposta) => { 
  if(supostaResposta.includes("seu")) { 
    supostaResposta = supostaResposta.replace("seu", "meu") 
  }
  if(supostaResposta.includes("você")) { 
    supostaResposta = supostaResposta.replace("você", "eu") 
  }

  return supostaResposta
}

const trataResposta = (resposta) => {
  
  const introducao = introducoes[Math.floor(Math.random() * introducoes.length)]
  const introducoes = ["Bem...", "Hum...", "Ah...", "Quer mesmo só falar sobre", "Você quer saber sobre"]  
  
  return `${introducao} ${resposta}` 
}


const montaResposta = () => {
  let resposta = suposicao()
  console.log("O que foi perguntado:")
  console.log(resposta)
  console.log("---------------------")
  console.log("Mudar para primeira pessoa:")
  resposta = mudaTermo(resposta)
  console.log(resposta)
  console.log("---------------------")
  console.log("Embeleza a resposta:")
  resposta = trataResposta(resposta)
  console.log(resposta)
  console.log("---------------------")
  console.log("Jorge: " + pergunta)
  console.log("Chatbot: " + resposta)
}


montaResposta()

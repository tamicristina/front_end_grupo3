// Array com as mensagens
const mensagens = [
  { titulo: "Boa noite!!", corpo: "Você é a luz do meu dia!" },
  { titulo: "OI!!", corpo: "Adoro o seu sorriso!" },
  { titulo: "Titulo 2", corpo: "Você é incrível!" },
  {
    titulo: "Titulo 3",
    corpo: "Hoje é um dia especial porque você está aqui!",
  },
];

// Função para trocar as mensagens
function atualiarMensagem() {
  const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
  const mensagem = mensagens[indiceAleatorio];

  // Atualiza o título
  document.getElementById("titulo").innerText = mensagem.titulo;

  // Atualiza o corpo
  document.getElementById("corpo").innerText = mensagem.corpo;
}

// Atualizar a mensagem a cada 5 segundos
setInterval(atualiarMensagem, 3000);

// Atualizar imediatamente quando a página for
atualiarMensagem();

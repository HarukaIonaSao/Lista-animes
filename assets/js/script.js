function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Chopper",
      imagem: "https://i.postimg.cc/yNyf6YQN/icon.png",
      descricao:
        "Tony Chopper é uma rena. Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.",
      citacao: " Se eu puder ajudar, vou me tornar um monstro de verdade. ",
    },
    bio02: {
      nome: "Papyrus",
      imagem: "https://i.postimg.cc/5yBGzqpw/papyrus.jpg",
      descricao:
        "É um dos personagens principais em Undertale. Ele quer capturar um humano para virar um membro da Guarda Real que, segundo ele, o encherá de popularidade. ",
      citacao: " VOU TER TODAS AS COISAS QUE EU MEREÇO!",
    },
    bio03: {
      nome: "Gintoki",
      imagem: "https://i.postimg.cc/VkpRY0W1/gintoki.png",
      descricao:
        "Ele é o fundador e presidente do Yorozuya(escritório faz-tudo), bem como um samurai altamente qualificado, tendo lutado na Guerra Joui no passado. Ama doces e luta por seus amigos.",
      citacao:
        "Se tem tempo para pensar em um final belo, porque não vive belamente até o fim?",
    },
    bio04: {
      nome: "Nico Robin",
      imagem: "https://i.postimg.cc/hjTgCmpG/robin.jpg",
      descricao:
        "Arqueóloga da tripulaçção dos Chapéu de Palha. Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.",
      citacao:
        "A história pode se repetir, mas as pessoas não podem voltar ao passado. ",
    },
    bio05: {
      nome: "Chika Amatori",
      imagem: "https://i.postimg.cc/pr3fPgKC/chika.jpg",
      descricao:
        "Chika Amatori é uma dos personagens principais do mangá World Trigger. Ela é um Membro Rank-B da Border e membro da Unidade Mikumo. Ela tem um Nível de Trion Imenso.",
      citacao: " Vou me esforçar!",
    },
    bio06: {
      nome: "Sonic",
      imagem: "https://i.postimg.cc/rs4JRVV3/sonic.jpg",
      descricao:
        "Sonic é notório por ser extremamente rápido, aventureiro, corajoso e extrovertido. Luta sempre pela justiça, liberdade, compaixão e pelos indefesos. Enfrenta todos os perigos para ajudar os outros, encarando tudo como um desafio. Mas gosta também de relaxar e descansar, mostrando-se também preguiçoso.",
      citacao: "Gotta Go Fast",
    },
  };

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "<blockquote><q>" +
      biografias[bio].citacao +
      "</q></blockquote>" +
      "</details></div>";
  }
}

carregaDicionario();

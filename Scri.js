function jogarAdivinhacao() {
    alert("Bem-vindo ao Jogo de Adivinhação!");
    alert("Eu pensarei em um número entre 1 e 100");
    alert("E você tera que adivinhar em 10 tentativas");
    alert("Vamos começar?")
  
    const w = true;
  
    while(W){
      const numeroPensado = Math.floor((Math.random()*100)+1);
      const quantTentativas = 10;
      const tentativas = 0;
      const acerto = false;
  
      alert("Já pensei em um número. Qual é o seu chute?");
  
      while(tentativas<quantTentativas){
        const chute = prompt(`Tentativa ${tentativas + 1} de ${quantTentativas}. Tente outra vez:`);
  
        let palpite = parseInt(chute);
  
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
          alert("Por favor, digite um número válido entre 1 e 100.");
          continue;
        }
  
        tentativas++;
  
        if (palpite === numeroSecreto) {
          alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
          acertou = true;
          break;
        } else if (palpite < numeroSecreto) {
          alert("O número secreto é MAIOR que o seu palpite.");
        } else {
          alert("O número secreto é MENOR que o seu palpite.");
        }
      }
  
      if (!acertou) {
        alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
      }
  
      jogarNovamente = confirm("Deseja jogar novamente?");
    }
  
    alert("Obrigado por jogar! Até a próxima.");
  }
  
  // Iniciar o jogo
  jogarAdivinhacao();
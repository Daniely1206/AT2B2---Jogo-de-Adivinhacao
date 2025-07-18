function jogarAdivinhacao(){
    alert("Bem-vindo ao Jogo de Adivinhação!");
    alert("Eu pensarei em um número entre 1 e 100");
    alert("E você tera que adivinhar em 10 tentativas");
    alert("Digite 0 para sair");
  
    let w = true;
  
    while(w){
      const numeroPensado = Math.floor((Math.random()*100)+1);
      const quantTentativas = 10;
      let tentativas = 1;
      let erro = true;

      let chute = parseInt(prompt("Já pensei em um número. Qual é o seu chute?"));

      if(chute==0){
        alert("Entendido! Até a próxima!");
        w = false;
      }else{
         while(erro){
            if(chute<1 || chute>100){
                alert("Número inválado!");
            }else{
                if(chute==numeroPensado){
                    alert(`Muito Bem! Você acertou o número que eu pensei: ${numeroPensado}! E fez isso em ${tentativas} tentativas!`);
                    erro = false;
                }else if(chute>numeroPensado){

                    alert(`O número que eu pensei é MENOR que ${chute}...`);

                }else if(chute<numeroPensado){

                    alert(`O número que eu pensei é MAIOR que ${chute}...`);
                }
                if(erro){
                    if(tentativas==quantTentativas){
                        alert("Que pena... Suas tentativas acabaram...");
                        alert(`O meu número era ${numeroPensado}!`);
                        erro = false;
                    }else{
                        chute = parseInt(prompt(`Você tem ${quantTentativas-tentativas} tentativas rentantes. Qual é o seu próximo chute?`));
                    }
                }
                tentativas++;
            }
        }
      }
    }
}


jogarAdivinhacao();

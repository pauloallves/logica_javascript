alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
   if (chute > numeroSecreto){
    alert("O número secreto o menor que seu atual chute!")
   }
   else{
    alert("O número secreto o maior que seu atual chute!")
   }
}
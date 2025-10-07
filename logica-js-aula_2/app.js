/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
// se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto o menor que seu atual chute! ${chute}`);
        }
        else{
            alert(`O número secreto o maior ${chute}`);
            tentativas++;
        }
    }
}*/
//let contador = 0;

//while (contador < 10){
    //console.log(contador);
    //contador++;
//}
//let contador = 10
//while (contador > 0){
    //console.log(contador);
    //contador--;
//}
//let numero = prompt('Digite um número aleatório.');
//contador = 0
//while (contador >= numero){
    //contador--;
    //console.log(contador);  
//}
let numero = prompt( 'Digite um número.');
contador = 0;
while(contador <= numero){
    console.log(contador);
    contador++;
}
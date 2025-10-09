alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
*/
/*console.log('Boas-vindas');

let nome = 'Paulo';
console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}`);

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

let valor1 = 10;
let valor2 = 12;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`);

let valor3 = 10;
let valor4 = 12;
let resultado1 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}`);

let idade = prompt('Digite sua idade');
if (idade > 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você e menor de idade');
}

let numero = prompt('Digite um número');
if (numero > 0){
    console.log('O número digitado é positivo');
}else{
    console.log('O número digitado é negativo');
}

let contador = 10;
let numero1 = 1;
while(numero1 <= contador){
    console.log(numero1);
    numero1++;
}

let nota = 8;
if (nota >= 7){
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio2);
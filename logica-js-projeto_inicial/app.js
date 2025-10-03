/*alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = 10;
console.log(numeroSecreto);
let chute = prompt ('Digite umm número entre 1 e 10');

//se chute for igual ao número secreto
if(chute == numeroSecreto){
    console.log(`Você acertou o número secreto! ${numeroSecreto}`);
}else{
    alert('Você errou o :(');
}*/

/*alert ("Bem vindo ao anosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert (mensagemDeErro);
let novoNome = prompt("Digite seu nome");
let novaIdade = prompt("Digite sua idade");
let campo = "";
if (novaIdade >= 18){
    alert("Pode tirar a habilitação")
}else if (novaIdade === ""){
    alert("Você não informou sua idade")
}
else{
    alert("Você não possuí idade mínima para tirar a CNH")
}*/

let diaDaSemana = prompt("Digite um dia da semana");

if(diaDaSemana == "Sábado"){
    alert("Bom fim de semana!")
}else if (diaDaSemana == "Domingo"){
    alert("Bom fim de semana!")
}else{
    alert("Boa Semana!")
}

let numero = prompt("Digite um número entre -10 e 10");

if(numero < 0){
    alert("Você digitou um número negativo.")
}else if(numero > 0){
    alert("Você digitou um número positivo.")
}else{
    alert("Você digitou um número neutro.")
}
let pontuacao = prompt("Digite uma pontuação entre 1 e 1000");

if (pontuacao >= 100){
    alert("Parabéns, você venceu!")
}else{
    alert("Tente novamente para ganhar.")
}

let saldo = 1000
alert(`Seu saldo é: ${saldo}`);

let nomeUsuario = prompt("Digite seu nome");
alert(`${nomeUsuario}, seja Bem-vindo!`);
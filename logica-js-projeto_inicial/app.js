/*alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = 29;
let chute = prompt ('Digite umm número entre 1 e 30');

if(chute == numeroSecreto){
    console.log('Você acertou o número secreto!');
}*/
alert ("Bem vindo ao anosso site!");
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
}
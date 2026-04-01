let numero = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag,Texto){

let compo = document.querySelector(tag);
compo.innerHTML = Texto; 
responsiveVoice.speak(Texto,'Brazilian Portuguese Female',{rate:1.2}); 
}

function exibirTextoInicial(){ 
exibirTextoNaTela('h1','Jogo do numero secreto.');
exibirTextoNaTela('p','Escolha um numero entre 1 a 10.');
};

exibirTextoInicial();

function verificarChute() {
let chut = document.querySelector('input').value;
    
if (chut == numero ){
        exibirTextoNaTela ('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let numeroDeTentativas = `Você descobreu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', numeroDeTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');    
}else {
if (chut > numero){
       exibirTextoNaTela ('p','O Numero e menor');
}
else {exibirTextoNaTela ('p','O numero e maior ');
}
        
tentativas++;
liparCampo();
    
}

}

function gerarNumeroAleatorio() {

return parseInt(Math.random() * 10 + 1);
        
}

function liparCampo(){
    chut = document.querySelector('input');
    chut.value =''; 
}
function reiniciarojogo() {
    numero = gerarNumeroAleatorio();
    liparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
} 
console.log(numero);   


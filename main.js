const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo')
for(let i=0; i<botoes.length; i++){
    botoes[i].onclick = function(){
       
        botoes[i].classList.add('ativo');
        botoes[i-1].classList.remove('ativo');

        textos[i].classList.add('ativo');
        textos[i-1].classList.remove('ativo');
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-25T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
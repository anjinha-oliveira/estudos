var valorDaHora = document.querySelector("#valor-hora");
var horasProjeto = document.querySelector("#horas-projeto");
var resposta = document.querySelector("#resposta")

function calcular() {

    var calculoValorProjeto = (valorDaHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2);
    resposta.textContent = "R$" + calculoValorProjeto;
    
};

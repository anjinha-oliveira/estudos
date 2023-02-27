var ganhoPorMes = document.querySelector("#ganho-mes");
var horasPorDia = document.querySelector("#horas-dia");
var hora = document.querySelector(".secao-hora .secao__rodape__valor span");

function calcularValorHora() {
    var qtdTotalDeHoras = horasPorDia.valueAsNumber * 22;
    var valorDeHora = (ganhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);
    hora.textContent = "R$" + valorDeHora;
    
};
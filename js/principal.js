var titulo = document.querySelector(".titulo");
titulo.textContent = "Thalyta Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
const altura = tdAltura.textContent;

const tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhvalida = true;



if (peso <= 0 || peso >= 1000) {
    console.log("peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("altura inválida");
    alturaEhvalida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhvalida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



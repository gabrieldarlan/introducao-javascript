var titulo = document.querySelector(".titulo");
titulo.textContent = "Thalyta Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura inválida");
        alturaEhvalida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhvalida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
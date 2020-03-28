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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", () => {
    console.log("botao clicado");
    
});
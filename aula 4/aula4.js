function obterPeso() {
    let peso = prompt("Digite seu peso (em kg):");
    return parseFloat(peso);
}

function obterAltura() {
    let altura = prompt("Digite sua altura (em metros):");
    return parseFloat(altura);
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function calcularEClassificarIMC() {
    let peso = obterPeso();
    let altura = obterAltura();

    if (peso > 0 && altura > 0) {
        let resultadoIMC = calcularIMC(peso, altura);
        let classificacao = classificarIMC(resultadoIMC);
        alert(`Seu IMC é: ${resultadoIMC.toFixed(2)} - ${classificacao}`);
    } else {
        alert("Por favor, insira valores válidos e maiores que zero para peso e altura.");
    }
}

calcularEClassificarIMC();

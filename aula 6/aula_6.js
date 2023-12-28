function manipularEntrada() {
    let resultado = ''; 
    while (true) {
        let entrada = prompt("Digite um valor (digite 'sair' para encerrar):");

        if (entrada.toLowerCase() === 'sair') {
            break;
        }

        resultado += `\nVocê digitou: ${entrada}`;
    }

    alert("Resultados:" + resultado);
}

manipularEntrada();
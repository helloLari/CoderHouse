// Solicitar o nome pelo prompt e mostrá-lo em console junto a algum texto de saudação
let nome = prompt("Digite o seu nome:");
console.log(`Olá, ${nome}!`);

// Solicitar um número pelo prompt, parseá-lo, somá-lo a outro número e mostrar o resultado por console
let numeroArmazenado = 10; // Número armazenado em uma variável
let numero = parseFloat(prompt("Digite um número:"));
let resultadoSoma = numero + numeroArmazenado;
console.log(`O resultado da soma é: ${resultadoSoma}`);

// Solicitar um texto pelo prompt, depois outro, concatená-los e mostrar o resultado através de alert
let texto1 = prompt("Digite seu nome:");
let texto2 = prompt("Digite seu sobrenome:");
let textoConcatenado = texto1 + ' ' + texto2;
alert(`O texto concatenado é: ${textoConcatenado}`);

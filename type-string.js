// string com aspas udplas e aspas simples
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';

const StringDeNumeros = "34567"

const nome = 'Kemoel '
const citacao = 'disse: "Gosto de bolo", e foi embora!'

// concatenação de string(+)
console.log(nome + citacao)


// codigos unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// toLowerCase() & ===
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// conta quantidade de carectere
const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres
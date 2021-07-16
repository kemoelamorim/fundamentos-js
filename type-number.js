// tipo numero
const primeiroNumero = 5;
const segundoNumero = 2;

// numeros decimais
const pontoFlutuante = 2.5;

// Operacoes soma subitracao multiplicacao divisao (+ - * /)

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// NaN quando o interpretador JS nao reconhece o Objeto com numero
const alura = 'alura'
console.log(alura * segundoNumero)

 // Math.PI retorna o numero de PI e toFixed() que recebe os paramentros das casas decimais 
console.log(Math.PI.toFixed(2))

// Infinity
var a = 10
var b = 0
console.log(a/b) 

// NaN
var a = 0
var b = 0
console.log(a/b) 

// funcao que retorta numeros arredondados
ganhoProHora = (salario, horasTrabalhadas) => {
    ganhoProHoraTrabalhada = salario / horasTrabalhadas
    const formatado = ganhoProHoraTrabalhada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatado;
    //return Math.round(ganhoProHoraTrabalhada);
}

console.log(ganhoProHora(1164, 180))
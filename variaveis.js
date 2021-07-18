// boolean
const usuarioLogado = true;
const contaPaga = false;

console.log( 1 == contaPaga)
console.log( "" == contaPaga)

var idade = null;
console.log(typeof idade)

idade = 2;
console.log(idade)

let forma = "retangulo"
let altura = 5;
let comprimento = 7;
let area;

if (forma === "retangulo"){
    area = altura * comprimento
}else {
    area = (altura * comprimento) / 2
}
console.log(area)
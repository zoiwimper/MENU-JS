// 3.) Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
// Análisis de requerimientos:
// Entrada: Definir n1, n2, n3, n4 Como Real
//          Definir producto, suma, media_aritmetica Como Real
//          Escribir "Inserte la primera variable: "
//          Leer n1
//          Escribir "Inserte la segunda variable: "
//          Leer n2
//          Escribir "Inserte la tercera variable: "
//          Leer n3
//          Escribir "Inserte la cuarta variable: "
//          Leer n4
//          producto = n1 * n2 * n3 * n4
//          suma = n1 + n2 + n3 + n4
//          media_aritmetica = suma / 4
//          Escribir "El valor del producto de las variables da como resultado:", producto
//          Escribir "La suma de las variables digitadas da como resultado:", suma
//          Escribir "La media aritmética de las variables da como resultado:", media_aritmetica
// Salida: mostrar variables
const prompt = require('prompt-sync')();
function ejercicio3(){
let n1 = parseFloat(prompt("Inserte la primera variable: "))
let n2 = parseFloat(prompt("Inserte la segunda variable: "))
let n3 = parseFloat(prompt("Inserte la tercera variable: "))
let n4 = parseFloat(prompt("Inserte la cuarta variable: "))
let producto = n1 * n2 * n3 * n4
let suma = n1 + n2 + n3 + n4
let media_aritmetica = suma / 4
console.log("El valor del producto de las variables da como resultado:", producto)
console.log("La suma de las variables digitadas da como resultado:", suma)
console.log("La media aritmética de las variables da como resultada:", media_aritmetica)
}

ejercicio3()
// 4.) Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos
// (nota: una libra equivale a 0.453593 kilogramos)
// Análisis de requerimientos:
// Entrada: Definir libras, kilogramos, gramos Como Real
//          Escribir "Ingrese su peso en libras:"
//          Leer libras
//          kilogramos = libras * 0.453593
//          gramos = kilogramos * 1000 

const prompt = require('prompt-sync')()
function ejercicio4(){
let libras = parseFloat(prompt("Ingrese su peso en libras:"))
let kilogramos = libras * 0.453593
let gramos = kilogramos * 1000
console.log("Su peso en kilogramos da:", kilogramos, "y en gramos da:", gramos)
}
ejercicio4()
// 1.) Algoritmo que transforme de grados Celsius a Fahrenheit
// Análisis de requerimientos:
// Entrada: gradoscelsius = 0, gradosfahrenheit = 0, calculo(proceso)
// Proceso: calculo = (gradoscelsius * 9/5) + 32
//          Escribir "Los grados en celsius es:", gradoscelsius, "transformados a grados Fahrenheit da:", gradosfahrenheit
// Salida: Escribir calculo

const prompt = require('prompt-sync')();
function ejercicio1(){
let gradoscelsius = parseInt(prompt("Ingrese los grados celsius a transformar a Fahrenheit: "))
let gradosfahrenheit = (gradoscelsius * 9/5) + 32
console.log("Los grados en celsius es:", gradoscelsius, "transformados a grados Fahrenheit da:", gradosfahrenheit)
}

ejercicio1()
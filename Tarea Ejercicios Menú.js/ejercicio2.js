// 2.) Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número
// Análisis de requerimientos:
// Entrada: Declarar numero, doble, triple Como Entero
//          Escribir "Inserte un número entero: "
//          Leer numero
//          doble = numero * 2
//          triple =numero * 3
//          Escribir "El número insertado es:", numero, "el doble del mismo es:", doble 
//          Escribir "Por último su triple es:", triple
// Proceso: mostrar mensaje

const prompt = require('prompt-sync')();
function ejercicio2(){
let numero = parseInt(prompt("Inserte un número entero:"))
let doble = numero * 2
let triple = numero * 3
console.log("El número insertado es:", numero, "el doble del mismo es:", doble)
console.log("Por último su triple es:", triple)
}

ejercicio2()
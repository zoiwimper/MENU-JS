// 5.) Diseñar un algoritmo que resuelva la siguiente expresión matemática:
//  x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
// Análisis de requerimientos:
// Entrada: Definir a, b , c Como Real
// Proceso: Escribir "Inserte el valor de a:"
//          Leer a
//          Escribir "Inserte el valor de b:"
//          Leer b
//          Escribir "Inserte el valor de c:"
//          Leer c
//          seno = sen(a)
//          cos = cos(b)
//          trunc = trunc(a)
//          modtrunc = tunc MOD 2
//          raizcubica = raiz(a ^ 3)
//          denominador = a * b + c
//          Si denominador == 0 entonces
//             Escribir "Error: División por cero."
//          FinSi
//          x = ((seno + cos) * modtrunc) + (raizcubica / denominador)
//          Escribir "El resultado de la expresión es:", x
// Salida: mostrar resultado

const prompt = require('prompt-sync')();
function ejercicio5(){
let a = parseFloat(prompt("Inserte el valor de a:"))
let b = parseFloat(prompt("Inserte el valor de b:"))
let c = parseFloat(prompt("Inserte el valor de c:"))

let seno = Math.sin(a)
let coseno = Math.cos(b)
let trunc = Math.trunc(a)
let modtrunc = trunc % 2
let raizcubica = Math.cbrt(a)
let denominador = a * b + c
if (denominador == 0 ){
    console.log("Error: División por cero.")
} 
else{
let x = ((seno + coseno) * modtrunc) + (raizcubica / denominador)
console.log("El resultado de la expresión es:", x)
}
}

ejercicio5()
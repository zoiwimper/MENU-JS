// 7.) Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.
// Análisis de requerimientos:
// Entrada: Definir num1, num2 Como Entero
//          Escribir "Inserte el primer número:"
//          Leer num1
//          Escribir "Inserte el segundo número:"
//          Leer num2
//          Si num1 % 2 == 0 Y num2 % 3 == 0 entonces
//            Si num1 > 2 entonces
//               Escribir "El número mayor es:", num1
//            Sino
//               Escribir "El número mayor es:", num2
//            FinSi
//          Sino
//            Escribir "Ninguna de las condiciones se cumplen por que el primer número debe ser par y el segundo debe ser impar."
//          FinSi
// Salida: mostrar mensaje

const prompt = require('prompt-sync')();
function ejercicio7(){
let num1 = parseInt(prompt("Inserte el primer número:"))
let num2 = parseInt(prompt("Inserte el segundo número:"))

if (num1 % 2 == 0 && num2 % 3 == 0){
    if (num1 > num2){
        console.log("El número mayor es:", num1)
    }
    else{
        console.log("El número mayor es:", num2)
    }
}
else{
    console.log("Ninguna de las condiciones se cumplen por que el primer número debe ser par y el segundo debe ser impar.")
}
}

ejercicio7()
// 21.) Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
// Análisis de requerimientos:
// Entrada: primero =""(leer), segundo =""(leer)
// Proceso: Escribir "Ingrese el primer carácter: "
//          Leer primero
//          Escribir "Ingrese el segundo carácter: "
//          Leer segundo
//          Si primero == segundo entonces
//            Escribir "Los caracteres ingresados son iguales."
//          SinoSi Asc(primero) < Asc(segundo) entonces
//            Escribir "El primer carácter es menor que el segundo."
//          Sino
//            Escribir "El primer carácter es mayor que el segundo."
//          FinSi
//          FinProceso
// Salida: mostrar Proceso

const prompt = require('prompt-sync')()

function ejercicio21(){
    let primero = prompt("Ingrese el primer carácter: ")
    let segundo = prompt("Ingrese el segundo carácter: ")
    if(primero == segundo){
        console.log("Los caracteres ingresados son iguales.")
    }
    else if(primero < segundo){
        console.log("El primer carácter es menor que el segundo.")
    }
    else{
        console.log("El primer carácter es mayor que el segundo.")
    }
}

ejercicio21()
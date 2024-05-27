// 22.) Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
// Análisis de requerimientos:
// Entrada: nombre1= ""(leer), nombre2= ""(leer)
// Proceso: Escribir "Escriba el primer nombre: "
//          Leer nombre1
//          Escribir "Escriba el segundo nombre: "
//          Leer nombre2
//          Si Asc(nombre1) == Asc(nombre2) entonces
//            Escribir "Los 2 nombres escritos son iguales."
//          SinoSi Asc(nombre1) < Asc(nombres2) entonces
//            Escribir "El primer nombre es menor que el segundo nombre."
//          Sino
//            Escribir "El primer nombre es mayor que el segundo nombre."
//          FinSi
//          FinProceso
// Salida: mostrar nombres

const prompt = require('prompt-sync')()
function ejercicio22(){
    let nombre1 = prompt("Escriba el primer nombre: ")
    let nombre2 = prompt("Esciba el segundo nombre: ")
    if (nombre1 == nombre2){
        console.log("Los 2 nombres escritos son iguales.")
    }
    else if (nombre1 < nombre2){
        console.log("El primer nombre es menor que el segundo nombre.")
    }
    else{
        console.log("El primer nombre es mayor que el segundo nombre.")
    }
}

ejercicio22()
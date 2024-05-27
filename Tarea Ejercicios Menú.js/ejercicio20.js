// 20.) Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”
// Análisis de requerimientos:
// Entrada: Definir cadena Como Caracter
//          Definir Longitud Como Entero
//          Definir inicial Como Entero
//          Definir final Como Entero
//          Definir medio Como Caracter
//          Definir puntuacion Como Caracter
//          puntuacion = ";:,."
// Proceso: Escribir "Digite la cadena: "
//          Leer cadena
//          longitud = Longitud(cadena)
//          Si longitud >= 2 entonces
//            inicial = longitud / 2
//            final = posicioninicial + 1
//            medio = Subcadena(cadena, inicial, 1)
//          Si Posicion(puntuacion, medio) > 0 entonces
//            Escribir "El carácter de en medio es:", medio
//          Sino
//            Escribir "El carácter de en medio no es un carácter de puntuación."
//          FinSi
//          Sino
//            Escribir "La cadena debe tener al menos dos caracteres."
//          FinSi
//          FinProceso
// Salida: Proceso

const prompt = require('prompt-sync')()

function ejercicio20(){
    let cadena = prompt("Digite la cadena: ")
    let longitud = cadena.length
    let inicial = longitud / 2
    let final = inicial + 1
    let medio = cadena.substring(inicial, final)
    let puntuacion = ";:,."
    if (longitud >= 2){
        if (puntuacion.indexOf(medio) > 0){
            console.log("El carácter de en medio es:", medio)
        }
        else{
            console.log("El carácter de en medio no es un carácter de puntuación.")
        }
    }
    else{
        console.log("La cadena debe tener al menos dos caracteres de puntuación.")
    }
}

ejercicio20()
// 23.) Dado una cadena indicar cuantos elementos tiene, sin usar ciclos.
// Análisis de requerimientos:
// Entrada: Definir cadena Como Caracter
//          Definir Longitud Como Entero
// Proceso: Escribir "Ingrese una cadena"
//          Leer cadena
//          Longitud = longitud(cadena)
//          Escribir "La cadena tiene", Longitud, "elementos."
// Salida: Mostrar cadena

const prompt = require('prompt-sync')()
function ejercicio23(){
    let cadena = prompt("Ingrese una cadena: ")
    let longitud = cadena.length
    console.log("La cadena tiene", longitud, "elementos.")
}

ejercicio23()
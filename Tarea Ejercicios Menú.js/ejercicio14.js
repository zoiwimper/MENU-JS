// 14.) Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.
// Análisis de requerimientos:
// Entrada: Definir direccion Como Texto
// Proceso: Escribir "Escriba la dirección: "
//          Leer direccion
//          Escribir "La dirección ingresada es:", direccion
//          Definir Longitud Como Entero
//          longitud = Longitud(direccion)
//          Definir Medio Como Entero
//          Medio = longitud / 2
//          Escribir "El primer carácter de la dirección es:", (direccion, 1, 1)
//          Escribir "El carácter del medio de la dirección es:", (direccion, Medio, 1)
//          Escribir "El último carácter de la dirección es:", (dirección, longitud, 1)
//          FinProceso
// Salida: Proceso
const prompt = require('prompt-sync')()
function ejercicio14(){
    let direccion = prompt("Escriba la dirección: ")
    let longitud = direccion.length
    let medio = longitud / 2
    console.log("La dirección ingresada es:", direccion)
    console.log("El primer carácter de la dirección es:", direccion[0])
    console.log("El carácter del medio de la dirección es:", direccion[medio])
    console.log("El último carácter de la dirección es:", direccion[longitud - 1])
}
ejercicio14()
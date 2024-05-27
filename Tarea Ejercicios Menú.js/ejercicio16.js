// 16.) Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
// Análisis de requerimientos:
// Entrada: Definir nombres Como Texto[3]
//          Definir nombre Como Texto
//          Escribir "Ingrese el primer nombre: "
//          Leer nombre
//          nombres[0] = nombre
//          Escribir "Ingrese el segundo nombre: "
//          Leer nombre
//          nombres[1] = nombre
//          Escribir "Ingrese el tercer nombre: "
//          Leer nombre
//          nombres[2] = nombre
//          Escribir "El primer y último carácter de cada nombre:"
//          Escribir "Primer carácter del primer nombre:", (nombres[0], 1, 1)
//          Escribir "Último carácter del primer nombre:", (nombres[0], Longitud(nombres[0]), 1)
//          Escribir "Primer carácter del segundo nombre:", (nombres[1], 1, 1)
//          Escribir "Último carácter del segundo nombre:", (nombres[1], Longitud(nombres[1], 1))
//          Escribir "Primer carácter del tercer nombre:", (nombres[2], 1, 1)
//          Escribir "Último carácter del tercer nombre:", (nombres[2], 1, 1)
// Salida: nombres[0], nombres[1], nombres[2]

const prompt = require('prompt-sync')();
function ejercicio16(){
    let nombres = []
    let nombre = prompt("Ingrese el primer nombre: ")
    nombres[0] = nombre
    nombre = prompt("Ingrese el segundo nombre: ")
    nombres[1] = nombre
    nombre = prompt("Ingrese el tercer nombre: ")
    nombres[2] = nombre
    console.log("El primer y último carácter de cada nombre:")
    console.log("Primer carácter del primer nombre:", (nombres[0][0]))
    console.log("Último carácter del primer nombre:", (nombres[0][nombres[0].length - 1]))
    console.log("Primer carácter del segundo nombre:", (nombres[1][0]))
    console.log("Último carácter del segundo nombre:", (nombres[1][nombres[1].length - 1]))
    console.log("Primer carácter del tercer nombre:", (nombres[2][0]))
    console.log("Último carácter del tercer nombre:", (nombres[2][nombres[2].length - 1]))
}
ejercicio16()
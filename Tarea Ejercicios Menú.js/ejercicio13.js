// 13.) Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
// Análisis de requerimientos:
// Entrada: Definir nombres Como Texto[5]
// Proceso: Escribir "Ingrese el primer nombre: "
//          Leer nombres[0]
//          Escribir "Ingrese el segundo nombre: "
//          Leer nombres[1]
//          Escribir "Ingrese el tercer nombre: "
//          Leer nombres[2]
//          Escribir "Ingrese el cuarto nombre: "
//          Leer nombres[3]
//          Escribir "Ingrese el quitno nombre: "
//          Leer nombres[4]
//          Escribir nombres[4]
//          Escribir nombres[3]
//          Escribir nombres[2]
//          Escribir nombres[1]
//          Escribir nombres[0]
// Salida: mostrar nombres
const prompt = require('prompt-sync')()
function ejercicio13(){
    let nombres = []
    nombres[0] = prompt("Ingrese el primer nombre: ")
    nombres[1] = prompt("Ingrese el segundo nombre: ")
    nombres[2] = prompt("Ingrese el tercer nombre: ")
    nombres[3] = prompt("Ingrese el cuarto nombre: ")
    nombres[4] = prompt("Ingrese el quinto nombre: ")
    console.log(nombres[4])
    console.log(nombres[3])
    console.log(nombres[2])
    console.log(nombres[1])
    console.log(nombres[0])
}
ejercicio13()
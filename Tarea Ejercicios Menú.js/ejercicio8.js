// 8.) Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
// y si no presentar solo el carácter.

// Análisis de requerimientos:
// Entrada:Definir caracter Como Carácter
// Proceso: Escribir "Escriba un carácter:"
//          Leer caracter
//          Si caracter >= "a" Y caracter <= "z" entonces
//             Escribir "El carácter está comprendido entre las letra "a" y "z"."
//          Sino
//           Si caracter = "," O caracter = "." O caracter = ";" O caracter = ":" entonces
//             Escribir "El carácter es un signo de puntuación (. , ; :)."
//           Sino
//             Escribir "El carácter no está comprendido entre las letras "a" y "z" y tampoco es un signo de puntuación."
//             FinSi
//          FinSi

const prompt = require('prompt-sync')();
function ejercicio8(){
let caracter = prompt("Escribe un carácter: ")

if (caracter >= "a" && caracter <= "z"){
    console.log("El carácter está comprendido entre las letras 'a' y 'z'.")
}
else if (caracter == ',' || caracter == '.' || caracter == ';' || caracter == ':'){
    console.log("El carácter no está comprendido entre las letras 'a' y 'z' y tampoco es un signo de puntuación.")
}
else{
    console.log("El carácter no está comprendido entre las letras 'a' y 'z' y tampoco es un signo de puntuación.")
}
}
ejercicio8()
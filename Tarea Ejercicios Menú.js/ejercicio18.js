// 18.) Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra.
// Entrada: Definir cadena Como Caracter
//          Definir ultimocaracter Como Caracter
// Proceso: Escribir "Ingrese la cadena: "
//          Leer cadena
//          Si cadena <> "" Entonces
//            ultimocaracter = Subcadena(cadena, 1, 1)
//          Mientras cadena > 1 Hacer
//            cadena = Subcadena(cadena, 2, Largo(cadena))
//            ultimocaracter = Subcadena(cadena, 1, 1)
//          FinMientras
//          Si (ultimocaracter >= "A" Y ultimocaracter <= "Z") O (ultimocaracter >= "a" Y ultimocaracter <= "z") entonces
//            Escribir "El último carácter escrito es una letra:", ultimocaracter
//          Sino
//            Escribir "El último carácter escrito no es una letra."
//          FinSi
//          Sino
//            Escribir "La cadena está vacía."
//          FinSi
//          FinProceso
// Salida: proceso
const prompt = require('prompt-sync')()

function ejercicio18(){
    let cadena = prompt("Ingrese la cadena: ")
    if (cadena.length > 0) {
        let ultimoCaracter = cadena[cadena.length - 1]
        if ((ultimoCaracter >= "A" && ultimoCaracter <= "Z") || (ultimoCaracter >="a" && ultimoCaracter <= "z")){
            console.log("El último carácter escrito es una letra:", ultimoCaracter)
        }
        else{
            console.log("El último carácter escrito no es una letra.")
        }
    }
    else{
        console.log("La cadena está vacía.")
    }
}

ejercicio18()
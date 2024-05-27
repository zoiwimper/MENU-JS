// 19.) Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
// Análisis de requerimientos:
// Entrada: Definir cadena Como Caracter
//          Definir primercaracter Como Caracter
//          Escribir "Ingrese la cadena: "
//          Leer cadena
//          Si cadena <> "" entonces
//          primercaracter = Subcadena(cadena, 1 , 1)
//          Si (primercaracter == "A" O primercaracter == "E" O primercaracter == "I" O primercaracter == "O" O primercaracter == "U") O (primercaracter == "a" O primercaracter == "e" O primercaracter == "I" O primercaracter == "O" O primercaracter == "U") entonces
//            Escribir "El primer carácter es una vocal.", primercaracter
//          Sino
//            Escribir "El primer carácter es una vocal."
//          FinSi
//          Sino
//            Escribir "La cadena está vacía."
//          FinProceso
// Salida: Proceso

const prompt = require('prompt-sync')()
function ejercicio19(){
    let cadena = prompt("Ingrese la cadena: ")
    if(cadena.length){
        let primercaracter = cadena[0]
        if((primercaracter == "A" || primercaracter == "E" || primercaracter == "I" || primercaracter == "O" || primercaracter == "U") || (primercaracter == "a" || primercaracter == "e" || primercaracter == "i" || primercaracter == "o" || primercaracter == "u")){
            console.log("El primer carácter es una vocal.", primercaracter)
        }
        else{
            console.log("El primer carácter no es una vocal.")
        }
    }
    else{
        console.log("La cadena está vacía.")
    }
}

ejercicio19()
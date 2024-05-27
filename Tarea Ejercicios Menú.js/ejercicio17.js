// 17.) Dada una cadena presentar el primer carácter siempre y cuando sea un digito.
// Análisis de requisitos:
// Entrada: Definir cadena Como Caracter
//          Definir caracter Como Caracter
//          Escribir "Ingrese una cadena: "
//          Leer cadena
//          Si cadena > 0 entonces
//            primerc = (cadena, 1, 1)
//          Si cadena >= "0" Y cadena <= "9" entonces
//            Escribir "El carácter ingresado es un dígito:", primerc
//          Sino
//            Escribir "El primer carácter ingresado no es un dígito."
//          FinSi
//          Sino
//            Escribir "La cadena está vacía."
// Salida: primerc

const prompt = require('prompt-sync')()
function ejercicio17(){
    let cadena = prompt("Ingrese una cadena: ")
    let caracter = cadena[0]
    if (cadena.length > 0){
        if (caracter >= "0" && caracter <= "9"){
            console.log("El carácter ingresado es un dígito:", caracter)
        }
        else{
            console.log("El primer carácter ingresado no es un dígito.")
        }
    }
    else{
        console.log("La cadena está vacía.")
    }
}
ejercicio17()
// 11.) Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.
// Análisis de requerimientos:
// Entrada: Definir Dias Como Texto
// Proceso: Dias[1] = "Lunes"
//          Dias[2] = "Martes"
//          Dias[3] = "Miércoles"
//          Dias[4] = "Jueves"
//          Dias[5] = "Viernes"
//          Dias[6] = "Sábado"
//          Dias[7] = "Domingo"
//          Escribir "Ingrese un número de día (del 1 al 7: )"
//          Leer numdia
//          Si numdia >= 1 Y numdia <= 7 entonces
//            Escribir "El día ingresado es:", Dias[numdia]
//          Sino
//            Escribir "El número no pertenece a ningún día, por favor, ingrese un día del 1 al 7."
//          FinSi
// Salida: mostrar numdia

const prompt = require('prompt-sync')();
function ejercicio11(){
let numdia = parseInt(prompt("Ingrese un número de día (del 1 al 7): "))
let Dias = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
if (numdia >= 1 && numdia <= 7){
    console.log("El día ingresado es:", Dias[numdia])
}
else{
    console.log("El número no pertenece a ningún día, por favor, ingrese un día del 1 al 7.")
}
}
ejercicio11()
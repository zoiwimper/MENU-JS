// 12.) Dado un mes en número, presentar el nombre de ese mes. 
// Para la solución utilice arreglos.
// Análisis de requerimientos:
// Entrada: Definir Mes Como Texto [12]
//          Mes[1] = "Enero"
//          Mes[2] = "Febrero"
//          Mes[3] = "Marzo"
//          Mes[4] = "Abril"
//          Mes[5] = "Mayo"
//          Mes[6] = "Junio"
//          Mes[7] = "Julio"
//          Mes[8] = "Agosto"
//          Mes[9] = "Septiembre"
//          Mes[10] = "Octubre"
//          Mes[11] = "Noviembre"
//          Mes[12] = "Diciembre"
// Proceso: Escribir "Ingrese su mes utilizando números (del 1 al 12): "
//          Leer nummes
//          Si nummes >= 1 Y nummes <= 12 entonces
//            Escribir "Su número digitado da cómo mes:", Mes[nummes]
//          Sino
//            Escribir "El número digitado no corresponde a ningún mes, por favor, digite un número válido (del 1 al 12)."
//          FinSi
// Salida: mostrar Mes

const prompt = require('prompt-sync')();
function ejercicio12(){
    let nummes = parseInt(prompt("Ingrese su mes utilizando número (del 1 al 12): "))
    let Mes = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    if (nummes >= 1 && nummes <= 12){
        console.log("Su número digitado da cómo mes:", Mes[nummes])
    }
    else {
        console.log("El número digitado no corresponde a ningún mes, por favor, digite un número válido (del 1 al 12).")
    }
}
ejercicio12()
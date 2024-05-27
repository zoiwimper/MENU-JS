// 6.) Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. 
// Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal.
// El porcentaje del seguro social(iess) es del 10% del ingreso total. 
// Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.

//Análisis de requerimientos:
// Entrada: Declarar horas, sueldo, sobretiempo, ingresototal, descuento, sueldoneto Como Real
//          Declarar tarifa, horasnormales, porcentaje_iess Como Real
//          tarifa = 5
//          horas = 40
//          porcentaje_iess = 0.10
//          Escribir "Ingrese sus horas trabajadas durante la semana:"
//          Leer horas_de_trabajo
//          sueldo = 0
//          sobretiempo = 0
//          Si horas_de_trabajo > horas entonces
//             sueldo = horas * tarifa
//             sobretiempo = (horas_de_trabajo - horas) * (tarifa * 2)
//          Sino 
//             sueldo = horas_de_trabajo * tarifa
//          FinSi
//          ingresototal = sueldo + sobretiempo
//          descuento = ingresototal * porcentaje_iess
//          sueldoneto = ingresototal - descuento
//          Escribir "Su valor de sueldo principal es:$", sueldo
//          Escribir "Su sueldo por sobre tiempo da:$", sobretiempo
//          Escribir "Su ingreso total:$", ingresototal
//          Escribir "Junto a su descuento del seguro social (iess):$", descuento
//          Escribir "El sueldo total a recibir es:$", sueldoneto

const prompt = require('prompt-sync')();
function ejercicio6(){
let horas = 40
let tarifa = 5
let porcentaje_iess = 0.10
let horas_de_trabajo = parseFloat(prompt("Ingrese sus horas trabajadas durante la semana:"))

if (horas_de_trabajo > horas){
    sueldo = horas * tarifa
    sobretiempo = (horas_de_trabajo - horas) * (tarifa * 2)
}
else{
    sueldo = horas_de_trabajo * tarifa
}

let ingresototal = sueldo + sobretiempo
let descuento = ingresototal * porcentaje_iess
let sueldoneto = ingresototal - descuento
console.log("Su valor de sueldo principal es:$", sueldo)
console.log("Su sueldo por sobre tiempo da:$", sobretiempo)
console.log("Su ingreso total:$", ingresototal)
console.log("Junto a su descuento del seguro social(iess):$", descuento)
console.log("El sueldo total a recibir es:$", sueldoneto)
}

ejercicio6()
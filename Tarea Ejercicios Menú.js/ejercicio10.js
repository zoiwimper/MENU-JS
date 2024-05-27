// 10.) El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200. 
// Se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. 
// Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.

// Análisis de requerimientos:
// Entrada: precio, descuento, preciodescuento, iva, ivaaplicado, precio_final Como Real
//           iva = 0.15
// Proceso: Escribir "Ingrese el precio del traje:"
//          Leer precio
//          Si precio > 200
//            descuento = precio * 0.10
//          Sino
//            descuento = precio - 10
//          FinSi
//          preciodescuento = precio - descuento
//          ivaaplicado = preciodescuento * iva
//          precio_final = preciodescuento + ivaaplicado
//          Escribir "El precio del traje es:$", precio
//          Escribir "Adjuntando el descuento de 10% sólo si el traje es superior a $200 da:", preciodescuento
//          Escribir "Aplicando el iva del 15% su respectivo precio final a pagar por el traje es:", precio_final
// Salida: mostrar el precio final

const prompt = require('prompt-sync')();
function ejercicio10(){
let precio = parseFloat(prompt("Ingrese el precio del traje: "))
let descuento = 0
let preciodescuento = 0
let iva = 0.15
if (precio > 200){
    descuento = precio * 0.10
    preciodescuento = precio - descuento
ivaaplicado = preciodescuento * iva
precio_final = preciodescuento + ivaaplicado
}
else{
    preciodescuento = precio - 10
    ivaaplicado = preciodescuento * iva
    precio_final = preciodescuento + ivaaplicado
    console.log("El precio del traje sin el descuento es: ", preciodescuento)
}
console.log("El precio del traje es:$", precio)
console.log("Adjuntando el descuento del 10% sólo si el traje es superior a $200 da:$", preciodescuento)
console.log("Aplicando el iva del 15% su respectivo precio final a pagar por el traje es:$", precio_final)
}
ejercicio10()
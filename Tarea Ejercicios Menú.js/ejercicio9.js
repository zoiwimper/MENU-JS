//9.) Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, 
// El costo por unidad es de $0,25. 
// caso contrario el precio será  10% menos.

// Análisis de requerimientos:
// Entrada: Definir precio_final, descuento,  Como Real
//          costo_unidad = 0.25
//          descuento = 0.10
//          Escribir "Ingrese la cantidad de colas:"
//          Leer cantidad
//          Si cantidad >= 12 entonces
//            calculo = cantidad * costo_unidad
//            descuentoprecio = calculo - (calculo * 0.10)
//            precio_final = calculo + descuento
//            Escribir "Su precio final por la cantidad de", cantidad, "da como precio final es:$", precio_final
// Salida: mostrar mensaje
const prompt = require('prompt-sync')();
function ejercicio9(){
let cantidad = parseInt(prompt("Ingrese la cantidad de colas:"))
let costo_unidad = 0.25
let calculo = 0
let descuento = 0.10
let descuentoprecio = 0
let precio_final = 0
if (cantidad >= 12){
    calculo = cantidad * costo_unidad
    descuentoprecio = calculo - (calculo * descuento)
    precio_final = calculo + descuentoprecio
    console.log("Su precio final por la cantidad de", cantidad, "da como precio final es:$", precio_final)
}
else {
    calculo = cantidad * costo_unidad
    console.log("Su precio final por la cantidad de", cantidad, "es:$", calculo)
}
}
ejercicio9()
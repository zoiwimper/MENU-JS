// 24.) Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos.
// Análisis de requerimientos:
// Entrada: Definir arreglo Como Entero[10]
//          Definir Longitud Como Entero
//          arreglo[0] = 10
//          arreglo[1] = 22
//          arreglo[2] = 35
//          arreglo[3] = 41
//          arreglo[4] = 59
//          arreglo[5] = 64
//          arreglo[6] = 73
//          arreglo[7] = 82
//          arreglo[8] = 98
//          arreglo[9] = 110
// Proceso: Longitud = longitud(arreglo)
//          Escribir "El arreglo tiene", Longitud, "elementos."
// Salida: Mostrar elementos

function ejercicio24(){
    let arreglo = [10, 22, 35, 41, 59, 64, 73, 82, 98, 110]
    let longitud = arreglo.length
    console.log("El arreglo tiene", longitud, "elementos.")
}

ejercicio24()
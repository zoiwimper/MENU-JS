// 15.) Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
// Análisis de requerimientos:
// Entrada: Definir valores Como Entero
//          Definir aleatorio Como Entero
//          aleatorio = Aleatorio(1, 100)
//          valores[0] = aleatorio
//          aleatorio = Aleatorio(-100, -1)
//          valores[1] = aleatorio
//          aleatorio = Aleatorio(1, 100)
//          valores[2] = aleatorio
//          aleatorio = Aleatorio(-100, -1)
//          valores[3] = aleatorio
//          aleatorio = Aleatorio(1, 100)
//          valores[4] = aleatorio
//          Escribir "Valores almacenados en el arreglo:"
//          Escribir valores[0]
//          Escribir valores[1]
//          Escribir valores[2]
//          Escribir valores[3]
//          Escribir valores[4]
//          Si valores[1] % 2 == 0 Y valores[1] > 0 entonces
 //            Escribir "El primer valor es par positivo:", valores[1]
 //          Sino
 //            Escribir "El primer valor es impar negativo:", valores[1]
 //          FinSi
 //          Si valores[4] % 2 != 0 Y valores[4] < 0 entonces
 //            Escribir "El ultimo valor es impar negativo:", valores[4]
 //          Sino
 //            Escribir "No se encontraron valores que cumplan la condición específica."
 //          FinSi
// Salida: Mostrar valores[0], valores[1], valores[2], valores[3], valores[4], valores[1], valores[4]
const prompt = require('prompt-sync')()
function ejercicio15(){
    let valores = [0, 0, 0, 0, 0]
    let aleatorio = 0
    aleatorio = Math.floor(Math.random()* 100) + 1
    valores[0] = aleatorio
    aleatorio = Math.floor(Math.random()* 100) - 100
    valores[1] = aleatorio
    aleatorio = Math.floor(Math.random()* 100) + 1
    valores[2] = aleatorio
    aleatorio = Math.floor(Math.random()* 100) - 100
    valores[3] = aleatorio
    aleatorio = Math.floor(Math.random()* 100) + 1
    valores[4] = aleatorio
    if (valores[0] % 2 == 0 && valores[0] > 0){
        console.log("El primer valor es par positivo:", valores[0])
    }
    else{
        console.log("El primer valor es impar negativo:", valores[0])
    }
    if (valores[4] % 2 != 0 && valores[4] < 0){
        console.log("El último valor es impar negativo:", valores[4])
    }
    else{
        console.log("No se encontraron valores que cumplan la condición específica.")
    }
}
ejercicio15()
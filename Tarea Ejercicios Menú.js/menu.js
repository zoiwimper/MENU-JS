const read = require('prompt-sync')()
const write = console.log
function menu(){ 
    write("1.) Algoritmo que transforme de grados Celsius a Fahrenheit")
    write('2.) Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número')
    write('3.) Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.')
    write('4.) Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos (nota: una libra equivale a 0.453593 kilogramos)')
    write('5.) Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))')
    write('6.) Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal.El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.')
    write('7.) Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.')
    write('8.) Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :" y si no presentar solo el carácter.')
    write('9.) Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, El costo por unidad es de $0,25.caso contrario el precio será  10% menos.')
    write('10.) El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200.Se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.')
    write('11.) Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.')
    write('12.) Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.')
    write('13.) Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.')
    write('14.) Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.')
    write('15.) Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.')
    write('16.) Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.')
    write('17.) Dada una cadena presentar el primer carácter siempre y cuando sea un digito.')
    write('18.) Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra.')
    write('19.) Dada una cadena presentar el primer carácter siempre y cuando sea una vocal')
    write('20.) Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”')
    write('21.) Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.')
    write('22.) Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.')
    write('23.) Dado una cadena indicar cuantos elementos tiene, sin usar ciclos.')
    write('24.) Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos."[10, 22, 35, 41, 59, 64, 73, 82, 98, 110]"')

    let lit = parseInt(read("Ingrese una de las opciones que se marcan arriba:"))

if (lit >= 1 && lit <= 24){

if (lit == 1){
    require('./ejercicio1.js')
}
if (lit == 2){
    require('./ejercicio2.js')
}
if (lit == 3){
    require('./ejercicio3.js')
}
if (lit == 4){
    require('./ejercicio4.js')
}
if (lit == 5){
    require('./ejercicio5.js')
}
if (lit == 6){
    require('./ejercicio6.js')
}
if (lit == 7){
    require('./ejercicio7.js')
}
if (lit == 8){
    require('./ejercicio8.js')
}
if (lit == 9){
    require('./ejercicio9.js')
}
if (lit == 10){
    require('./ejercicio10.js')
}
if (lit == 11){
    require('./ejercicio11.js')
}
if (lit == 12){
    require('./ejercicio12.js')
}
if (lit == 13){
    require('./ejercicio13.js')
}
if (lit == 14){
    require('./ejercicio14.js')
}
if (lit == 15){
    require('./ejercicio15.js')
}
if (lit == 16){
    require('./ejercicio16.js')
}
if (lit == 17){
    require('./ejercicio17.js')
}
if (lit == 18){
    require('./ejercicio18.js')
}
if (lit == 19){
    require('./ejercicio19.js')
}
if (lit == 20){
    require('./ejercicio20.js')
}
if (lit == 21){
    require('./ejercicio21.js')
}
if (lit == 22){
    require('./ejercicio22.js')
}
if (lit == 23){
    require('./ejercicio23.js')
}
if (lit == 24){
    require('./ejercicio24.js')
}
}
}
menu()
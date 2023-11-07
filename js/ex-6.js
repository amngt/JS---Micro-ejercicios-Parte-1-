//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//los pasos seguidos son exactamente los mismos que en el ejercicio 5
var miCasilla1 = document.querySelector ("#casilla1")
var miCasilla2 = document.querySelector ("#casilla2")
var miCasilla3 = document.querySelector ("#casilla3")
var miCalculador = document.querySelector ("#calculador")

function calculador(){
    miCalculador.innerHTML = Math.max((parseInt(miCasilla1.value)), (parseInt(miCasilla2.value)), (parseInt(miCasilla3.value)))
}





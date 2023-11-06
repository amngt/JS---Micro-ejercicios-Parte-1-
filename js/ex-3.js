/*ejercicio 3*/
/*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>.*/


var divNombre = document.querySelector ("#nombreUsuario")

var miCasilla = document.querySelector ("#casilla")


function saludar(){
    divNombre.innerHTML = "hola " + miCasilla.value

}




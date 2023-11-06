/*ejercicio 3*/
/*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>.*/

//busco en el html el div saludo
var divSaludo = document.querySelector ("#saludo")
//me voy al documento a buscar el elemento input
var casilla = document.querySelector ("#casilla")
//creo la función que se va a llamar cuando pulse el botón
//casill.value va a contener cualquier nombre que coloque
//el divSaludo me modifica el html de ese elemento
function miFuncionSaludar() {
    var nombre = casilla.value
    divSaludo.innerHTML = "hola " + nombre

}

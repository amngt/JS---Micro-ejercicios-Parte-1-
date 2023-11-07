//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var primeraCasilla = document.querySelector ("#first")
var segundaCasilla = document.querySelector ("#second")
var divelMayor = document.querySelector ("#elMayor")

function mayorQue(){ 
    var primerNumero = parseInt(primeraCasilla.value)
    var segundoNumero = parseInt(segundaCasilla.value)
    divelMayor.innerHTML = Math.max(primerNumero, segundoNumero) 

}

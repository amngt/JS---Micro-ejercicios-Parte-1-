/*ejercicio 2*/
/*Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.*/

//primero, defino la variable con la suma que me piden
var resultado = 3 + 5
//segundo, busco en el html el div correspondiente
var divSuma = document.querySelector ("#suma")
//tercero, modifico el html introduciendo el resultado
divSuma.innerHTML = "La suma de 3 + 5 es " + resultado
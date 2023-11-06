/*ejercicio 1*/
/*Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.*/
//primero, creo una variable llamanado al documento
var miDiv = document.querySelector ("#titulo")
//segundo, creo una variable con el contenido del texto
 var hello = "Hello JavaScript"
 //tercero, la formula es 
 miDiv.innerHTML = "<h1>" + hello + "</h1>"
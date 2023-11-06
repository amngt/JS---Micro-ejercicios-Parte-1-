/*ejercicio 4*/
/*Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”*/
//llamo al documento (document.)y le pido el input que tiene "primero" y "segundo"
var miPrimero = document.querySelector ("#primero")
var miSegundo = document.querySelector ("#segundo")

//tengo que llamar la función onclick "sumar" 
//parseInt(cadena) convierte una cadena en número
function sumar() { 
    divResultado.innerHTML = parseInt(miPrimero.value) + parseInt(miSegundo.value) 

}
//muestra el resultado de la suma
var divResultado = document.querySelector ("#resultado")

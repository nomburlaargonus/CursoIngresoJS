/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoT;
	var anchoT;
	var multiplicarElLargo;
	var multiplicarElancho;
    
	largoT = document.getElementById('Largo del terreno').value;
    largoT = parseInt (largoT);

	anchoT = document.getElementById('Ancho del terreno').value;
    anchoT = parseInt (anchoT);

    multiplicarElLargo = largoT * 3;

    multiplicarElancho = ancho * 3;

    alert("Se necesita " + multiplicarElLargo " para el largo y se necesita" + multiplicarElancho " para el ancho")

}
function Circulo () 
{
    var radioT;


	radioT = document.getElementById('Radio del terreno').value;
    radioT = parseInt (radioT);
	
}
function Materiales () 
{
	var largoT;
	var anchoT;

    largoT = document.getElementById('Largo del terreno').value;
    largoT = parseInt (largoT);

	anchoT = document.getElementById('Ancho del terreno').value;
    anchoT = parseInt (anchoT);


	
}
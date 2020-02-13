/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;

	primerPrecio = document.getElementById('PrecioUno').value;
    primerPrecio = parseInt (primerPrecio);

	segundoPrecio = document.getElementById('PrecioDos').value;
    segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = document.getElementById('PrecioTres').value;
    tercerPrecio = parseInt (tercerPrecio);

	sumar = primerPrecio + segundoPrecio + tercerPrecio;

	alert(sumar);


}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;
	var promediar;

	primerPrecio = document.getElementById('PrecioUno').value;
    primerPrecio = parseInt (primerPrecio);

	segundoPrecio = document.getElementById('PrecioDos').value;
    segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = document.getElementById('PrecioTres').value;
    tercerPrecio = parseInt (tercerPrecio);

    sumar = primerPrecio + segundoPrecio + tercerPrecio;

	promediar = sumar / 3;

	alert(promediar);
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;
	var precioFinal;
	var IVA;
	var calcular;

	primerPrecio = document.getElementById('PrecioUno').value;
    primerPrecio = parseInt (primerPrecio);

	segundoPrecio = document.getElementById('PrecioDos').value;
    segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = document.getElementById('PrecioTres').value;
    tercerPrecio = parseInt (tercerPrecio);

    IVA= 21;

    sumar = primerPrecio + segundoPrecio + tercerPrecio;

    calcular = sumar * IVA/100;

    precioFinal = sumar + calcular;

    alert(precioFinal);
	
}
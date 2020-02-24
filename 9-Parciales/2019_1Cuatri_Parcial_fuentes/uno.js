
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Coloque el ancho del rectangulo");
	ancho = parseInt(ancho);

	largo = prompt("Coloque el largo del rectangulo");
	largo = parseInt(largo);

	perimetro = ancho + largo * 2;
	alert(perimetro+"este es el perimetro del rectangulo");

}

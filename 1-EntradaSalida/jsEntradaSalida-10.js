/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var monto;
	var aumento;
 	var porciento;

 	porciento = 25;

	monto = document.getElementById('importe').value;
	monto = parseInt(monto);
	console.log(monto);

	aumento = monto * porciento/100;
    
    resultado = monto + aumento;

  document.getElementById('resultado').value = resultado
    
}

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var monto;
	var resultado;
	var prociento;
	var aumento;

	prociento = 10;

	monto = document.getElementById('sueldo').value;
	monto = parseInt(monto);
	console.log(monto);
	
	aumento = monto * prociento/100;
    resultado = monto + aumento 
     
	document.getElementById('resultado').value=resultado;




}

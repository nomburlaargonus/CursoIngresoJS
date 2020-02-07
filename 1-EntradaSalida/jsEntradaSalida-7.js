/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero = document.getElementById('numeroUno').value;
	   primerNumero = parseInt (primerNumero);
       console.log(primerNumero);


	segundoNumero = document.getElementById('numeroDos').value;
	   segundoNumero = parseInt (segundoNumero);
	   console.log(segundoNumero);

	   resultadoDeLaSuma = segundoNumero + primerNumero;
	   alert("La Suma es " + resultadoDeLaSuma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaResta;

	primerNumero = document.getElementById('numeroUno').value;
	   primerNumero = parseInt (primerNumero);
       console.log(primerNumero);


	segundoNumero = document.getElementById('numeroDos').value;
	   segundoNumero = parseInt (segundoNumero);
	   console.log(segundoNumero);

	   resultadoDeLaResta = primerNumero - segundoNumero;
	   alert("La Resta es " + resultadoDeLaResta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaMultiplicacion;

	primerNumero = document.getElementById('numeroUno').value;
	   primerNumero = parseInt (primerNumero);
       console.log(primerNumero);


	segundoNumero = document.getElementById('numeroDos').value;
	   segundoNumero = parseInt (segundoNumero);
	   console.log(segundoNumero);

	   resultadoDeLaMultiplicacion = primerNumero * segundoNumero;
	   alert("La Multiplicacion es  " + resultadoDeLaMultiplicacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resutadoDelaDivicion;

	primerNumero = document.getElementById('numeroUno').value;
	   primerNumero = parseInt (primerNumero);
       console.log(primerNumero);


	segundoNumero = document.getElementById('numeroDos').value;
	   segundoNumero = parseInt (segundoNumero);
	   console.log(segundoNumero);
	
	resutadoDelaDivicion = primerNumero / segundoNumero;
	alert("La Divicion es " + resutadoDelaDivicion);
}


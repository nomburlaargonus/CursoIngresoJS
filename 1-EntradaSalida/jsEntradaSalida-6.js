/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById('numeroUno').value;
	   primerNumero = parseInt (primerNumero);
       console.log(primerNumero);


	segundoNumero = document.getElementById('numeroDos').value;
	   segundoNumero = parseInt (segundoNumero);
	   console.log(segundoNumero);

       // el "parseInt" se encarga de tranformar valores "literales", osea les saca las ""

    suma = segundoNumero + primerNumero;
    alert(suma);
}


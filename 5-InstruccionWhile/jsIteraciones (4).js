function mostrar()
{
   
	var numero;
	numero = prompt("colque un numero del 0 al 10.");
    numero = parseInt(numero);

	while (numero<0 || numero > 10)
	{
          numero = prompt ("Este numero no corresponde");
          numero = parseInt(numero);
	}

document.getElementById('Numero').value=sexo;

//PROBLEMAS CON EL PROMPT

}//FIN DE LA FUNCIÓN
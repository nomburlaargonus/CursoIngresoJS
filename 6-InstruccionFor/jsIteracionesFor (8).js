function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;
    var bandera;

    bandera = 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	//validar
	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
		if (numeroIngresado % numeroAnterior ==0)
		{
			bandera =1;
			break;
		}

	}

    if(bandera !=1)
    {
    	alert ("El "+numeroIngresado+" es un numero primo");
    }
    else 
    {
    	alert ("El " + numeroIngresado + " no es primo");
    }


}//FIN DE LA FUNCIÓN
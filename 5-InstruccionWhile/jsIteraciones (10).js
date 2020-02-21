function mostrar()
{

	var contador=0;
	var numeroNegativo;
	var numeroPositivo;
	var Suma;
	var respuesta;
	var numeroIngresado;

	//declarar contadores y variables 
	
	respuesta="si";

	while(respuesta == "si")
	{
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese un numero porfavor");
        numeroIngresado = parseInt (numeroIngresado);

        while(isNaN(numeroIngresado)) //esto es para declara que es un error si coloca algo mas ademas de un numero
        {
        	numeroIngresado = prompt ("Solo ingresas numeros");
        	numeroIngresado = parseInt(numeroIngresado);
        }

		if (numeroIngresado > 0)
		{
        numeroPositivo = numeroPositivo+numeroIngresado;
        }
        else
        {
        	if(numeroIngresado < 0)
        	{
            numeroNegativo = numeroPositivo-numeroIngresado;
            }     
        }    
       respuesta = prompt ("Ingrese si continuar");

    }

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	
	var respuesta="si";

    

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
        positivo = positivo+numeroIngresado;
        }
        else
        {
        	if(numeroIngresado < 0)
        	{
            negativo = negativo*numeroIngresado;
            }     
        }    
       respuesta = prompt ("Ingrese si continuar");
       //respuesta = parseInt (respuesta);
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
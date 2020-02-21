function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numeroIngresado;

	//numeroDeVueltas = 5;

	//el acumulador es la variable en la que la propia bariable le voy agregando numeros
    
    while(respuesta == "si")
    {
    	contador = contador + 1;
    	console.log(contador);
        numeroIngresado = prompt ("Ingrese un numero porfavor");
        numeroIngresado = parseInt(numeroIngresado);

        while(isNaN(numeroIngresado)) //esto es para declara que es un error si coloca algo mas ademas de un numero
        {
        	numeroIngresado = prompt ("Error solo ingresas numeros");
        	numeroIngresado = parseInt(numeroIngresado);
        }

        //console.log(numeroIngresado);
        acumulador = acumulador + numeroIngresado;
        respuesta = prompt ("ingrese si para continuar");


    }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
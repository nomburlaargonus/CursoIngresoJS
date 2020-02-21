function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var numeroDeVueltas;

	numeroDeVueltas = 5;

	//el acumulador es la variable en la que la propia bariable le voy agregando numeros
    
    while(contador < numeroDeVueltas)
    {
    	contador = contador + 1;
    	//console.log(contador);
        numeroIngresado = prompt ("otro numero porfavor");
        numeroIngresado = parseInt(numeroIngresado);
        //console.log(numeroIngresado);
        while(isNaN(numeroIngresado)) //esto es para declara que es un error si coloca algo mas ademas de un numero
        {
        	numeroIngresado = prompt ("Solo ingresas numeros");
        	numeroIngresado = parseInt(numeroIngresado);
        }
        acumulador = acumulador + numeroIngresado;
       
    }



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
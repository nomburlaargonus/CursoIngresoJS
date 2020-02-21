function mostrar()
{

	var contador=0;
	var numerosPedidos;
	var respuesta;
	var minimo;
	var maximo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta =='si')
	{
		contador = contador + 1;

		numerosPedidos = prompt("Ingrese cualquier numero");
		numerosPedidos = parseInt(numerosPedidos);
		if(contador==1)
		{
			minimo = numerosPedidos;
			maximo = numerosPedidos;
		}else
		{
			if(numerosPedidos<minimo)
			{
				minimo = numerosPedidos;
			}
			if (numerosPedidos>maximo) 
			{
				maximo = numerosPedidos;
			}
		}
	
	    respuesta = prompt("Si desea terminar diga si")
	}
	 
	 document.getElementById('maximo').value=maximo;
	 document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN
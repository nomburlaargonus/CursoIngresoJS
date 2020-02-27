function mostrar()
{
	var  contador;
    var respuesta;
    
    respuesta ="s";
    contador = 0;
    
    for(;respuesta=="s";respuesta=prompt("ingrese"))//solo se ejecuta una vez
    {
    	if (contador == 10)
    	{
    		break;
    	}

    	contador ++;
    	console.log(contador);

    } 
}
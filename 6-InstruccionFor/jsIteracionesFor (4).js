function mostrar()
{
	var contador;
    var respuesta;
    var cantidadDeRepeticiones;
    var detener;

    cantidadDeRepeticiones = prompt ("Cuantas veces quieres que se repita el mensaje?");
    cantidadDeRepeticiones = parseInt(cantidadDeRepeticiones);
    
    //respuesta ="s";
    contador = 0;
    
    for(;;)//solo se ejecuta una vez
    {
    	detener = prompt("Escriba -Break- para detener la secuensia")
    	if (detener == "break")
    	{
    		break;
    	}
    	alert("Hola UTN FRA")

    	contador ++;
    	console.log(contador);

    } 





}//FIN DE LA FUNCIÓN
function mostrar()
{
	var bolsas;
	var kilosBolsas;
	var cantidadBolsas;
	var importeBolsas;
	var marca;

	var respuesta;
	respuesta = "si";

	while (respuesta == "si")
	{
		marca = prompt("Por favor ingrese la marca de comida para animales");
		while(!isNaN(marca))
		{
			marca = prompt("Por favor ingrese la marca de comida para animales");
		}



		kilosBolsas=prompt("Por Favor, Ingrese El Peso Del Producto");
		kilosBolsas=parseInt(kilosBolsas); 
		while(isNaN(kilosBolsas))
		{
			kilosBolsas = prompt("Por Favor, Ingrese El Peso Del Productos");
		    kilosBolsas=parseInt(kilosBolsas);
		}


		cantidadBolsas = prompt ("porfavor ingrese la cantidad de bolsas que quiere");
		cantidadBolsas = parseInt(cantidadBolsas);
		while(isNaN(cantidadBolsas))
		{
			cantidadBolsas = prompt("porfavor ingrese la cantidad de bolsas que quiere");
			cantidadBolsas = parseInt(cantidadBolsas);
		}


		importeBolsas = prompt ("porfavor coloque el precio de la una bolsa de comida");
		importeBolsas = prompt ("importeBolsas");
		while(isNaN(importeBolsas))
		{
			importeBolsas = prompt("porfavor coloque el precio de la una bolsa de comida");
			importeBolsas = prompt ("importeBolsas");
		}




      respuesta = prompt("desia hacer otro pedido? si/no");
	}
 
	

}//FIN DE LA FUNCIÓN
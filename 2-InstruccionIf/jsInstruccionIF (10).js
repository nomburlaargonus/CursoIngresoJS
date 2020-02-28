function mostrar()
{
	var nombreHusped;
	var CantidadDePersonas;
	var CantidadDeDias;
	var pagoEfectivo;
	var pagoTarjeta;
	var pagoQR
	var formaDePago;
	var contadorPersonas;
	var contadorDias;
	var cantidadDevecesDia
	var activador;
	var promedioReservas;
	var maximoDias;
	var maximoPersonas;

	activador = "si";

	cantidadDevecesDia = 0;
	contadorDias = 0;
	contadorPersonas = 0;
	pagoTarjeta = 0;
	pagoQR = 0;
	pagoEfectivo = 0;


 while(activador == "si")



 {
	nombreHusped = prompt("Tenga la gentilesa de darme un nombre");
	while (!isNaN(nombreHusped))
	{
		nombreHusped = prompt ("porfavor coloque un nombre y no un numero");
	}




	//---------------------------------------------------

	

	    CantidadDePersonas = prompt ("Ahora le pido la cantidad de personas que se van a alojar");
	    CantidadDePersonas = parseInt(CantidadDePersonas);
	    while (isNaN(CantidadDePersonas))
	    {
		
		   CantidadDePersonas = prompt("Porfavor le pido un numero no los nombres de cada individuo");
		   CantidadDePersonas = parseInt(CantidadDePersonas);
		   cantidadDevecesDia = cantidadDevecesDia + 1;
		   console.log(cantidadDevecesDia);

		   contadorPersonas = contadorPersonas + CantidadDePersonas;
	    }
    

	//-----------------------------------------------------

	

        cantidadDevecesDia = cantidadDevecesDia + 1;
	    console.log(cantidadDevecesDia);

	    CantidadDeDias = prompt ("Ahora le pido la cantidad de dias que se va a alojar")
	    while (isNaN(CantidadDeDias))
	    {
		    CantidadDeDias = prompt("Un numero señor un N.U.M.E.R.O");
		    CantidadDeDias = parseInt(CantidadDeDias);

		    contadorDias = contadorDias + CantidadDeDias;

	    }
    

    //-----------------------------------------------------------

	formaDePago = prompt ("Y por ultimo una forma de pago, tenemos : pagoEfectivo, pagoTarjeta o pagoQR" )
    while (!isNaN(formaDePago))
	{
		formaDePago = prompt ("porfavor limitese a alguna de las 3 opciones que le di");

	}



	if(formaDePago == "pagoTarjeta")
	{
		pagoTarjeta = pagoTarjeta + 1;	
	}
	else
	{
		if(formaDePago == "pagoEfectivo")
		{
			pagoEfectivo = pagoEfectivo + 1;
		}
		else
		{
			pagoQR = pagoQR + 1;
		}		
	}
  
    

	
	

	if(activador="si")
		{
			maximoPersonas = contadorPersonas;
			maximoDias = contadorDias;
		}
		else
		{
			
			if (contadorDias>maximoDias) 
			{
				maximoDias = contadorDias;
			}
			if(contadorPersonas > maximoPersonas)
			{
				maximoPersonas = contadorPersonas;
			}
		}

		promedioReservas = contadorDias / cantidadDevecesDia;

		activador = prompt ("si desea jacer otra recerva diga - si - de lo contrario solo del a aceptar")
 }
	






	

}//FIN DE LA FUNCIÓN
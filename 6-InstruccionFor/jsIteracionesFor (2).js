function mostrar()
{
	//DO WHILE PARA VALIDAR

    var sexo;
	var edad;
	var nombre;
	var temperatura;
    var contadorMujeres;
    var totalEdadesMujeres;
    var edadMinima;
    var edadMaxima;
    var contador;
    var activador;

    activador = "si";

 while(activador=="si")
 {

	nombre = prompt("Escriba su nombre");

	while(!isNaN(nombre)) 
        {
        	nombre = prompt ("Ingrese su nombre");
        	nombre = parseInt(nombre);
        }


	sexo = prompt("Escriba su sexo, f o m");


	while (!sexo == "f" || sexo == "m")
	    {
		sexo = prompt ("coloque un sexo valido, f o m");
	    }





    edad = prompt("Escriba su edad");
    edad = parseInt(edad);

    while(isNaN(edad)) 
        {
            edad = prompt ("Solo ingresas numeros");
            edad = parseInt(edad);
        }




	temperatura = prompt("Escriba su temperatura corporal");
	temperatura = parseInt(temperatura);

   while(isNaN(temperatura)) 
    {
        	temperatura = prompt ("Solo ingresas numeros");
        	temperatura = parseInt(temperatura);
        
    }

        if (temperatura > 38)
        {

    	    if(edad < 10 || edad > 60 )
              {
     	            edad = prompt(nombre +" ESTA EN RIESGO");
              }
     	}
    


/*
    while(sexo == "f")
    {
        contadorMujeres = contadorMujeres + 1;
        totalEdadesMujeres = edad + totalEdadesMujeres;
        console.log(contadorMujeres);
        console.log(totalEdadesMujeres);
        
    }






       
    while(edad)
    {
        minimo = 0
        maximo = 0 

        if(contador==1)
        {
            minimo = edadMinima;
            maximo = edadMaxima;
        }
        else
        {
            if(edad<minimo)
            {
                minimo = edadMinima;
            }
            if (edadMaxima>maximo) 
            {
                maximo = edadMaxima;
            }
        }       
    }
    */
    activador = prompt("si desea testear otro pasiente diga -si-");
 }

}




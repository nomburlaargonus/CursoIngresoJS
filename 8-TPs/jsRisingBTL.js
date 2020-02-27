/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var lejado;
	var nacionalidad;


    
	edad = prompt("1. Porfavor coloque su edad para validar");
	edad = parseInt(edad);

	while(isNaN(edad)) //esto es para declara que es un error si coloca algo mas ademas de un numero
        {
        	edad = prompt ("Solo ingresas numeros");
        	edad = parseInt(edad);
        }

	while (edad < 18)
	{
	    alert ("USTED ES MENOR DE EDAD");
	    edad = prompt("1. Porfavor coloque su edad para validar");
	    edad = parseInt(edad);
    
        while(edad > 90) 
        	{
        		alert("USTED ES DAMACIADO MAYOR");
        		edad = prompt("1. Porfavor coloque su edad para validar");
	            edad = parseInt(edad);
        	}
    }    

    document.getElementById('Edad').value=edad;  

    sexo = prompt("2. Porfavor coloque su sexo para validar");
    console.log(sexo);

    while(sexo=="f" && sexo=="m")
    {
	sexo = prompt ("Sexo no valido");
	sexo = prompt("Porfavor coloque su sexo para validar");
    }

    document.getElementById('Sexo').value=sexo;
}

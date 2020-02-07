/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombrePersona;
	var edadPersona;

	nombrePersona = document.getElementById('elNombre').value;
	nombrePersona = parsenInt (nombrePersona);

	edadPersona = document.getElementById('laEdad').value;
	edadPersona = parsenInt (edadPersona);


	alert("sunombre es "+ nombrePersona " y su edad es "+ edadPersona);
	//NO FUNCIONA
}


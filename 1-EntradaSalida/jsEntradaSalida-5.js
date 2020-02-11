/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombrePersona;
	var edadPersona;

	nombrePersona = document.getElementById('elNombre').value;
	//nombrePersona = parsenInt (nombrePersona);
	console.log(nombrePersona);

	edadPersona = document.getElementById('laEdad').value;
	edadPersona = parsenInt (edadPersona);

    
	alert("su nombre es " + nombrePersona " y su edad es " + edadPersona);
	//NO FUNCIONA
}


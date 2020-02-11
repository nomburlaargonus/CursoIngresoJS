/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() { 
	//ID es lo que define un objeto, carios objetos iguales tiene dieferentes ID

	var nombre; 
	 
    // el html es el "documento"
    // el "." es para poder buscar todos los eementos dentro de donde fue escrito   
    nombre = document.getElementById('elNombre').value;
    //con "value" me devolvera el valor dentro del cuadro
	alert(nombre);
	
	document.getElementById('elNombre').value = "Que feo nombre";


}



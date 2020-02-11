/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var pregunta;

	pregunta = "porfavor ingrese su edad";

	pregunta = prompt(pregunta);

	

  
   document.getElementById('elNombre').value = pregunta


   
}


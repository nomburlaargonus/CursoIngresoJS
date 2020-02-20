function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":

	      laHora = "Es de Mañana"

	    break;

	default:

	     laHora = "No es de mañana" 

	    break;

}

alert (laHora);
	
	



}//FIN DE LA FUNCIÓN
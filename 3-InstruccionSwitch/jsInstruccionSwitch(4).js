function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":

	   mesDelAño = 	"Este mes tien 29 dias"

	   break;

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Agosto":
	case "Julio":
	case "Octubre":
	case "Diciembre":

	   mesDelAño = "Este mes tiene 31 dias"

	   break; 

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
 
       mesDelAño = "Este mes tiene 30 dias "

       break; 

   default:
       break;     
}

alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
	       mesDelAño = "Este mes no tiene mas de 29 dias";
	    break;
	default:
	       mesDelAño = "Este mes tiene 30 o mas dias";
	    break;       
}

alert (mesDelAño);

	
	


}//FIN DE LA FUNCIÓN
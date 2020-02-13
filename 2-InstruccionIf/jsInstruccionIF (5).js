function mostrar()
{
//tomo la edad
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);


if (edad < 13 || edad > 17) 
 
{
	alert("no adolecente ");
}

/*if(edad < 13)  

{
	alert("usted un niño ");
}
if(edad > 17)  

{
	alert("usted es un adulto");
}*/

}//FIN DE LA FUNCIÓN
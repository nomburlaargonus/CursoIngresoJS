function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if(edad < 13) 

{
	alert("usted es un niño");
}
else 
{
	 if(edad > 17 )
     {
	     alert("usted es un adulto");

     } 
     else
     {
     	 alert ("usted es un adolecente");
     }

}   


}//FIN DE LA FUNCIÓN
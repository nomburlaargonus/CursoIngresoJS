function mostrar()
{
var sexo;
sexo = prompt("ingrese f ó m .");

while(sexo=="f" && sexo=="m")
{
	numero = prompt ("Sexo no valido");
    numero = parseInt(numero);
	
    
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
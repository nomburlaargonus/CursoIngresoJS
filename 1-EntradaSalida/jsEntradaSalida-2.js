/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {

	var nombre;
	var usuario;
    nombre= prompt("Porfavor ingrese su nombre", usuario); 

    console.log("ingrese su nombre  " + nombre); //esto es para que solo salga en la consola
    alert(nombre);

     
}
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;



switch(mesDelAño)
{
    case "Enero":
    case "Diciembre":
    case "Febrero":
    
          mesDelAño = "Ya pasamos del frio, ahora calor!!";

        break;

    case "Marzo":
    case "Abril":
    case "Mayo":

          mesDelAño = "Falta para el Invierno";

        break;

    case "Junio":
    case "Julio":
    case "Agosto":

          mesDelAño = "Abrigate que hace frio";

        break;

    case "Septiembre":
    case "Noviembre":
    case "Octubre":

          mesDelAño = "Ya estamos entrando en calorsito";

        break;

    default:
        break;    

}
alert (mesDelAño);




}//FIN DE LA FUNCIÓN
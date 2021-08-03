document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;													
var y;
var estado = 0;		
var colorsito = "blue";
var move = 1;

// dibujo del borde
dibujarLinea("red", 0, 0, 800, 0, papel)
dibujarLinea("red", 800, 0, 800, 650, papel)
dibujarLinea("red", 800, 650, 0, 650, papel)
dibujarLinea("red", 0, 650, 0, 0, papel)

// Función para dibujar líneas
function dibujarLinea(c, x_i, y_i, x_f, y_f, lienzo)				// Declaro variables dentro de los parentesis.
{
	lienzo.beginPath();										// Comienza a dibujar (Arranque de la línea).
	lienzo.strokeStyle = c;									// Defino el color de la línea.
	lienzo.lineWidth = 3;									// ancho de línea
	lienzo.moveTo(x_i,y_i);									// Coloco el punto en las coordenadas que quiero iniciar.
	lienzo.lineTo(x_f,y_f);									// Coloco las coordenadas a donde trazaré la línea.								// Todas las terminaciones "blablabla.función()" son funciones.
	lienzo.stroke();										// Trazó las líneas.
	lienzo.closePath();										// Termino el trazo (Separar el lapiz del papel).
}

//Función para dibujar con el mouse
document.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(evento) 
{
    console.log(evento);
    if (evento.buttons == 1) 				// EL evento buttons, hace la función de mouseup y mousedown, cuando se preciona el mouse vale 1 y si lo sueltas vale 0.
    {
        dibujarLinea(colorsito.value, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}
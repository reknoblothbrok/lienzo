//document.addEventListener("keyup", dibujarTeclado);
//document.addEventListener("mouseup", soltarMouse);
//document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
//var teclas = {
//	UP: 38,														//keyCode_arrowUp
//	DOWN: 40,													//keyCode_arrowDown
//	LEFT: 37,													//keyCode_arrowLeft
//	RIGHT: 39													//keyCode_arrowRight
//};
var x;													
var y;
var estado = 0;		
var colorsito = "blue";
var move = 1;											

// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)
//dibujarLinea ("red", 149, 149, 151, 151, papel);               // Punto central

//Función para le teclado
//function dibujarTeclado(evento)
//{

//	console.log("Tecla oprimida");							// Me muestra cuantas veces preciono una tecla
//	console.log(evento);										// Lo usamos para buscar el keyCode de las teclas
//	switch(evento.keyCode)
//	{
//		case teclas.UP:
//			dibujarLinea(colorsito, x, y, x, y - move, papel);
//			y = y - move;
//		break;
//		case teclas.DOWN:
//			dibujarLinea(colorsito, x, y, x, y + move, papel);
//			y = y + move;
//		break;
//		case teclas.LEFT:
//			dibujarLinea(colorsito, x, y, x - move, y, papel);
//			x = x - move;
//		break;
//		case teclas.RIGHT:
//			dibujarLinea(colorsito, x, y, x + move, y, papel);
//			x = x + move;
//		break;
		//default:
		//	console.log("Esa no es una flecha, mi perroow");
//		break;
//	}
//}

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

//Función para presionar mouse
//function presionarMouse(evento)
//{
//	estado = 1;
//	x = evento.layerX;
//	y = evento.layerY;
//}

//Función para soltar mouse
//function soltarMouse(evento)
//{
//	estado = 0;
//	x = evento.layerX;
//	y = evemto.layerY;
//}

//Función para dibujar con el mouse
//function dibujarMouse(evento)
//{
//	if (estado == 1)
//	{
//		dibujarLinea(colorsito, x, y, evento.layerX, evento.layerY, papel)
//	}
//	x = evento.layerX;
//	y = evento.layerY;
//}

//Función para dibujar con el mouse (Sin mouseup o mousedown)
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
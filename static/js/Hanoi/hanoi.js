void setup(){
  size(710,400);
  background(colorFondo);
  fill(255);
  noLoop();
  PFont fontA = loadFont("arial");
  textFont(fontA, 12);
	//frameRate(40);
	//iniciar();
};

PImage fondo = loadImage("/static/img/Hanoi/SevillayTorres.png");
PImage barra = loadImage("/static/img/Hanoi/barra.png");
PImage portada = loadImage("/static/img/Hanoi/hanoi-p.jpg");

var colorFondo = 210;
var pila1 = null;
var pila2 = null;
var pila3 = null;
var numDiscos = 3;
var torre1 = 120;
var torre2 = 350;
var torre3 = 580;
var topTorre = 65;
var altoTorre = 300;
var anchoTorre = 10;
var pilaA = null;
var pilaB = null;
var select1 = false;
var select2 = false;
var select3 = false;
var numMovs = 0;
var numClicks = 0;
var mostrarAlerta = false; //si cambia a true, muestra un texto!
var alerta = ""; //texto mostrado como alerta
var xAlert = 0; //un valor en x para dibujar el texto de alerta
var TORRES = new Array(3); //guarda referencia de las 3 torres para fácil manejo
var XTorre = new Array(3);
XTorre[0] = torre1;
XTorre[1] = torre2;
XTorre[2] = torre3;
//variables para determinar el tamaño de los discos según el número de discos
var n1 = 20;
var n2 = 20;
var espaciado = 25; //espaciado entre discos
//indica si el juego ha iniciado
var iniciado = false;
//indica en cuantos movimientos puede resolverse el juego
var minMovs = 0;
var bottom = 310; //la parte más baja en y para empezar a dibujar las torres

function Disco(id){
	this.id = id;
	this.tam = id*n1+n2;
}

iniciar = function(){
	seleccionarNivel();
	numMovs = 0;
	minMovs = Math.pow(2,numDiscos)-1;
	pila1 = new Array();
	pila2 = new Array();
	pila3 = new Array();
	setTamDiscos(); //seteamos el tamaño q deben tener los discos
	for(var i=(numDiscos); i>0; i--)
		pila1.push(new Disco(i));
	TORRES[0] = pila1;
	TORRES[1] = pila2;
	TORRES[2] = pila3;
	//inicializamos el juego con el primer draw
	iniciado = true;
	redraw();
};

draw = function(){
	if( iniciado ){
		background(colorFondo);
		image(fondo,0,0,710,400);
		dibujarTorres();
		dibujarDiscos();
		dibujarTextos();
	}else{
		image(portada,0,0,710,400);
	}
};

mouseClicked = function(){
	var t = detectarClick(mouseX, mouseY);
	if( t!=0 ){ //hemos hecho click en alguna torre
		numClicks++; //hemos hecho un click
		efectoSeleccionarTorre(t);
		if( numClicks == 1 ){
			pilaA = TORRES[t-1];
		}else if( numClicks == 2 ){
			pilaB = TORRES[t-1];
			if( pilaA.length == 0){
				mostrarAlerta = true;
				alerta = "NO HAY DISCOS";
				xAlert = 280;
			}
			else if( pilaB.length == 0 ){
				pilaB.push( pilaA.pop() ); numMovs++;
			}
			//si el disco de la pilaA es menor (mas pequeño) que el de la pilaB
			else if( pilaA[ pilaA.length-1 ].id < pilaB[ pilaB.length-1 ].id ){
				pilaB.push( pilaA.pop() ); numMovs++;
			}else{
				mostrarAlerta = true;
				alerta = "MOVIMIENTO NO PERMITIDO";
				xAlert = 220;
			}
			numClicks = 0;
			desactivarTorres();
			if( pila3.length == numDiscos ){
				mostrarAlerta = true;
				if( numMovs == minMovs ){
					alerta = "Excelente!, lo has hecho en el menor número de movimientos.";
					xAlert = 75;
				}else{
					alerta = "Has Ganado!, pero puedes mejorar.";
					xAlert = 190;
				}
				guardarPunteo(3000,numMovs,"nivel");
			}
		}
		redraw();
	}else{
		desactivarTorres();
		numClicks = 0;
		redraw();
	}
};

function desactivarTorres(){
	select1 = false; select2 = false; select3 = false;
};
//selecciona la torre según su id (1,2,3)
function efectoSeleccionarTorre(idTorre){
	desactivarTorres();
	if( idTorre == 1) select1 = true;
	else if( idTorre == 2 ) select2 = true;
	else if( idTorre == 3 ) select3 = true;
};
//dibuja las torres, y cambia de color la que se seleccione
function dibujarTorres(){
	fill(130,100,150);
	//rect(10,330,690,20); //dibuja la base de las torres
	if( select1 )
		fill(240);
	rect(torre1,topTorre,anchoTorre,altoTorre);
	fill(130,100,150);
	if( select2 )
		fill(240);
	rect(torre2,topTorre,anchoTorre,altoTorre);
	fill(130,100,150);
	if( select3 )
		fill(240);
	rect(torre3,topTorre,anchoTorre,altoTorre);
	image(barra,10,330,690,40);
	textSize(30);
	fill(50);
	text("TORRE 1",60,360);
	text("TORRE 2",290,360);
	text("TORRE 3",520,360);
};

function dibujarDiscos(){
	textSize(14);
	for(var t=0; t<TORRES.length; t++){
	bottom = 310;
		for(var i=0; i<TORRES[t].length; i++){
			fill(180);
			var tam = TORRES[t][i].tam;
			//fill(200,100,50+(TORRES[t][i].id*10));
			selectColorForDisco(TORRES[t][i].id-1);
			//rect((XTorre[t]+anchoTorre/2)-(tam/2),bottom,tam,20);
			ellipse((XTorre[t]+anchoTorre/2),bottom,tam,20);
			fill(255);
			text(TORRES[t][i].id,XTorre[t],bottom+5);
			bottom -= espaciado;
		}
	}
}

function dibujarTextos(){
	fill(50,50,150);
	textSize(18);
	text("Número de Movimientos: "+numMovs, 20,20);
	text("Se puede resolver en "+(minMovs)+" movimientos.", 300,20);
	if( mostrarAlerta ){
		fill(250); stroke(250);
		rect(0,180,710,50);
		fill(100,40,100);
		textSize(20);
		text(alerta, xAlert, 210);
		mostrarAlerta = false;
		stroke(0);
	}
}

function selectColorForDisco(num){
	if( num == 0 ){
		fill(0,0,255);
	}else if( num == 1 ){
		fill(0,235,0);
	}else if( num == 2 ){
		fill(255,0,0);
	}else if( num == 3 ){
		fill(100,100,100);
	}else if( num == 4 ){
		fill(50,100,50);
	}else if( num == 5 ){
		fill(150,100,150);
	}else if( num == 6 ){
		fill(100,200,100);
	}else if( num == 7 ){
		fill(100,0,100);
	}else if( num == 8 ){
		fill(0,100,0);
	}else if( num == 9 ){
		fill(100,150,150);
	}
}

//retorna 1 si se dio click en la torre1, 2 click en la torre2, etc..., 0 si no se dio click sobre una torre
function detectarClick(x,y){
	if( mouseX > (torre1-60) & mouseX < (torre1+60) )
		return 1;
	else if( mouseX > (torre2-30) & mouseX < (torre2+30) )
		return 2;
	else if( mouseX > (torre3-30) & mouseX < (torre3+30) )
		return 3;
	return 0;
};

function setTamDiscos(){
	if( numDiscos <= 4 ){
		n1 = 40; n2 = 40; espaciado = 40;
	}else if( numDiscos <= 7 ){
		n1 = 30; n2 = 30; espaciado = 35;
	}else if( numDiscos <= 10 ){
		n1 = 20; n2 = 20; espaciado = 25;
	}
};

function seleccionarNivel(){
	numDiscos = document.getElementById('nivel').value-30;
}

var iii = 0;
function efectoMoverDisco(disco, pA, pB){
	alert(pA.length+bottom);
	alert(pB.length+bottom);
}

window.setTimeout(redraw,200); //para dibujar la portada ya q el draw tiene noLoop();
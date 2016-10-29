void setup(){
  size(801,401);
  background(colorFondo);
  //noLoop();
  PFont fontA = loadFont("arial");
  textFont(fontA, 12);
	frameRate(50);
	generarLaberinto();
	initImagen();
	//generarCamino();
	crearLaberintos();
};

function initImagen(){
	for(var i=1; i<=4; i++){
		front[i-1] = new PImage();
		front[i-1] = loadImage(path+"f"+i+".png");
		left[i-1] = new PImage();
		left[i-1] = loadImage(path+"l"+i+".png");
		right[i-1] = new PImage();
		right[i-1] = loadImage(path+"r"+i+".png");
		back[i-1] = new PImage();
		back[i-1] = loadImage(path+"b"+i+".png");
	}
	mouse = new Mouse(puntoInicial.x,puntoInicial.y);
	cheese = new Cheese(puntoFinal.x,puntoFinal.y);
};

var colorFondo = 240;
var jugando = false;
var nivel = 0; //el nivel del juego
var mM = 0; //para dibujar correctamente el ratón dependiendo el tamaño del laberinto
var tamCasilla = 0;
var laberinto = null;
var camino = 9; //representa una casilla con camino el la matriz
var puntoInicial = new Punto(2,2);
var puntoFinal = null;
var labs1 = []; //laberintos predefinidos
var labs2 = [];
var labs3 = [];

labs1.push(lab)
var path = "/static/img/Laberinto/";
var front = new Array(4);
var left = new Array(4);
var right = new Array(4);
var back = new Array(4);
PImage imgCheese = loadImage(path+"cheese.png");
PImage mouseWin = loadImage(path+"mouse-cheese.jpg");
PImage mouseR = loadImage(path+"mouse-and-cheese.png");
PImage ladrillo = loadImage(path+"ladrillo.jpg");
var caminando = true;
var mouse = null;
var cheese = null;
var ganado = false;
var noIniciado = true;
var crono = null;

draw = function(){
	//ganado = true;
	//jugando = false;
	//noIniciado = false;
	if( jugando ){
		background(colorFondo);
		dibujarLaberinto();
		dibujarRaton();
		if( mouse.xx == cheese.xx & mouse.yy == cheese.yy ){
			jugando = false;
			ganado = true;
		}
	}
	if( ganado ){
		window.setTimeout(function(){
			background(255);
			fill(20);
			textSize(32);
			image(mouseWin,210,0);
			text("HAS GANADO",320,40);
			ganado = false;
			
			guardarPunteo(1000,);
		},500);
	}
	if( noIniciado ){
		fill(255);
		image(mouseR,0,0,801,401);
		textSize(48);
		text("Selecciona",30,50);
		text("Nivel",30,90);
	}
};

function preLabs(){
	labs1.push( [0,2,3,4,5,6,15,30,60,101,102,103,104,105,108,109,22,40,41,20,62,82,122,142,162,163,164,165,42,125,126,127,107,87,67,47,48,49,29,10,11,12,13,14,16,17,18,19,39,59,58,57,56,55,75,95,94,93,92,112,132,147,148,168,188,189,190,191,171,172,173,174,175,176,196,197,198,199,84,64,65,45,25,100,120,140,160,180,181,166,89,90,70,71,55,130,131,133,134,135,136,116,52,53,33,179,158,139,78,138,118,117,150,99,157] );
	labs2.push( [1,2,3,4,5,6,7,8,9,0] );
	labs3.push( [3,4,5,6,7] );
}

function crearLaberintos(){
	preLabs();
	var v = null;
	if( nivel == 1 ){
		var al = aleat(0,labs1.length-1);
		v = labs1[al];
	}else if( nivel == 2 ){
		var al = aleat(0,labs2.length-1);
		v = labs2[al];
	}else if( nivel == 3 ){
		var al = aleat(0,labs3.length-1);
		v = labs3[al];
	}
	//printArray(v);
	//console.log(v.length);
	for(var i=0; i<v.length; i++){
		setValMatrix(-1,v[i],laberinto);
	}
	//printArray(laberinto);
};

function dibujarLaberinto(){
	stroke(133); fill(200);
	tCasilla = tamCasilla;
	for(var i=0; i<laberinto.length; i++){
		for(var j=0; j<laberinto[i].length; j++){
			if( puntoInicial.x == i & puntoInicial.y == j )
			 	fill(0);
			if( puntoFinal.x == i & puntoFinal.y == j )
			 	fill(0,0,255);
			if( laberinto[i][j] != -1 ){
				fill(250);
				image(ladrillo,j*tCasilla,i*tCasilla,tCasilla,tCasilla);
			}
			//rect(j*tCasilla,i*tCasilla,tCasilla,tCasilla);
			//fill(0);
			//text(laberinto[i][j],j*tCasilla+5,i*tCasilla+15);
			//fill(200);
		}
	}
};

function generarLaberinto(){
	setNivel();
	if( nivel == 1 ){
		laberinto = newMatrix(10,20);
		mM = 20;
	}else if( nivel == 2 ){
		laberinto = newMatrix(16,32);
		mM = 20;
	}else if( nivel == 3 ){
		laberinto = newMatrix(20,40);
		mM = 20;
	}
	fillMatrix( laberinto ); //llenamos la matriz de ceros
	tamCasilla = 800/laberinto[0].length;
	puntoFinal = new Punto(laberinto[0].length-3,laberinto.length-3);
};

function setNivel(){
	nivel = 1;
};

function generarCamino(){
	puntoInicial = new Punto(aleat(0,(laberinto.length/2)-3), aleat(0,laberinto[0].length-1));
	puntoFinal   = new Punto(aleat((laberinto.length/2)+3,laberinto.length-1), aleat(0,laberinto[0].length-1));
	var aux = 0;
	var x = puntoInicial.x+1;
	var y = puntoInicial.y;
	var z = aleat(0,3); //para elegir entre sumar o restar
	setCamino(x,y,z,2);
};

var profRec = 0;
function setCamino(x,y,mov,cant){
	if( profRec > 1000 ){
		console.log("Super Rec"); return;
	}
	if( x==puntoFinal.x & y==puntoFinal.y )
		return;
	if( x<0 ) x=0; if( x>laberinto.length-1 ) x=laberinto.length-1;
	if( y<0 ) y=0; if( y>laberinto[0].length-1 ) y=laberinto[0].length-1;
	if( mov == 0 ){
		for(var i=1;i<=cant; i++){
			x--;
			if(x>0){
				console.log("x>0: "+x);
				laberinto[x][y] = camino;
			}
		}
	}else if( mov==1 ){
		for(var i=1;i<=cant; i++){
			x++;
			if(x<laberinto.length-1){
				console.log("x<length: "+x);
				laberinto[x][y] = camino;
			}
		}
	}else	if( mov==2 ){
		for(var i=1;i<=cant; i++){
			y--;
			if(y>0){
				laberinto[x][y] = camino;
			}
		}
	}else if( mov==3 ){
		for(var i=1;i<=cant; i++){
			y++;
			if(y<laberinto[0].length-1){
				laberinto[x][y] = camino;
			}
		}
	}
	profRec++;
	var z = aleat(0,3);
	setCamino(x,y,z,3);
};

//
mouseClick = function(){
	// var Y = parseInt(mouseY/tamCasilla);
	// var X = parseInt(mouseX/tamCasilla);
	// alert(X+","+Y);
	jugando = true;
	noIniciado = false;
	document.getElementById("lab-canvas").focus();
	if( crono ){
		crono.kill();
	}else{
		crono = new Cronometro("lab-tiempo");
		crono.iniciar();
	}
};

void keyPressed(){
	if( keyCode == DOWN ){
		mouse.moverAba();
	}else if( keyCode == UP ){
		mouse.moverArr();
	}else if( keyCode == LEFT ){
		mouse.moverIzq();
	}else if( keyCode == RIGHT ){
		mouse.moverDer();
	}
	console.log("mX: "+mouse.xx+" - mY: "+mouse.yy);
	console.log("cX: "+cheese.xx+" - cY: "+cheese.yy);
};

function Cheese(x,y){
	this.x = x*tamCasilla+(tamCasilla/2); this.y = y*tamCasilla+(tamCasilla/2);
	this.img = imgCheese;
	this.xx = x;
	this.yy = y;
};

function Mouse(x,y){
	this.x = x*tamCasilla+(tamCasilla/2); this.y = y*tamCasilla+(tamCasilla/2);
	this.xx = x;
	this.yy = y;
	this.img = front;
	this.imagen = this.img[0];
	this.next = 0;
	this.mov1mas = 0; //para poder moverse un poco
};
Mouse.prototype.moverIzq = function(){
	this.img = left;
	if( this.caminar(this.xx-1,this.yy) ){
		this.x -= tamCasilla;
		this.xx = parseInt((this.x)/tamCasilla);
	}
};
Mouse.prototype.moverDer = function(){
	this.img = right;
	if( this.caminar(this.xx+1,this.yy) ){
		this.x += tamCasilla;
		this.xx = parseInt((this.x)/tamCasilla);
	}
};
Mouse.prototype.moverArr = function(){
	this.img = back;
	if( this.caminar(this.xx,this.yy-1) ){
		this.y -= tamCasilla;
		this.yy = parseInt((this.y)/tamCasilla);
	}
};
Mouse.prototype.moverAba = function(){
	this.img = front;
	if( this.caminar(this.xx,this.yy+1) ){
		this.y += tamCasilla;
		this.yy = parseInt((this.y)/tamCasilla);
	}
};
Mouse.prototype.caminar = function(x,y){
	console.log(x+","+y);
	if( x<laberinto[0].length & y<laberinto.length & x>=0 & y>=0 ){
		this.next = laberinto[y][x];
		if( this.next == -1 ){
			return true;
		}
	}
	return false;
}

function dibujarRaton(){
	fill(0);
	image(cheese.img,cheese.x-15,cheese.y-10); //dibujando el queso
	image(mouse.imagen,mouse.x-mM,mouse.y-mM); //dibujando el ratón
	ellipse(cheese.y,cheese.x,5,5);
	//text(mouse.xx+","+mouse.yy,700,10);
};

var m_interv = 0;
var ii = 0;
m_interv = window.setInterval(function(){
	if( caminando ){
		mouse.imagen = mouse.img[ii++];
		if( ii>=3 )
			ii = 0;
	}
},100);

function hasGanado(){

}
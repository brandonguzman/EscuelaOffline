function Punto(x,y){
  this.x = x; this.y = y;
};
function initImagen(){
	for(var i=0; i<4; i++){
		front[i] = new PImage();
		front[i] = loadImage(path+"f"+i+".png");
		left[i] = new PImage();
		left[i] = loadImage(path+"l"+i+".png");
		right[i] = new PImage();
		right[i] = loadImage(path+"r"+i+".png");
		back[i] = new PImage();
		back[i] = loadImage(path+"b"+i+".png");
	}
	tablero = new PImage();
	tablero = loadImage(path+"tablero5x5.png");
};
function initEjes(){
	var aux = 137;
	for(var i=0; i<5; i++){
		posTabla[i] = new Punto(aux,30);
		aux += 76;
	}
	aux = 130;
	for(var i=5; i<10; i++){
		posTabla[i] = new Punto(aux,80);
		aux += 78;
	}
	aux = 120;
	for(var i=10; i<15; i++){
		posTabla[i] = new Punto(aux,135);
		aux += 83;
	}
	aux = 111;
	for(var i=15; i<20; i++){
		posTabla[i] = new Punto(aux,200);
		aux += 88;
	}
	aux = 104;
	for(var i=20; i<25; i++){
		posTabla[i] = new Punto(aux,260);
		aux += 92;
	}
};
function initH(){
	for(var i=0; i<6; i++){
		//var p = niveles[i];
		h[i] = new Boy(288,30,i); //todos los humanos colocados en la segunda casilla
	}
	hActual = h[0];
	h[0].activo = true;
	h[0].principal = true;
	hId = hActual.id;
};

var h = new Array(6);
var path = "/static/img/HAM/";
var front = new Array(4);
var left = new Array(4);
var right = new Array(4);
var back = new Array(4);
var hActual = null;
var hId = -1;
var tablero = null;
var tabla = fillMatrixZero( newMatrix(5,5) );
var posTabla = new Array(25); //contiene puntos (x,y) de las 25 casillas
var ejeActual = [0,0];
var niveles = new Array(6);
var casillasOcup = new Array(6);
var casillaActual = -1;
//niveles
var niv1 = [13,11,10,0,2,4];
var NivelesJ = newMatrix(10,6);
NivelesJ[0] = [13,11,10,0,1,2];
NivelesJ[1] = [18,21,20,0,2,3];
NivelesJ[2] = [19,4,0,5,16,24];
NivelesJ[3] = [19,14,4,0,10,20];
NivelesJ[4] = [23,12,8,0,20,21];
NivelesJ[5] = [20,23,24,9,4,1];
NivelesJ[6] = [20,23,14,9,8,0];
NivelesJ[7] = [1,10,20,21,22,9];
NivelesJ[8] = [21,10,0,1,4,19];
NivelesJ[9] = [4,0,10,20,22,24];

var nivelJ = null;

function setNivelIA(){ //las casillas donde iniciarán los humanos.
	selectNivel();
	niveles[0] = posTabla[nivelJ[0]]; 
	niveles[1] = posTabla[nivelJ[1]]; 
	niveles[2] = posTabla[nivelJ[2]]; 
	niveles[3] = posTabla[nivelJ[3]]; 
	niveles[4] = posTabla[nivelJ[4]]; 
	niveles[5] = posTabla[nivelJ[5]]; 
	casillasOcup[0] = nivelJ[0];
	casillasOcup[1] = nivelJ[1];
	casillasOcup[2] = nivelJ[2];
	casillasOcup[3] = nivelJ[3];
	casillasOcup[4] = nivelJ[4];
	casillasOcup[5] = nivelJ[5];

	for(var i=0; i<6; i++){
		var p = posTabla[ nivelJ[i] ];
		h[i].casilla = nivelJ[i];
		h[i].x = p.x;
		h[i].y = p.y;
		h[i].fuera = false;
		h[i].activo = false;
	}
	hActual = h[0];
	hActual.activo = true;
	casillaActual = nivelJ[0];
	hId = 0;
};

function selectNivel(){
	var nn = document.getElementById("nivel").value;
	nn -= 10;
	nivelJ = NivelesJ[nn];
};

function setNuevaPos(id,casilla){
	for(var i=0; i<6; i++){
		if( casillasOcup[i] == casilla ){
			var nueva = getCasillaPorXY();
			casillasOcup[i] = nueva;
			hActual.casilla = nueva;
		}
	}
	if( hActual.casilla==12 & hActual.principal )
		hasGanado();
};

function getCasillaPorXY(){
	for(var i=0; i<25; i++){
		var p = posTabla[i];
		if( p.x==hActual.x & p.y==hActual.y )
			return i;
	}
};

function setCasilla(id){
	var p = null;
	for(var i=0; i<25; i++){
		p = posTabla[i];
		if( hActual.x<p.x+40 & hActual.x>p.x-40 & hActual.y<p.y+25 & hActual.y>p.y-25 )
			casillaActual = i;
	}
};

function Boy(x,y,id){
	this.x = x;
	this.y = y;
	this.salto = 5; //el salto en el eje x,y
	this.actual = front; //imagen actual
	this.sprite = 0;
	this.activo = false;
	this.principal = false;
	this.id = id;
	this.fuera = false;
	this.salto2 = 0;
	this.casilla = null;
};
Boy.prototype.caminar = function(){
	if(this.principal){
		fill(255,255,0);
		ellipse(this.x+16,this.y+23,28,45);
	}
	image(this.actual[this.sprite],this.x,this.y);
	if(this.activo){
		fill(255);
		ellipse(this.x+15,this.y+50,40,10);
	}
	setCasilla(this.id);
	if( this.x<44 & this.y==260 & !this.fuera ){ //fila 1
		this.fuera = true; this.salto2 = -3;//this.y += 15;
	}
	else if( this.x>536 & this.y==260 & !this.fuera ){
		this.fuera = true; this.salto2 = 3;//this.y += 15; this.x += 5;
	}
	else if( this.x<48 & this.y==200 & !this.fuera ){ //fila 2
		this.fuera = true; this.salto2 = -3;//this.y += 15; this.x += 5;
	}
	else if( this.x>523 & this.y==200 & !this.fuera ){
		this.fuera = true; this.salto2 = 3;//this.y += 15; this.x += 5;
	}
	else if( this.x<65 & this.y==135 & !this.fuera ){ //fila 3
		this.fuera = true; this.salto2 = -3;//this.y += 15; this.x += 5;
	}
	else if( this.x>509 & this.y==135 & !this.fuera ){
		this.fuera = true; this.salto2 = 3;//this.y += 15; this.x += 5;
	}
	else if( this.x<80 & this.y==80 & !this.fuera ){ //fila 4
		this.fuera = true; this.salto2 = -3;//this.y += 15; this.x += 5;
	}
	else if( this.x>495 & this.y==80 & !this.fuera ){
		this.fuera = true; this.salto2 = 3;//this.y += 15; this.x += 5;
	}
	else if( this.x<87 & this.y==30 & !this.fuera ){ //fila 5
		this.fuera = true; this.salto2 = -3;//this.y += 15; this.x += 5;
	}
	else if( this.x>485 & this.y==30 & !this.fuera ){
		this.fuera = true; this.salto2 = 3;//this.y += 15; this.x += 5;
	}
	else if( this.y<=0 ){
		this.fuera = true; this.y=345;
	}
	else if( this.y>=310 ){
		this.fuera = true; 
	}
	if( this.fuera ){
		this.y += 15; this.x += this.salto2;
	}
	if( this.y>450 ){
		hasPerdido();
	}
};
Boy.prototype.caminarCentro = function(){
	var p = posTabla[casillaActual];
	while(this.x!=p.x){
			if(this.x==p.x)
				window.clearInterval(i);
			this.sprite++;
			if( this.sprite==4 )
				this.sprite = 0;
			if(this.x<p.x){
				this.x++;
			}else if(this.x>p.x){
				this.x--;
			}
			setNuevaPos(this.id);
	}
	while(this.y!=p.y){
			if(this.y==p.y)
				window.clearInterval(j);
			this.sprite++;
			if( this.sprite==4 )
				this.sprite = 0;
			if(this.y<p.y){
				this.y++;
			}else if(this.y>p.y){
				this.y--;
			}
	}
	window.clearInterval(intervalo);
	setNuevaPos(this.id,this.casilla);
	keybActive = true;
};
Boy.prototype.moverIzq = function(){
	if( comprobarLeft(casillaActual-1) ){
		keybActive = true;
		this.caminarCentro();
		return;
	}
	this.actual = left;
	this.x -= this.salto;
	this.sprite++;
	if( this.sprite==4 )
		this.sprite = 0;
};
Boy.prototype.moverDer = function(){
	if( comprobarRight(casillaActual+1) ){
		keybActive = true;
		this.caminarCentro();
		return;
	}
	console.log("der: "+this.x+"-"+this.y);
	this.actual = right;
	this.x += this.salto;
	this.sprite++;
	if( this.sprite==4 )
		this.sprite = 0;
};
Boy.prototype.moverArr = function(){
	if( comprobarOcupado(casillaActual-5) ){
		keybActive = true;
		this.caminarCentro();
		return;
	}
	this.actual = back;
	this.y -= this.salto;
	if( this.x>68 & this.x<243 )
		this.x++;
	else if( this.x>333 & this.x<523 )
		this.x--;
	this.sprite++;
	if( this.sprite==4 )
		this.sprite = 0;
};
Boy.prototype.moverAba = function(){
	console.log("moviendo abajo");
	if( comprobarOcupado(casillaActual+5) ){
		keybActive = true;
		this.caminarCentro();
		return;
	}
	this.actual = front;
	this.y += this.salto;
	if( this.x>68 & this.x<243 )
		this.x--;
	else if( this.x>333 & this.x<523 )
		this.x++;
	this.sprite++;
	if( this.sprite==4 )
		this.sprite = 0;
};

void setup(){
	initImagen();
	initEjes();
	initH();
  size(600,400);
  background(125);
  fill(255);
  //noLoop();
  PFont fontA = loadFont("arial");
  textFont(fontA, 20);
	frameRate(40);
};

var keybActive = true;
var moviendo = false;
var intervalo = -1;
var jugando = false;
var ganado = false;
var seleccion = true;
var texto = "Jugando";

draw = function(){
	if( seleccion ){
		background(50);
		text("SELECCIONA ESCENARIO",190,200);
	}
	if( jugando ){
		background(50);
		fill(255);
		console.log("dibujando...");
		//text(hActual.x+"-"+hActual.y,20,20);
		//text(casillaActual,100,20);
		//text(hId,200,20);
		//text(casillasOcup,300,20);
		//text(keybActive,450,20);
		//text(ejeActual,20,30);
		text(texto,20,20);
		image(tablero,50,50);
		for(var i=0; i<6; i++){
			console.log(h[i].y);
			h[i].caminar();
		}
	}
	if( ganado ){
		background(50);
		fill(255);
		image(tablero,50,50);
		console.log("ganada");
		for(var i=0; i<6; i++){
			h[i].caminar();
			if( h[0].y>410 & h[1].y>410 & h[2].y>410 & h[3].y>410 & h[4].y>410 & h[5].y>410){
				ganado = false;
				window.clearInterval(caminar);
				window.clearInterval(intervalo);
				//alert("TERMINADO");
				seleccion = true;
				ganado = false;
				jugando = false;
				guardarPunteo(500,6,"nivel");
			}
		}
	}
};

var caminar = 0;
function caminarDown(){
	caminar = window.setInterval(function(){
		if( ganado ){
			//console.log("moverAba");
			//alert("ok");
			for(var i=0; i<6; i++){
				h[i].actual = front;
				h[i].y += 5;
				h[i].sprite++;
				if( h[i].sprite == 4 )
					h[i].sprite = 0;
				console.log(h[i].id+"-"+h[i].x+"-"+h[i].y);
			}
		}
	},100);
};

mouseClic = function(){
	setNivelIA();
	jugando = true;
	seleccion = false;
	keybActive = true;
	ganado = false;
	window.setTimeout(function(){
		document.getElementById("iaCanvas").focus();
	},500);
};

void keyPressed(){
	if( keybActive ){
		keybActive = false;
		if( keyCode == DOWN ){
			intervalo = window.setInterval(function(){
				console.log("DOWN");
				hActual.moverAba();
			},100);
		}
		else if( keyCode == LEFT ){
			intervalo = window.setInterval(function(){
				hActual.moverIzq();
			},100);
		}
		else if( keyCode == RIGHT ){
			intervalo = window.setInterval(function(){
				hActual.moverDer();
			},100);
		}
		else if( keyCode == UP ){
			intervalo = window.setInterval(function(){
				hActual.moverArr();
			},100);
		}
		else if( keyCode == 9 ){//TABULACION
			hId++;
			if( hId==6 )
				hId = 0;
			hActual.activo = false;
			hActual = h[hId];
			hActual.activo = true;
			keybActive = true;
			setCasilla();
		}else{
			keybActive = true;
		}
	}
};

function comprobarOcupado(casilla){
	for(var i=0; i<6; i++){
		if( casilla == casillasOcup[i] )
			return true;
	}
	return false;
};

function comprobarRight(casilla){
	if( casilla==5 | casilla==10 | casilla==15 | casilla==20 )
		return false;
	return comprobarOcupado(casilla);
};
function comprobarLeft(casilla){
	if( casilla==4 | casilla==9 | casilla==14 | casilla==19 )
		return false;
	return comprobarOcupado(casilla);
};

function hasPerdido(){
	if( jugando ){
		window.clearInterval(intervalo);
		seleccion = true;
		jugando = false;
		keybActive = false;
		alert("Has Perdido");
	}
};

function hasGanado(){
	window.setTimeout(function(){
		window.clearInterval(intervalo);
		jugando = false;
		keybActive = false;
		ganado = true;
		alert("Has Ganado");
		caminarDown();
	},1000);
};

	// window.setTimeout(function(){
	// 	setNivelIA();
	// 	console.log("setNivelIA");
	// },3000);


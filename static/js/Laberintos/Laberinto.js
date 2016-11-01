
void setup(){
  size(801,401);
  background(colorFondo);
  //noLoop();
  PFont fontA = loadFont("arial");
  textFont(fontA, 12);
	frameRate(50);
	
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


labs1.push(lab)
var path = "/static/img/Laberinto/";
var front = new Array(4);
var left = new Array(4);
var right = new Array(4);
var back = new Array(4);
PImage imgCheese = loadImage(path+"cheese.png");
PImage mouseWin = loadImage(path+"mouse-cheese.jpg");
PImage mouseR = loadImage(path+"mouse-and-cheese.png");
//PImage ladrillo = loadImage(path+"ladrillo.jpg");
PImage fondo = loadImage(path+"fondo-pasto.jpg");
PImage cuadro = loadImage(path+"cuadro.png");

var caminando = true;
var mouse = null;
var cheese = null;
var ganado = false;
var noIniciado = true;
var crono = null;

draw = function(){
	//ganado = false;
	//jugando = true;
	//noIniciado = false;
	if( jugando ){
		image(fondo,0,0,800,400);
		dibujarLaberinto();
		dibujarRaton();
		if( mouse.xx == cheese.yy & mouse.yy == cheese.xx ){
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
			crono.detener();
			var pp = document.getElementById("lab-tiempo").innerText;
			guardarPunteo(1000,pp,"nivel");
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

function crearLaberintos(){
	preLabs();
	var f = null;
	if( nivel == 1 ){
		var al = aleat(0,labs1.length-1);
		f = labs1[al];
	}else if( nivel == 2 ){
		var al = aleat(0,labs2.length-1);
		f = labs2[al];
	}else if( nivel == 3 ){
		var al = aleat(0,labs3.length-1);
		f = labs3[al];
	}
	f(laberinto);
	//printArray(v);
	//console.log(v.length);
	//for(var i=0; i<v.length; i++){
		//setValMatrix(-1,v[i],laberinto);
	//}
	//printArray(laberinto);
};

// function dibujarLaberinto(){
// 	stroke(133); fill(200);
// 	tCasilla = tamCasilla;
// 	for(var i=0; i<laberinto.length; i++){
// 		for(var j=0; j<laberinto[i].length; j++){
// 			if( puntoInicial.x == i & puntoInicial.y == j )
// 			 	fill(0);
// 			if( puntoFinal.x == i & puntoFinal.y == j )
// 			 	fill(0,0,255);
// 			if( laberinto[i][j] != -1 ){
// 				fill(250);
// 				image(ladrillo,j*tCasilla,i*tCasilla,tCasilla,tCasilla);
// 			}
// 			//rect(j*tCasilla,i*tCasilla,tCasilla,tCasilla);
// 			//fill(0);
// 			//text(laberinto[i][j],j*tCasilla+5,i*tCasilla+15);
// 			//fill(200);
// 		}
// 	}
// };

var caja = null;
//se usan para mover el circulo amarillo
var xini = 0; 
var xfin = 8;
var yini = 0;
var yfin = 8;
//se usan para dibujar el laberinto
var XI = xini;
var XF = xfin;
var YI = yini;
var YF = yfin;

function dibujarLaberinto(){
	stroke(215,85,105); fill(200,80,10);
	tCasilla = tamCasilla;
	fill(colorFondo);
	XI = xini;
	XF = xfin;
	YI = yini;
	YF = yfin;
	if( XI < 0) XI = 0;
	if( XF > laberinto.length ) XF = laberinto.length;
	if( YI < 0) YI = 0;
	if( YF > laberinto[0].length ) YF = laberinto[0].length;
	//console.log("yini y xini: "+yini,","+xini+" - yFin y xFin: "+yfin,","+xfin);
	for(var i=XI; i<XF; i++){
		for(var j=YI; j<YF; j++){
			//stroke(255,151,40); fill(255,151,40);
			stroke(255); fill(0,0,250);
			caja = laberinto[i][j];
			if( caja.arr ){
				rect(j*tamCasilla+2,i*tamCasilla,tCasilla,2);
			}
			if( caja.aba ){
				rect(j*tamCasilla+2,i*tamCasilla+tCasilla,tCasilla,2);
			}
			if( caja.izq ){
				rect(j*tamCasilla,i*tamCasilla,2,tCasilla);
				//fill(colorFondo);stroke(colorFondo);
				//rect(j*tamCasilla-3,i*tamCasilla+4,2,tCasilla-4);
			}
			if( caja.der ){
				rect(j*tamCasilla+tCasilla,i*tamCasilla,2,tCasilla);
			}
			//text(i+","+j,j*tCasilla+5,i*tCasilla+15);
		}
	}
	image(cuadro,yini*tCasilla-4,xini*tCasilla-4,(yfin-yini)*tCasilla+8,(xfin-xini)*tCasilla+8);
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
	llenarMatriz(laberinto);
	tamCasilla = 800/laberinto[0].length;
	puntoFinal = new Punto(laberinto[0].length-3,laberinto.length-3);
};

function setNivel(){
	nivel = document.getElementById("nivel").value;
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
	//se usan para mover el circulo amarillo
	xini = 0; 
	xfin = 8;
	yini = 0;
	yfin = 8;
	//se usan para dibujar el laberinto
	XI = xini;
	XF = xfin;
	YI = yini;
	YF = yfin;
	generarLaberinto();
	initImagen();
	//generarCamino();
	crearLaberintos();
	jugando = true;
	noIniciado = false;
	document.getElementById("lab-canvas").focus();
	if( crono ){
		crono.kill();
		crono = null;
		crono = new Cronometro("lab-tiempo");
		crono.iniciar();
	}else{
		crono = new Cronometro("lab-tiempo");
		crono.iniciar();
	}
};

var todas = [];

mouseC = function(){
	var Y = parseInt(mouseY/tamCasilla);
	var X = parseInt(mouseX/tamCasilla);
	var y = mouseY-Y*tamCasilla;
	var x = mouseX-X*tamCasilla;
	var mitad = parseInt(tamCasilla/2);
	var unCuarto = parseInt(tamCasilla/4);
	var arr = false;
	var aba = false;
	var izq = false;
	var der = false;
	if( y>=0 & y<unCuarto )
		arr = true;
	if( y>=unCuarto*3 & y<= tamCasilla )
		aba = true;
	if( x>=0 & x<unCuarto )
		izq = true;
	if( x>=unCuarto*3 & x<= tamCasilla )
		der = true;
	// if( arr )
	// 	arr = "true";
	// else
	// 	arr = "false";
	// if( aba )
	// 	aba = "true";
	// else
	// 	aba = "false";
	// if( izq )
	// 	izq = "true";
	// else
	// 	izq = "false";
	// if( der )
	// 	der = "true";
	// else
	// 	der = "false";
	var parraf = "abrirCamino("+Y+","+X+","+"laberinto,"+arr+","+aba+","+izq+","+der+");";
	todas.push( parraf );
	abrirCamino(Y,X,laberinto,arr,aba,izq,der);

};

mostrarMovimientosAg = function(){
	var movvs = document.getElementById('movs');
	for(i=0; i<todas.length; i++){
		var p = document.createElement("p");
		p.innerText = todas[i];
		movvs.appendChild( p );
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
	this.actual = null;
};
Mouse.prototype.moverIzq = function(){
	this.img = left;
	this.actual = laberinto[this.xx][this.yy];
	if( yini > -2 & this.yy-yini<=4 ){
		yfin--; yini--;
	}
	if( this.caminar(this.xx,this.yy-1) & !this.actual.izq ){
		this.y -= tamCasilla;
		this.yy = parseInt((this.y)/tamCasilla);
	}
	console.log(this.xx+","+this.yy+":"+this.actual.arr+","+this.actual.aba+","+this.actual.izq+","+this.actual.der);
};
Mouse.prototype.moverDer = function(){
	this.img = right;
	this.actual = laberinto[this.xx][this.yy];
	if( yfin < laberinto[0].length+2 & yfin-this.yy<=4 ){
		yfin++; yini++;
	}
	if( this.caminar(this.xx,this.yy+1) & !this.actual.der ){
		this.y += tamCasilla;
		this.yy = parseInt((this.y)/tamCasilla);
	}
	console.log(this.xx+","+this.yy+":"+this.actual.arr+","+this.actual.aba+","+this.actual.izq+","+this.actual.der);
};
Mouse.prototype.moverArr = function(){
	this.img = back;
	this.actual = laberinto[this.xx][this.yy];
	if( xini > -2 & this.xx-xini<=4 ){
		xfin--; xini--;
	}
	if( this.caminar(this.xx-1,this.yy) & !this.actual.arr ){
		this.x -= tamCasilla;
		this.xx = parseInt((this.x)/tamCasilla);
	}
	console.log(this.xx+","+this.yy+":"+this.actual.arr+","+this.actual.aba+","+this.actual.izq+","+this.actual.der);
};
Mouse.prototype.moverAba = function(){
	this.img = front;
	this.actual = laberinto[this.xx][this.yy];
	if( xfin < laberinto.length+2 & xfin-this.xx<=4 ){
		xfin++; xini++;
	}
	if( this.caminar(this.xx+1,this.yy) & !this.actual.aba ){
		this.x += tamCasilla;
		this.xx = parseInt((this.x)/tamCasilla);
	}
	console.log(this.xx+","+this.yy+":"+this.actual.arr+","+this.actual.aba+","+this.actual.izq+","+this.actual.der);	
};
Mouse.prototype.caminar = function(x,y){
	console.log("caminar hacia: "+x+","+y);
	console.log(laberinto.length+","+laberinto[0].length);
	if( x<laberinto.length & y<laberinto[0].length & x>=0 & y>=0 ){
		//this.next = laberinto[y][x]; //en realidad next es la casilla actual
		//if( this.next == -1 ){
			return true;06
		//}
	}
	return false;
}

function dibujarRaton(){
	fill(0);
	image(cheese.img,cheese.x-15,cheese.y-10); //dibujando el queso
	image(mouse.imagen,mouse.y-mM,mouse.x-mM); //dibujando el ratón
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

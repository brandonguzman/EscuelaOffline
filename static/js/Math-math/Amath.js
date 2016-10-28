
// variables globales
var anchoL = 650;
var altoL = 500;
var jugar = false;
var res;
var r;
var mate;
var num = [];
var num2 = [];
var ima = [];
var preg = [];
var tamaño = 55;
var x; var y;
var x2; var y2;
var posX; var posY;
var cont;
var termino;
var crono = null;
var draged = true;
var alerta = "";
var xAlert = 0;
var mostrarAlerta = false;

// cargo la imagen de la nube
nube = new PImage(); 
nube = loadImage("/static/img/Math-math/nube.png");

void setup(){
	//ancho y alto del lienzo
	size(anchoL,altoL);
	//se cargan las imagenes de fondo
	fondo = new PImage();
	fondo = loadImage("/static/img/Math-math/fondo.png");
	pizarra = new PImage();
	pizarra = loadImage("/static/img/Math-math/pizarra.jpg");
	
}

//funcion se activa al hacer click al boton.
eligio = function () {
	// se captura el nivel elegido
    nivel = document.getElementById('nivel').value;
    // activa el draw 
    jugar = true;
    //se inicia el cronometro.
     if( crono )
        	crono.kill();
        crono = new Cronometro("crono"); 
        crono.iniciar();
    // se inicializan las variables
    termino = 10; 
    reinicio();
    // se llama a la funcion que contiene la creacion de todos los objetos               
}

reinicio = function(){
	x = 30; y = 30;
    x2 = 190; y2 =330;
    num = [];
    ima = [];
    preg = [];
    r = 0;
    num2 = [];
    cont = 0;
    clickDibuja();
}

function dibujarTextos(){
	fill(100,100,150);
	textSize(16);
	if( mostrarAlerta ){
		fill(250); stroke(250);
		rect(0,180,710,50);
		fill(200,140,100);
		textSize(20);
		text(alerta, xAlert, 210);
		mostrarAlerta = false;
		stroke(0);
	}
}

// constructor para crear los objetos nube
function nubes(imagen,text,x,y,tamaño){
	this.imagen = imagen;
	this.text = text;
	this.x = x;
	this.y = y;
	this.tamaño = tamaño;
}
// metodo para dibujar las nubes
nubes.prototype.dibuja = function() {
	image(this.imagen,this.x,this.y,this.tamaño,this.tamaño);
	fill(0);
	textSize(25);
	text(this.text,this.x + 20 ,this.y + 40);
};
// constructor para crear los objetos de tipo texto los operandos.
function texto(text,tipo,x,y,size){
	this.text = text;
	this.tipo = tipo;
	this.x = x;
	this.y = y;
	this.size = size;
}
// metodo para dibujar el los objetos de texto
texto.prototype.dibuja = function(){
	fill(255);
	textSize(this.size);
	text(this.text,this.x,this.y);
};
// se valida a que objeto se le dio click
texto.prototype.click = function(x,y,objeto){
	if (x > this.x  & x < this.x + 25 & y > this.y - 23 & y < this.y ) {
		// al hacer click en los objetos se accede a la propiedad de tamano hace el efecto de crecer 
		// el texto seleccionaldo.
		objeto.size = 35;
		 /*se guarda la pocision donde se le dio click inicial al objeto
		 solo para hacer el efecto de que si ya hay algo en la nube
		 regresa al su pocision */
		posX = this.x;
		posY = this.y;
		// se llama a la funcion que activa el mouseDragget y se le pasa el objeto.
		arrastra(objeto);
	}
};


creaObjeto = function(vec){
for (var i = 0; i < num.length; i++) {
	//los siguientes condiciones sol es para la pocision x Y y de cada objeto.
	if (i == 0) {
		x2 = x2; y2 =y2;	
	}else if (i == 1) {
		x2 +=55; y2 =y2;
	}else if (i == 2) {
		x2 +=55; y2 =y2;
	}else if (i == 3) {
		x2 +=55; y2 =y2;
	}else if (i == 4) {
		x2 +=55; y2 =y2;
	}else if (i == 5) {
		x2 +=55; y2 =y2;
	}else if (i == 6) {
		x2 +=55; y2 =y2;
	}else if (i == 7) {
		x2 +=55; y2 =y2;
	}
		vec[i] = new texto(num[i],num[i],x2,y2,27);
	}
};

creaObjetoNubes = function(vec){
	for (var i = 0; i < preg.length; i++) {
	//los siguientes condiciones solo es para la pocision x Y y de cada objeto.
	if (i == 0) {
		x = x;y = y;	
	}else if (i == 1) {
		x +=70;y =30;
	}else if (i == 2) {
		x +=70;y =30;
	}else if (i == 3) {
		x +=70;y =30;
	}else if (i == 4) {
		x +=70;y =30;
	}else if (i == 5) {
		x +=70;y =30;
	}else if (i == 6) {
		x +=70;y =30;
	}else if (i == 7) {
		x +=70;y =30;
	}
		// se le pasa una imagen el tipo de imagen una x Y y un tamano.
		//se crean los objetos de tipo nube y dependiendo los signos de las operaciones
		// se le pasan todos todos los signos.
		if (preg[i] == "+" ) {
			vec[i] = new nubes(nube,"+",x,y,tamaño);
		}else if (preg[i] == "-") {
			vec[i] = new nubes(nube,"-",x,y,tamaño);
		}else if (preg[i] == "*") {
			vec[i] = new nubes(nube,"*",x,y,tamaño);
		}else if (preg[i] == "/") {
			vec[i] = new nubes(nube,"/",x,y,tamaño);
		}else if (preg[i] == "=") {
			vec[i] = new nubes(nube,"=",x,y,tamaño);
		}else{ 
			// la respuesta la convierte en flotante para las diviciones
			if (i <preg.length) {
				var t = parseFloat(preg[i]);	
			}else{
			//el resto los convierte en entero.
				var t =  parseInt(preg[i]);
			}
			//guarda los numeros en el vector num donde van guardados todos los numeros.
			num.push(t);
			vec[i] = new nubes(nube,"",x,y,tamaño);
		}		
	}
};


clickDibuja = function(){
	// es para el nivel 1
	if (nivel == 1) {
		//genera un numero aleatorio para cambiar las operaciones.
		//por ejemplo si el numero que genera ale es 1 se genera una suma.
		var ale =aleat(1,2);
		// genera un numero aleatorio para la dificultad.
		var e = aleat(1,20);
		if (ale == 1) {
			mate = new TriviaMate();
			mate.init("+",e);
		}else if (ale == 2){
			mate = new TriviaMate();
			mate.init("-",e);
		}
	}
// para el nivel 2
	if (nivel == 2) {
		//genera un numero aleatorio para cambiar las operaciones.
		//por ejemplo si el numero que genera ale es 1 se genera una multiplicacion.
		var ale = aleat(1,2);
		var e = aleat(1,15);
		if (ale == 1) {
			mate = new TriviaMate();
			mate.init("*",e);
		}else if (ale == 2) {
			mate = new TriviaMate();
			mate.init("/",10);
		}
	}

	if (nivel == 3) {
		//genera un numero aleatorio para cambiar las operaciones.
		//por ejemplo si el numero que genera ale es 1 se genera una una operacion conbinada suma y resta.
		var ale =aleat(1,2);
		var e = aleat(2,10);
		if (ale == 1) {
			mate = new TriviaMate();
			mate.init("+-",e);
		}else if (ale == 2) {
			mate = new TriviaMate();
			mate.init("*/",e);
		}
	}

	//dependiendo el nivel se genera una operacion del archivo MathOper.js
	//devuelve un string que luego se pasa a enteros y flotantes.
	var oper = mate.pregunta+" "+"="+" "+mate.r;
	//el string que devuelve se separa y se almacena en un vector.
	preg = oper.split(" ");
	//crea los objetos tipo nube.
	creaObjetoNubes(ima);
	//varagea el vector num donde se almacenan todos los numeros de la operacion.
	randVector(num);
	// crea los objetos de tipo texto que van en la pisarra los numeros lo agarra del vector num.
	creaObjeto(num2);
	cont = num2.length;
}
// funcion draw que se pasa redibujando todo.
draw = function () {
	if (jugar) {
	// se dibuja el fondo y la pizarra.
	image(fondo,0,0,anchoL,altoL);
	image(pizarra,160,250,360,160);

	// se dibujan todos las nubes.
	for (var i = 0; i < ima.length; i++) {
		ima[i].dibuja();
	}

	for (var i = 0; i < num2.length; i++) {
		num2[i].dibuja();
	}
		//aqui guardo el tiempo total en hacer las operaciones.
		if (termino == 0) {
			crono.detener();
			var tiempo = document.getElementById("crono").innerText;
			mostrarAlerta =true;
			alerta ="Has Terminado la Partida en: "+tiempo; //texto mostrado como alerta
			xAlert =150;
			dibujarTextos();
			guardarPunteo(3000,tiempo,"nivel",null);
			jugar = false;
		}
	// aqui valido cuando se terminan de arrastrar todos los numeros.
		if (cont == 0) {
			// me devuelve el resultado de la operacion.
			 var a = verificaOp(ima);
			 // comparo si lo que esta despues del igual es igual a la respuesta.
			 if (ima[ima.length - 1].text == a) {
			 	//le resto uno a la variable que va restando los 10 intentos.
			 	termino -=1;
			 	//reprodusco el sonido de muybien
			 	var v = document.getElementById("exito");
       			v.play();
       			//reinicio las variables para generar otra operacion 
       			reinicio();
			 }else{
			 	// si no es correcta la operacion reinicia la variables y emite sonido de error.
			 	reinicio();
			 	var v = document.getElementById("error");
       			v.play();
			 }
		}
	}
};
// se activa esta funcion cuando se le hace click en los objetos
void mouseClicked(){
// activa el evento dragged para arrastrar
	draged = true;
	for (var i = 0; i < num2.length; i++) {
		// recorre todo el vector de numeros y verifica a que objeto se le dio click.
		num2[i].click(mouseX,mouseY,num2[i]);
	}
};

// se llama esta funcion y se le pasa el objeto que se le da click para moverlo
arrastra = function(objeto){
	mouseDragged = function() {
		// el draged tiene que estar habilitado para poder activar el dragged.
		if (draged ) {
			//se arrastra en la pocision x Y y del mouse.
			objeto.x = mouseX;
			objeto.y = mouseY;
				
			//se recorre el vector de objetos de nubes.
		for (var i = 0; i < ima.length; i++) {
			// se verifica a que objeto de tipo nube se arrastrar el numero.
			if (objeto.x >= ima[i].x & objeto.x <= ima[i].x + 55 & objeto.y >= ima[i].y & objeto.y <= ima[i].y + 50 ) {
					//se verifica si la nube no tiene nada.
					if (ima[i].text == "") {
						//a esa nube se le asigna el objeto que vamos arrastrando.
						ima[i].text = objeto.tipo;
						//el objeto que vamos arrastrando le pasamos vacio para hacer el efecto que desaparece.
						objeto.text ="";
						//este contador sirve para saber cuando terminamos de llenar las nubes.
						cont -=1;
						//regresamos el draged a false cuando agamos click en otro numero se vuelve activar.
						draged = false;
					}else{
						//si ya hay algo dentro de la nube que arrastramos, regresa a su lugar y su tamaño.
						objeto.x = posX;
						objeto.y = posY;
						objeto.size = 30;
					}
				}		
			}	
		}
	}	
};

// se llama esta funcion para verificar la operacion
verificaOp = function(ima){
	//se recorre el vector de objetos de nubes dependiendo los operando se opera y se retorna la respuesta.
	for (var i = 0; i < ima.length; i++) {
		//si se encuentra una division y una multiplicacion operamos en ese orden.
		if (ima[i].text == "/" & ima[i + 2].text == "*") {
			res = ima[i - 1].text / ima[i+1].text;
			r = res * ima[i + 3].text;
			return r;
		//si se encuentra una multipllicacion y division operamos en ese orden.
		}else if (ima[i].text == "*" & ima[i + 2].text == "/") {
			res = ima[i - 1].text * ima[i+1].text;
			r = res / ima[i + 3].text;
			return r;
			//si se encuentra un suma y una resta se opera en ese orden.
		}else if (ima[i].text == "+" & ima[i + 2].text == "-") {
			res = ima[i - 1].text + ima[i+1].text;
			r = res - ima[i + 3].text;
			return r;
			//si se encuentra una resta y una suma se opera en ese orden.
		}else if (ima[i].text == "-" & ima[i + 2].text == "+") {
			res = ima[i - 1].text - ima[i+1].text;
			r = res + ima[i + 3].text;
			return r;
			// si solo se encuentra la suma se opera.
		}else if (ima[i].text == "+") {
			r = ima[i-1].text + ima[i+1].text;
			return r;
			// si solo se encuentra una resta se opera.
		}else if (ima[i].text == "-") {
			r = ima[i-1].text - ima[i+1].text;
			return r;
			//si solo se encuentra una multiplicacion se opera.
		}else if (ima[i].text == "*") {
			r = ima[i-1].text * ima[i+1].text;
			return r;
			//si solo se encuentra una division se opera.
		}else if (ima[i].text == "/") {
			r = ima[i-1].text / ima[i+1].text;
			return r;
		}
		
	}
	
};
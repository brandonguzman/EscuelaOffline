
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
var movido = false;

// cargo la imagen de la nube


void setup(){
	//ancho y alto del lienzo
	size(anchoL,altoL);
	//se cargan las imagenes de fondo
	fondo = new PImage();
	fondo = loadImage("/static/img/Math-math/fondo.png");
	fondo2 = new PImage();
	fondo2 = loadImage("/static/img/Math-math/fondo2.png");
	fondo3 = new PImage();
	fondo3 = loadImage("/static/img/Math-math/fondo3.png");
	pizarra = new PImage();
	pizarra = loadImage("/static/img/Math-math/pizarra.jpg");
	nube = new PImage(); 
	nube = loadImage("/static/img/Math-math/nube.png");
	check = new PImage(); 
	check = loadImage("/static/img/Math-math/check.png");
	mala = new PImage(); 
	mala = loadImage("/static/img/Math-math/mala.png");
	fin = new PImage(); 
	fin = loadImage("/static/img/Math-math/fin.png");
	
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
    x2 = 190; y2 =260;
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
		image(fin,0,0,anchoL,altoL);
		fill(250,142,242); stroke(250);
		rect(0,180,710,50);
		fill(0);
		textSize(20);
		text(alerta, xAlert, 210);
		mostrarAlerta = false;
		stroke(0);
	}
}

// constructor para crear los objetos nube
function nubes(imagen,text,x,y,an,lar){
	this.imagen = imagen;
	this.text = text;
	this.x = x;
	this.y = y;
	this.an = an;
	this.lar = lar;

}
// metodo para dibujar las nubes
nubes.prototype.dibuja = function() {
	image(this.imagen,this.x,this.y,this.an,this.lar);
	fill(0);
	textSize(25);
	text(this.text,this.x + 20 ,this.y + 40);
};
// constructor para crear los objetos de tipo texto los operandos.
function texto(text,tipo,x,y,size,color){
	this.text = text;
	this.tipo = tipo;
	this.x = x;
	this.y = y;
	this.size = size;
	this.color = color;
}
// metodo para dibujar el los objetos de texto
texto.prototype.dibuja = function(){
	fill(this.color);
	textSize(this.size);
	text(this.text,this.x,this.y);
};
// se valida a que objeto se le dio click
texto.prototype.click = function(x,y,objeto){
	if (x > this.x  & x < this.x + 25 & y > this.y - 23 & y < this.y ) {
		// al hacer click en los objetos se accede a la propiedad de tamano hace el efecto de crecer 
		// el texto seleccionaldo.
		objeto.size = 27;
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
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}	
	}else if (i == 2) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}else if (i == 3) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}else if (i == 4) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}else if (i == 5) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}else if (i == 6) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}else if (i == 7) {
		if (nivel == 2 | nivel == 3) {x2 +=80; y2 =y2;}else{x2 +=55; y2 =y2;}
	}
		vec[i] = new texto(num[i],num[i],x2,y2,25,255);
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
			vec[i] = new nubes(nube,"+",x,y,tamaño,tamaño);
		}else if (preg[i] == "-") {
			vec[i] = new nubes(nube,"-",x,y,tamaño,tamaño);
		}else if (preg[i] == "*") {
			vec[i] = new nubes(nube,"*",x,y,tamaño,tamaño);
		}else if (preg[i] == "/") {
			vec[i] = new nubes(nube,"/",x,y,tamaño,tamaño);
		}else if (preg[i] == "=") {
			vec[i] = new nubes(nube,"=",x,y,tamaño,tamaño);
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
			vec[i] = new nubes(nube,"",x,y,tamaño,tamaño);
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
	// se dibuja el fondo y la pizarra de pendiendo el contador cambia de imagen.
	if (termino == 10 | termino == 9 | termino == 4 | termino == 3) {
		image(fondo,0,0,anchoL,altoL);
		image(pizarra,150,150,395,190);
	}else if (termino == 8 |termino ==7 | termino ==2) {
		image(fondo2,0,0,anchoL,altoL);
		image(pizarra,150,150,395,190);
	}else if (termino == 6 | termino == 5 | termino ==1) {
		image(fondo3,0,0,anchoL,altoL);
		image(pizarra,150,150,395,190);
	}

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
			alerta ="Has terminado la Partida en: "+tiempo; //texto mostrado como alerta
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
       			image(check,300,220,70,60);
       			jugar = false;
       			window.setTimeout(function(){
       			//reinicio las variables para generar otra operacion 
       				reinicio();
       				jugar = true;
       			},2000);
       			
       			
			 }else{
			 	// si no es correcta la operacion reinicia la variables y emite sonido de error.
			 	var v = document.getElementById("error");
       			v.play();
       			image(mala,300,220,70,60);
       			jugar = false;
			 	window.setTimeout(function(){
       				//reinicio las variables para generar otra operacion 
       				reinicio();
       				jugar = true;
       			},2000);
			 	
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
			objeto.size = 27;

			//cuando se llega a las nubes se pone el color negro
			for (var i = 0; i < ima.length; i++) {
				if (objeto.x >= ima[i].x & objeto.x <= ima[i].x + 55 & objeto.y >= ima[i].y & objeto.y <= ima[i].y + 70 ) {
					objeto.color = 0;	
				}
			}
			//solamente si se sale del lienzo canvas
			if (objeto.x >610) {
				objeto.x = 610;
			}else if (objeto.y < 30) {
				objeto.y = 30;
			}

		}
	}

mouseReleased = function() {		
			//se recorre el vector de objetos de nubes.
		for (var i = 0; i < ima.length; i++) {
			// se verifica a que objeto de tipo nube se arrastrar el numero.
			if (objeto.x >= ima[i].x & objeto.x <= ima[i].x + 55 & objeto.y >= ima[i].y & objeto.y <= ima[i].y + 70 ) {
					
				movido = true;
					//se verifica si la nube no tiene nada.
					if (ima[i].text == "" & objeto.text != "" | ima[i].text == "" & objeto.text == "0" ) {
						//a esa nube se le asigna el objeto que vamos arrastrando.
						ima[i].text = objeto.tipo;
						//el objeto que vamos arrastrando le pasamos vacio para hacer el efecto que desaparece.
						objeto.text ="";
						//este contador sirve para saber cuando terminamos de llenar las nubes.
						cont -=1;
						//regresamos el draged a false cuando agamos click en otro numero se vuelve activar.
						draged = false;
						// se comprueba lo que se arrastra es flotante crese la nube
						if (ima[i] != "") {
							if (objeto.tipo % 1 !=0) {
								ima[i].an = tamaño + 40;
								//se incrementa la x de las nubes siguiente si las hay.
								for (var j = i; j < ima.length; j++) {
									ima[j + 1 ].x += 30;
								}	
						    }
						}
						
						
					}else{
						//si ya hay algo dentro de la nube que arrastramos, regresa a su lugar y su tamaño.
						objeto.x = posX;
						objeto.y = posY;
						objeto.size = 27;
						objeto.color = 255;
						}
				}	
			}
				// si sueltan fuera de las nubes regresa al numero a su lugar.
				if (movido) {
					movido = false;
				}else{
					objeto.x = posX;
					objeto.y = posY;
					objeto.size = 27;
					objeto.color = 255;
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
			if (r % 1 !=0) {
				r = r.toFixed(2);
			}
			return r;
		//si se encuentra una multipllicacion y division operamos en ese orden.
		}else if (ima[i].text == "*" & ima[i + 2].text == "/") {
			res = ima[i - 1].text * ima[i+1].text;
			r = res / ima[i + 3].text;
			if (r % 1 !=0) {
				r = r.toFixed(2);	
			}
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
			if (r % 1 !=0) {
				r = r.toFixed(2);
			}
			return r;
		}	
	}	
};
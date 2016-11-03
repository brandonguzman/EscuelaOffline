void setup(){
	size(650, 500);
	fondo = new PImage();
	fondo = loadImage("/static/img/ahorcado/fondo.jpg");
	fin = new PImage();
	fin = loadImage("/static/img/ahorcado/fin.png");
	fondo2 = new PImage();
	fondo2 = loadImage("/static/img/ahorcado/fondo2.gif");
	feliz = new PImage();
	feliz = loadImage("/static/img/ahorcado/feliz.png");
}
// variables globales para los objetos
var ejeX = 70;
var ejeY = 300;
var ancho = 50;
var alto = 45;
var gene = true;
var miVar;
var jugar = false;
var nivel;
var genera;
var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var abc = new Array(26);
var alerta = "";
var xAlert = 0;
var mostrarAlerta = false;


eligio = function () {
        nivel = document.getElementById('nivel').value; 
        clickDibuja();
        jugar = true;

};

var ahorcado = function(x,y){
	this.x = x;
	this.y = y;

};

var fichas = function(x,y,letra,ancho,alto,r,g,b) {
	this.x = x;
	this.y = y;
	this.letra = letra;
	this.ancho = ancho;
	this.alto = alto;
	this.r = r;
	this.g = g;
	this.b = b;
	
};
var puntuacion = function(nivel,NoIntentos,punteo){
    this.nivel = nivel;
    this.NoIntentos = NoIntentos;
    this.punteo = punteo;
}; 

puntuacion.prototype.dibuja = function(){
	fill(28,3,250);
    textSize(25);
    rect(0,0,650,30);
    fill(255);
    text("Level:"+this.nivel+ "    " +"No. Attempts:"+this.NoIntentos+"   "+"points:"+this.punteo,100,20);
};

fichas.prototype.dibuja = function(){
	//compara cuando se haya completado la palabra y genera el color blanco para las fichas
     if (miVar == genera.elegida) {
	 	this.r = 255; this.g = 255; this.b = 255;
	 }
	 if (punteo.NoIntentos == 0 ) {
	 	this.r = 255; this.g = 255; this.b = 255;
	 	
	 }

    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.ancho,this.alto);
    var tex = this.letra;
	fill(0);
    textSize(30);
    text(tex,this.x - 10,this.y + 5);

};

// funcion para comprobar a que objeto se le dio click.
fichas.prototype.click = function(x,y,let){
	
	if (x > this.x - 25 & x < this.x + 25 & y > this.y - 23 & y < this.y + 20) {
		this.buscaLetra(let.letra);
		miVar = genera.respuesta.join('');
	}
};

// funcion para verificar si la letra que se le dio click es la correcta
fichas.prototype.buscaLetra = function(letra) {
	for (var i = 0; i < preg.length; i++) {
		if (letra == preg[i] ) {
			genera.pregunta[i] =letra;
			genera.respuesta[i] = letra;
			var aux = i;
		}
	}
	// esto es solo para cambiar el color del objeto cuando se le da click en el correcto y produce sonido.
	if (aux >= 0) {
		if (this.r == 255 & this.g == 255 & this.b == 255 ) {
			this.r = 200;this.g = 200;this.b = 100;
			var v = document.getElementById("exito");
       		v.play();
        	punteo.punteo +=5;
    	}
	// esto es solo para cambiar el color del objeto cuando se le da click en el incorrecto y produce sonido.	
	}else{
		if (this.r == 255 & this.g == 255 & this.b == 255 ) {
		this.r = 255;this.g = 0;this.b = 0;
		var v = document.getElementById("error");
        v.play();
        punteo.NoErrores +=1;
        punteo.NoIntentos -=1;        
       		if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }
        }
	}
};

ahorcado.prototype.palo = function(){
	fill(0);
	rect(this.x + 350,this.y - 50+ 40,10,130);
};

ahorcado.prototype.palo2 = function(){
	fill(0);
	rect(this.x  + 350,this.y - 20 ,100,10);
};

ahorcado.prototype.lazo = function(){
	fill(0);
	line(this.x + 420,this.y - 20,this.x + 420,this.y + 30);
};

ahorcado.prototype.cabeza = function(){
	fill(255);
	ellipse(this.x + 420,this.y + 30,30,30);
};

ahorcado.prototype.cuerpo = function(){
	fill(0);
	line(this.x + 420,this.y + 45,this.x + 420,this.y + 100);
};

ahorcado.prototype.brazos = function(){
	fill(0);
	line(this.x + 420,this.y + 55,this.x + 380,this.y + 70);
	line(this.x + 420,this.y + 55,this.x + 460,this.y + 70);
};
ahorcado.prototype.piernas = function(){
	fill(0);
	//piernas
	line(this.x + 420,this.y + 100,this.x + 390,this.y + 120);
	line(this.x + 420,this.y + 100,this.x + 450,this.y + 120);
};
ahorcado.prototype.ojos = function(){
	fill(0);
	//ojos
	line(this.x + 410,this.y + 23 ,this.x + 415,this.y + 30);
	line(this.x + 415 ,this.y + 23 ,this.x + 410,this.y + 30);

	line(this.x + 425 ,this.y + 23 ,this.x + 430,this.y + 30);
	line(this.x + 430 ,this.y + 23 ,this.x + 425,this.y + 30);
};

function dibujarTextos(img){
	fill(100,100,150);
	textSize(16);
	if( mostrarAlerta ){
		image(img,0,0,650,503);
		fill(250,142,242); stroke(250);
		rect(0,180,710,50);
		fill(0);
		textSize(20);
		text(alerta, xAlert, 210);
		mostrarAlerta = false;
		stroke(0);
	}
}
// funcion para crear todos los objetos
creaobjeto = function(X, Y){
	for (var i = 0; i <= 25 ; i++) {
		// comprobaciones para sumar las pocisiones de los objetos.
		if (i > 0 & i <=8) {
			X += 60;
		}else if (i == 9) {
			X = ejeX;
			Y = ejeY + 60;	 
		}else if (i > 9 & i <= 17) {
			X += 60;
			Y = ejeY + 60;
		}else if (i == 18) {
			X = ejeX;
			Y = ejeY + 120;
		}else if (i > 18 & i <= 26) {
			X += 60;
			Y = ejeY + 120;
		}

		abc[i] = new fichas(X,Y, abecedario[i], ancho ,alto,255,255,255);
		}
	};	

 var clickDibuja = function() {
	// creando los objetos.
	creaobjeto(ejeX,ejeY);
	gene = true;
	genera = new palabras();
	punteo = new puntuacion(nivel,7,0);
	ahorca = new ahorcado(100,50);

};



draw = function(){
	if (jugar) {
	image(fondo,0,0,650,500);
	teclado();
	punteo.dibuja();


	// se genera una nueva palabra
	if (gene) {
        genera.generar(nivel);
        gene = false;          
    } 
    //se comprueba si la palabra que se va formando es igual a la que se eligio de las palabras.
    if (miVar == genera.elegida) {
    	genera.pregunta = "";
    	mostrarAlerta =true;
		alerta = genera.elegida+" !!Correcto llevas "+punteo.punteo+" Puntos!!"; //texto mostrado como alerta
		xAlert =200;
		dibujarTextos(feliz);

    	jugar = false;
    	window.setTimeout(function(){
       		jugar = true;
       		},3000);

    	punteo.NoIntentos = 7;
	 	genera.cont += 1;
	 	gene = true;
	 }
	
// comprueba donde va el numero de intentos y va dibujando el ahorcado
        if (punteo.NoIntentos == 6) {
        	ahorca.palo();
        }if (punteo.NoIntentos == 5) {
        	ahorca.palo();
        	ahorca.palo2();
        }if (punteo.NoIntentos == 4) {
        	ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        }if (punteo.NoIntentos == 3) {
        	ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        	ahorca.cabeza();
        	ahorca.ojos();
        }if (punteo.NoIntentos == 2) {
        	ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        	ahorca.cabeza();
        	ahorca.ojos();
        	ahorca.cuerpo();
        }if (punteo.NoIntentos == 1) {
        	ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        	ahorca.cabeza();
        	ahorca.cuerpo();
        	ahorca.ojos();
        	ahorca.brazos();
        }if (punteo.NoIntentos == 0) {
        	ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        	ahorca.cabeza();
        	ahorca.cuerpo();
        	ahorca.brazos();
        	ahorca.ojos();
        	ahorca.piernas();

        	// se compara cuando se llega a cero es que se ahorco
        	genera.pregunta = "";
    		mostrarAlerta =true;
			alerta ="Incorrecto la palabra correcta era: "+genera.elegida; //texto mostrado como alerta
			xAlert =150;
			dibujarTextos(fondo2);
			ahorca.palo();
        	ahorca.palo2();
        	ahorca.lazo();
        	ahorca.cabeza();
        	ahorca.cuerpo();
        	ahorca.brazos();
        	ahorca.ojos();
        	ahorca.piernas();
    		jugar = false;
    		window.setTimeout(function(){
       			jugar = true;
       		},3000);

        	punteo.NoIntentos = 7;
        	punteo.punteo = 0;
        	genera.cont += 1;
        	gene = true;
        }

	 fill(250,254,4);
	 textSize(30);
	 strokeWeight(2);
     text(genera.pregunta,20,200);


      if (genera.cont == genera.palabras.length) {
      		mostrarAlerta =true;
			alerta ="Has terminado la Partida con: "+punteo.punteo+" puntos"; //texto mostrado como alerta
			xAlert =150;
			dibujarTextos(fin);
			jugar = false;
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar = false;
            
        }
    if (genera.cont == genera.palabras2.length) {
    		mostrarAlerta =true;
			alerta ="Has terminado la Partida con: "+punteo.punteo+" puntos"; //texto mostrado como alerta
			xAlert =150;
			dibujarTextos(fin);
			jugar = false;
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar = false;   
        }
     if (genera.cont == genera.palabras3.length) {
     		mostrarAlerta =true;
			alerta ="Has terminado la Partida con: "+punteo.punteo+" puntos"; //texto mostrado como alerta
			xAlert =150;
			dibujarTextos(fin);
			jugar = false;
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar = false;
            
        }    
 }
};

// funcion para dibujar el teclado 
teclado = function(){
	for (var i = 0; i <= 25; i++) {
		abc[i].dibuja();
	}
};

// evento mouse click para comprobar los click en los objetos
	mouseClicked = function() {
		for (var i = 0; i <= 25; i++) {
			abc[i].click(mouseX,mouseY,abc[i]);
		}
	}






//Dibuja el tamaño del lienzo en pixeles 
size(580, 420);

var jugar;
var nivel;
var crono;
var tCasilla;
var casilla;
var cont;
var alerta;
var indice;
var auxRColor;
var auxGColor;
var auxBColor[];
var block;
var creaOb;
var auxiliar;

var sopaM;
var listaPalabrasBuscar;
var diccionarioPalabras;
var soup1;
var soup2;
var soup3;
var soupPalabras1;
var soupPalabras2;
var soupPalabras3;

reiniciaVariables = function(){
	jugar = false;
	nivel;
	crono = null;
	tCasilla = 31;
	casilla = new Array(144 - 1);
	cont = 0;
	alerta = [];
	indice = [];
	auxRColor = [];
	auxGColor = [];
	auxBColor = [];
	block = false;
	creaOb = true;
	auxiliar;

	sopaM = [];
	listaPalabrasBuscar = [];
	diccionarioPalabras = [];
	soup1 = new Array(8 - 1);
	soup2 = new Array(5 - 1);
	soup3 = new Array(5 - 1);
	soupPalabras1 = new Array(10 - 1);
	soupPalabras2 = new Array(10 - 1);
	soupPalabras3 = new Array(10 - 1);	
}

eligio = function () {
	reiniciaVariables();

	nivel = document.getElementById('nivel').value; 
    jugar = true;

    if( crono ){
        crono.kill();
        crono = false;
    }

    crono = new Cronometro("crono"); 
    crono.iniciar();
	
    creaOb = true;
	llenaSoup(soupPalabras1, soupPalabras2, soupPalabras3, soup1, soup2, soup3);
	creaNivel();
}

clickDibuja = function(){
	for(var i = 0; i < 144; i++)
		casilla[i].inicio();
}

//Objeto Casilla
Casilla = function(x, y, tCasilla, letra, rColor, gColor, bColor){
	this.x = x;
	this.y = y;
	this.tCasilla = tCasilla;
	this.letra = letra;
	this.rColor = rColor;
	this.gColor = gColor;
	this.bColor = bColor;
};

//Metodo de dibujado de objeto casilla
Casilla.prototype.inicio = function(){
	stroke(255,255,255);
	fill(this.rColor, this.gColor, this.bColor);
	rect(this.x, this.y, this.tCasilla, this.tCasilla);
	
	fill(1, 26, 31);
	textSize(20);//25
	text(this.letra, this.x + 8, this.y + 25);
};

//Evento donde se crea la variable de las imagenes usadas
void setup(){
	Background = new PImage();
	Background = loadImage("/static/img/AlphabetSoup/background.png");
};

creaNivel = function(){
	//Generaa el nivel 1
	if(nivel == 1){
		randVector(soupPalabras1);
		randVector(soup1);
		sopaM = soup1[0].split("");
		creaListaPalabrasBuscar(soupPalabras1);
		diccionarioPalabras = soupPalabras1;
	}
	//Generaa el nivel 2
	else if(nivel == 2){
		randVector(soupPalabras2);
		randVector(soup2);
		sopaM = soup2[0].split("");
		creaListaPalabrasBuscar(soupPalabras2);
		diccionarioPalabras = soupPalabras2;
	}
	//Generaa el nivel 3
	else if(nivel == 3){
		randVector(soupPalabras3);
		randVector(soup3);
		sopaM = soup3[0].split("");
		creaListaPalabrasBuscar(soupPalabras3);
		diccionarioPalabras = soupPalabras3;
	};
}

creaListaPalabrasBuscar = function(soupPalabras){
	for(var i = 0; i < soupPalabras.length; i++){
		listaPalabrasBuscar.push({soupPalabras[i]});
	}
}

//Evento que dibuja el juego
draw = function (){
	if(jugar){
		background(63, 210, 206);
		image(Background, 0, 0);
		//Crea los objetoos de la casilla
		if(creaOb == true){
			creaObjeto(0,0,tCasilla);	
		};
		//Titulo
		fill(255,255,255);
		text("ENCUENTRA LAS 10 PALABRAS", 391, 18);
		/*Para Debug (Ayuda)
		for(var i = 0; i < alerta.length; i++){
			text(alerta[i] + "_ " + alerta.join("") + " " + indice[i] + " " + auxRColor[i] + " " + auxGColor[i]  + " " + auxBColor[i], 400, 100 + (i * 18));
		}*/
		//Dibuja el listado de las palabras a buscar en la sopa de letras
		for(var i = 0; i < 10; i++){
			text((i + 1) + " " + listaPalabrasBuscar[i], 410, (i + 2) * 30);
		}
		//Dibuja los objetos casilla
		clickDibuja();
		//Al llagar a los 10 aciertos se detiene el juego
		killJuego();
		//Se realisa la validación de de la palabra seleccionada en la sopa de letras
		for(var i = 0; i < diccionarioPalabras.length; i++)
			validarPalabara(i);

		if(mousePressed == false){
			alerta = [];
			indice = [];
			auxRColor = [];
			auxGColor = [];
			auxBColor = [];
		}
		//Inpide que los objetos se vuelvan a crear nuevamente
		creaOb = false;
		//Dibuja cuantas palabras correctas van encontradas
		textSize(12);
		fill(255);
		text("Palabras encontradas: " + cont, 10, 407);
	}
};

/*funcion que almacena las cordenadas X y Y de cada una de las casillas de la sopa de letras de 
matrix 12x12. */
creaObjeto = function (X, Y, tXY){
	var mult = 0;
	var auX = X;
	//ciclo que recorre el array casilla para almacenar las X y Y en los 144 objetos de las casillas.
	for(var i = 0; i <= 144-1; i++){
		//Recorre todos los objetos empezando de "i = 0" obiando todos los multiplos enteros ej (i >= 0 && i < 12...)	
		if(i > 12 * mult && i < (12 * mult)+12){
			X += tXY;	
		}
		//Recorre todos los objetos multiplos de 12 empezando a tomar encuneta desde el objeto 12 (i=12 , i=24, i=36...)
		else if(i == (12 * mult) + 12){
			X = auX;
			Y += tXY;
			//impide que se siga sumando el mult al haber menos de 144 objetos casillas.
			if(i < 144)
				mult++;
		}
		//Crea los 144 objetos con las cordenadas X y Y.
		casilla[i] = new Casilla(X, Y, tCasilla, sopaM[i], 255, 255, 255);
	}
}


//funcion que escanea los cuadrantes con valores x, y, y tamaño xy de la pieza
escanCasilla = function(casilla, i, tXY){	
	if(mouseX > casilla[i].x && mouseX < casilla[i].x + tXY && mouseY > casilla[i].y && mouseY < casilla[i].y + tXY){
		if(block == false){
			/*if Evita los errores con los colores copiados, evita que el color de seleccion 
			sea recopiado permitiendo que la casilla retorde a su color anterior antes de ser seleccionado*/
			if(casilla[i].bColor != 0){
				indice.push({i});
				alerta.push({casilla[i].letra});
				auxRColor.push({casilla[i].rColor});
				auxGColor.push({casilla[i].gColor});
				auxBColor.push({casilla[i].bColor});
			}
			
			block = true;
			casillaSelec(i);
		}
		//evita que se repita el guardado de variables asta que se camie de objeto
		else if(auxiliar != i){
			block = false;
		}
		auxiliar = i;	
    };
}

//funcion que valida si la palabra seleccionada en la sopa de letras es correcta
validarPalabara = function(i){
	if(alerta.join("") == diccionarioPalabras[i]){
		//alert(alerta.join(""));
		cont++;
		casillaCorrecto(indice);
		diccionarioPalabras.splice(i, 1);
		alerta = [];
		indice = [];
	}

	else{
		casillaError(indice);
	}
}
//Funcion que vuelve narana la casilla al seleccionarla
casillaSelec = function(i){
	casilla[i].rColor = 255;
	casilla[i].gColor = 201;
	casilla[i].bColor = 0;	
}
/*Funcion que devuelve el color anterior que tenia la casilla si esta no es 
parte de alguna palabra del diccionario*/
casillaError = function(indice){
	if(mousePressed == false){
		for(var i = 0; i < indice.length; i++){
			casilla[indice[i]].rColor = auxRColor[i];
			casilla[indice[i]].gColor = auxGColor[i];
			casilla[indice[i]].bColor = auxBColor[i];	
		}
	}
}
/*Funcion que vuelve verde el objeto casilla si este parte de una palabra del 
diccionario de palabras*/
casillaCorrecto = function(indice){
	for(var i = 0; i < indice.length; i++){
		casilla[indice[i]].rColor = 79;
		casilla[indice[i]].gColor = 222;
		casilla[indice[i]].bColor = 107;
	}	
}
//Evento que se activa la precionar el mouse y arrastrarlo
mouseDragged = function (){
	for(var i = 0; i < casilla.length; i++)
		escanCasilla(casilla, i, tCasilla);
}
/*Funcion que detiene el juego, el cronometro y envia la info del cronometro a la DB 
al haber encontrado las 10 palabras del diccionario*/
killJuego = function(){
	//Detiene el cronometro si se encuentran las 10 palabras
	if(cont == 10){
		crono.detener();
		crono.kill();
		var tiempo = document.getElementById("crono").innerText;
		guardarPunteo(3000,tiempo,"nivel",null);

		alert("YOU WIN");
		jugar = false;
	}
}
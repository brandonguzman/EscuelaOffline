//Dibuja el tamaño del lienzo de en pixeles 
size(500, 500);

//Variable Globales
var nivel; //variable que controla los niveles del juego
var juega = true;
var posiciones = [];
var crono = null;
var tiempo;

var jugar;
var blockGame = "";
var textNewPartida = "";
var movimiento = 0;
var tPieza; // Define el tamaño de cada pieza en alto y ancho
var cordenadasIIxII	= [
	{x: 0, y: 0}, 	{x: 250, y: 0},
	{x: 0, y: 250}, {x: 250, y: 250},
];

var cordenadasIIIxIII	= [
	{x: 0, y: 0}, 	{x: 167, y: 0},   {x: 334, y: 0},
	{x: 0, y: 167}, {x: 167, y: 167}, {x: 334, y: 167},
	{x: 0, y: 334}, {x: 167, y: 334}, {x: 334, y: 334},
];

var cordenadasIIIIxIIII	= [
	{x: 0, y: 0}, 	{x: 125, y: 0},   {x: 250, y: 0}, 	{x: 375, y: 0},
	{x: 0, y: 125}, {x: 125, y: 125}, {x: 250, y: 125}, {x: 375, y: 125},
	{x: 0, y: 250}, {x: 125, y: 250}, {x: 250, y: 250}, {x: 375, y: 250},
	{x: 0, y: 375}, {x: 125, y: 375}, {x: 250, y: 375}, {x: 375, y: 375},
];

void setup(){
	BarraMovs = new PImage();
	BarraMovs = loadImage("/static/img/Puzzle/barraMovs.png");

	BarraPunteo = new PImage();
	BarraPunteo = loadImage("/static/img/Puzzle/barraPunteo.png");
};

// funcion para iniciar el juego seleccionando un nivel
eligio = function () {
		tiempo = null;
        posiciones = [];
        juega = true;
        jugar = true;
        blockGame = "";
        textNewPartida = "";
        movimiento = 0;

        nivel = document.getElementById('nivel').value; 
        jugar = true; 

        if( crono )
        	crono.kill();
        crono = new Cronometro("crono"); 
        crono.iniciar();

        creaNivel();
}

var clickDibuja = function(){
	
	//Dibuja las piezas de los rompecabezas
	for (var i = 0; i < posiciones.length; i++) {
		drawPieza(posiciones[i]);
	};

}


//cear el atributo dibuja del objto pieza
var drawPieza = function(atributo){
	var x = atributo.x;
	var y = atributo.y;
	var ancho = atributo.ancho;
	var alto = atributo.alto;
	var numero = atributo.numero;
	var gColor = atributo.gColor;
	var rColor = atributo.rColor;
	var bColor = atributo.bColor;

	strokeWeight(8);
	fill(gColor, rColor, bColor); //6, 87, 71
	rect(x, y, ancho, alto);
	
	RcLetra = 1;
	GcLetra = 26;
	BcLetra = 31;

	fill(RcLetra, GcLetra, BcLetra);
	textSize(80);
	text(numero, x + 15, y + 100);
};

//Objeto que almacena los atributos del arreglo de objetos

var creaNivel = function(){
	//Crea las piezas desordenadas del rompecabezas de 2X2
	if(nivel == 1){
		tPieza = 250;
		//Desordena las cordenadas
		var rPuzzle = round(random(0, 10));
		randPuzzleIIxII(cordenadasIIxII, rPuzzle);
		//randVector(cordenadasIIxII);
		//Crea las piezas del rompecabezas conforme el numero de cordenadas del nivel
		for(var i = 1; i < cordenadasIIxII.length ; i++){
			posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: i, gColor: 12, rColor: 194, bColor: 172});
		};
		posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: cordenadasIIxII.length, gColor: 1, rColor: 26, bColor: 31});

		//Ingresa los valores desordenados de las cordenadas para las piezas del rompecabezas
		for(var i = 0; i < cordenadasIIxII.length; i++){
			posiciones[i].x = cordenadasIIxII[i].x;
			posiciones[i].y = cordenadasIIxII[i].y;
		};
	}

	//Crea las piezas desordenadas del rompecabezas de 3X3
	else if(nivel == 2){
		tPieza = 167;
		//Desordena las cordenadas
		randVector(cordenadasIIIxIII);
		//Crea las piezas del rompecabezas conforme el numero de cordenadas del nivel
		for(var i = 1; i < cordenadasIIIxIII.length ; i++){
			posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: i, gColor: 178, rColor: 7, bColor: 162});
		};
		posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: cordenadasIIIxIII.length, gColor: 1, rColor: 26, bColor: 31});

		//Ingresa los valores desordenados de las cordenadas para las piezas del rompecabezas
		for(var i = 0; i < cordenadasIIIxIII.length; i++){
			posiciones[i].x = cordenadasIIIxIII[i].x;
			posiciones[i].y = cordenadasIIIxIII[i].y;
		};
	}

	//Crea las piezas desordenadas del rompecabezas de 4X4
	else if(nivel == 3){
		tPieza = 125;
		//Desordena las cordenadas
		randVector(cordenadasIIIIxIIII);
		//Crea las piezas del rompecabezas conforme el numero de cordenadas del nivel
		for(var i = 1; i < cordenadasIIIIxIIII.length ; i++){
			posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: i, gColor: 52, rColor: 191, bColor: 226});
		};
		posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: cordenadasIIIIxIIII.length, gColor: 1, rColor: 26, bColor: 31});

		//Ingresa los valores desordenados de las cordenadas para las piezas del rompecabezas
		for(var i = 0; i < cordenadasIIIIxIIII.length; i++){
			posiciones[i].x = cordenadasIIIIxIIII[i].x;
			posiciones[i].y = cordenadasIIIIxIIII[i].y;
		};
	};

}


//Dibuja las posiciones de los objetos en el lienzo
draw = function(){
	if(jugar){

		background(255, 255, 100);

		//dibuja numero de movimientos
		clickDibuja();

		image(BarraMovs, 4, 4);

		textSize(12);
		fill(255,255,255);
		text("Movimientos: " + movimiento, 10,15);
		text(blockGame, 10, 28);
		text(textNewPartida, 10, 41);

		/*Reglas del nivel 1, se empieza con 10 puntos y se le resta uno por
		movimiento de pieza hasta quedar en 6 puntos minimos*/
		if(nivel == 1){
			/*																1 2
			Regla 1 del nivel 1, para ganar hay que odenar las piezas asi:  3 x 
			*/
			if(juega == true){
				if ((posiciones[0].x == 0) 	&& (posiciones[0].y == 0)
				&& (posiciones[1].x == 250) && (posiciones[1].y == 0)
				&& (posiciones[2].x == 0) 	&& (posiciones[2].y == 250)
				&& (posiciones[3].x == 250) && (posiciones[3].y == 250)) {
					blockGame = "¡Has ganado, inicia una nueva partida."; 

					killGame();	
				};
			};

		}

		else if(nivel == 2){
			/*																1 2 3
			Regla 1 del nivel 2, para ganar hay que odenar las piezas asi:  4 5 6
																			7 8 x
			*/
			if(juega == true){
				if ((posiciones[0].x == 0) 	&& (posiciones[0].y == 0)
				&& (posiciones[1].x == 167) && (posiciones[1].y == 0)
				&& (posiciones[2].x == 334) && (posiciones[2].y == 0)
				&& (posiciones[3].x == 0) 	&& (posiciones[3].y == 167)
				&& (posiciones[4].x == 167) && (posiciones[4].y == 167)
				&& (posiciones[5].x == 334) && (posiciones[5].y == 167)
				&& (posiciones[6].x == 0) 	&& (posiciones[6].y == 334)
				&& (posiciones[7].x == 167) && (posiciones[7].y == 334)
				&& (posiciones[8].x == 334) && (posiciones[8].y == 334)) {
					blockGame = "¡Has ganado, inicia una nueva partida.";
					
					killGame(); 	
				};
		
			};								
		}	

		else {
			/*																1  2  3  4
			Regla 1 del nivel 3, para ganar hay que odenar las piezas asi:  5  6  7  8
																			9  10 11 12
																			13 14 15 X
			*/
			if(juega == true){
				if ((posiciones[0].x == 0) 	 && (posiciones[0].y == 0)
				&& (posiciones[1].x == 125)  && (posiciones[1].y == 0)
				&& (posiciones[2].x == 250)  && (posiciones[2].y == 0)
				&& (posiciones[3].x == 375)  && (posiciones[3].y == 0)
				&& (posiciones[4].x == 0)    && (posiciones[4].y == 125)
				&& (posiciones[5].x == 125)  && (posiciones[5].y == 125)
				&& (posiciones[6].x == 250)  && (posiciones[6].y == 125)
				&& (posiciones[7].x == 375)  && (posiciones[7].y == 125)
				&& (posiciones[8].x == 0)    && (posiciones[8].y == 250)
				&& (posiciones[9].x == 125)  && (posiciones[9].y == 250)
				&& (posiciones[10].x == 250) && (posiciones[10].y == 250)
				&& (posiciones[11].x == 375) && (posiciones[11].y == 250)
				&& (posiciones[12].x == 0) 	 && (posiciones[12].y == 375)
				&& (posiciones[13].x == 125) && (posiciones[13].y == 375)
				&& (posiciones[14].x == 250) && (posiciones[14].y == 375)
				&& (posiciones[15].x == 375) && (posiciones[15].y == 375)) {
					blockGame = "¡Has ganado, inicia una nueva partida.";
					
					killGame();	
				};
		
			};
		};
	};
};

/*Activa el evento mouseClicked, se delimitan las posiciones x y y de cada una de las
piezas del rompecabezas, ejecuta la función que se encarga de dar mobimiento a las piezas*/
void mouseClicked() {
	if (juega == true) {

		//Escanea las 9 crodenadas del rompecabezas de 2x2
		if(nivel == 1){
			for (var i = 0; i < posiciones.length; i++) {
				escanCuadrante(cordenadasIIxII[i].x, cordenadasIIxII[i].y, tPieza, posiciones);	
			};

		}

		//Escanea las 9 crodenadas del rompecabezas de 3x3
		else if(nivel == 2){
			for (var i = 0; i < posiciones.length; i++) {
				escanCuadrante(cordenadasIIIxIII[i].x, cordenadasIIIxIII[i].y, tPieza, posiciones);	
			};

		}

		//Escanea las 16 crodenadas del rompecabezas de 4x4
		else if(nivel == 3){
			for (var i = 0; i < posiciones.length; i++) {
				escanCuadrante(cordenadasIIIIxIIII[i].x, cordenadasIIIIxIIII[i].y, tPieza, posiciones);	
			};

		};

	}

	else{
		textNewPartida = "¡Debes de iniciar una nueva partida para seguir jugando!";
		var v = document.getElementById("error");
        v.play();
	};
	
}

//funcion que escanea los cuadrantes con valores x, y, y tamaño xy de la pieza
var escanCuadrante = function(x , y, tXY, posiciones){
if(mouseX > x && mouseX < x + tXY && mouseY > y && mouseY < y + tXY){
    	mobPieza(x, y, tXY, posiciones);
    };
}

/*función que se encarga de comprobar la pieza actual y las vecinas para ver cual puede ser 
movida y luego realiza el cambio de x y y de la pieza en blanco y la cliqueada*/
var mobPieza = function(xMin, yMin, tXY, posiciones){
	var posActual = 0; //variable en donde se almacena el valor de la posición actual
	var AuxX = 0, AuxY = 0; //Variables auxliares donde se almacena x y y de la posición actual
	/*Variables en donde se almaceinan los valores
	de las piezas actuales y las vecinas (Actual, Izquierda, Derecha, Arriba y Abajo*/
	var posDerecha = 0, posIzquierda = 0, posArriba = 0, posAbajo = 0; 

	//Verifica que pieza esta en la posición actual
	for (var i = 0; i < posiciones.length; i++) {
		if(posiciones[i].x == xMin && posiciones[i].y == yMin){
			posActual = posiciones[i].numero;
		};	
	}

	//verifica que pieza esta en la posición de la izquierda
	for (var i = 0; i < posiciones.length; i++) {
		if(posiciones[i].x == xMin - tXY && posiciones[i].y == yMin){
			posIzquierda = posiciones[i].numero;
		};	
	}

	//verifica que pieza esta en la posición de la derecha
	for (var i = 0; i < posiciones.length; i++) {
		if(posiciones[i].x == xMin + tXY && posiciones[i].y == yMin){
			posDerecha = posiciones[i].numero;
		};	
	}

	//verifica que pieza esta en la posición de arriba
	for (var i = 0; i < posiciones.length; i++) {
		if(posiciones[i].x == xMin && posiciones[i].y == yMin - tXY){
			posArriba = posiciones[i].numero;
		};	
	}

	//verifica que pieza esta en la posición de abajo
	for (var i = 0; i < posiciones.length; i++) {
		if(posiciones[i].x == xMin && posiciones[i].y == yMin + tXY){
			posAbajo = posiciones[i].numero;
		};	
	}

	if(posActual == posiciones.length){
		var v = document.getElementById("error");
        v.play();
	}

	//Cambia la pieza actual por la de la Izquierda y viceversa
	else if(posIzquierda == posiciones.length){
		//Se reinicia la variable con el valor numerico de la posición del arreglo de la pieza vacia
		posIzquierda = posiciones.length - 1;
		//Copia las cordenadas x y y de la pieza actual a las variables auxiliares
		AuxX = posiciones[posActual - 1].x;
		AuxY = posiciones[posActual - 1].y;
		//Traslada valores x y y de la pieza que se encuentra a la derecha de la actual
		posiciones[posActual - 1].x = posiciones[posIzquierda].x;
		posiciones[posActual - 1].y = posiciones[posIzquierda].y;
		//Traslada valores de la posición actual a pieza que se encuentra a la derecha
		posiciones[posIzquierda].x = AuxX;
		posiciones[posIzquierda].y = AuxY;
		movimiento++;	
	}

	//Cambia la pieza actual por la de la Derecha y viceversa
	else if(posDerecha == posiciones.length){
		//Se reinicia la variable con el valor numerico de la posición del arreglo de la pieza vacia
		posDerecha = posiciones.length - 1;
		//Copia las cordenadas x y y de la pieza actual a las variables auxiliares
		AuxX = posiciones[posActual - 1].x;
		AuxY = posiciones[posActual - 1].y;
		//Traslada valores x y y de la pieza que se encuentra a la derecha de la actual
		posiciones[posActual - 1].x = posiciones[posDerecha].x;
		posiciones[posActual - 1].y = posiciones[posDerecha].y;
		//Traslada valores de la posición actual a pieza que se encuentra a la derecha
		posiciones[posDerecha].x = AuxX;
		posiciones[posDerecha].y = AuxY;
		movimiento++;
	}

	//Cambia la pieza actual por la de Arriba y viceversa
	else if(posArriba == posiciones.length){
		//Se reinicia la variable con el valor numerico de la posición del arreglo de la pieza vacia
		posArriba = posiciones.length - 1;
		//Copia las cordenadas x y y de la pieza actual a las variables auxiliares
		AuxX = posiciones[posActual - 1].x;
		AuxY = posiciones[posActual - 1].y;
		//Traslada valores x y y de la pieza que se encuentra a la abajo de la actual
		posiciones[posActual - 1].x = posiciones[posArriba].x;
		posiciones[posActual - 1].y = posiciones[posArriba].y;
		//Traslada valores de la posición actual a pieza que se encuentra abajo
		posiciones[posArriba].x = AuxX;
		posiciones[posArriba].y = AuxY;
		movimiento++;
	}	

	//Cambia la pieza actual por la de Abajo y viceversa
	else if(posAbajo == posiciones.length){
		//Se reinicia la variable con el valor numerico de la posición del arreglo de la pieza vacia
		posAbajo = posiciones.length - 1;
		//Copia las cordenadas x y y de la pieza actual a las variables auxiliares
		AuxX = posiciones[posActual - 1].x;
		AuxY = posiciones[posActual - 1].y;
		//Traslada valores x y y de la pieza que se encuentra a la abajo de la actual
		posiciones[posActual - 1].x = posiciones[posAbajo].x;
		posiciones[posActual - 1].y = posiciones[posAbajo].y;
		//Traslada valores de la posición actual a pieza que se encuentra abajo
		posiciones[posAbajo].x = AuxX;
		posiciones[posAbajo].y = AuxY;
		movimiento++;
	};
	
	//Debug para comprobación y depuración
	//alert("Arriba: " + posArriba + ", Abajo: " + posAbajo + ", Izquierda: " + posIzquierda + ", Derecha: " + posDerecha + ", Actual: " + posActual);   	
}

var killGame = function(){
	juega = false;
	jugar = false;
	//posiciones[0].x = 1;
	crono.detener();
	crono.kill();

	tiempo = document.getElementById("crono").innerText;
	guardarPunteo(5000, tiempo,"nivel",null);

	image(BarraPunteo, 4, 180 , 494, 150);
	textSize(28);
	fill(33, 97, 140);
	text("TÚ TIEMPO FUE DE: " + tiempo, 60, 270);
	
}

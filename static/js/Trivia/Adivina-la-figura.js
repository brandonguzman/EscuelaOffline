var resultOK = 0;
var nivel = 0;
var escribir = [];//Variable en donde se van almacenando las teclas precionadas en array
var cadena; 
var intentos = 10;
var aciertos = 0;
var errores = 0;
var punteo = 0;
var alerta;
var z = [{i: loadImage("/static/img/Trivia/gameOver.png")}];
var gameOver = false;
var juega = false;
var rd = false;
/*Array de objetos donde se almacena los atributos de imagen y array de objetos de la
imagen que se muestra en pantalla, se utlizara el formato JASON para hacer comparaciones
con el if*/
var nivel1Vector = [
	{ruta: loadImage("/static/img/Trivia/lv1/bed.png"),   nombreObjeto: "BED",   palabra: JSON.stringify([{t: "B"}, {t: "E"}, {t: "D"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/box.png"),   nombreObjeto: "BOX",   palabra: JSON.stringify([{t: "B"}, {t: "O"}, {t: "X"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/CAT.png"),   nombreObjeto: "CAT",   palabra: JSON.stringify([{t: "C"}, {t: "A"}, {t: "T"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/DOG.png"),   nombreObjeto: "DOG",   palabra: JSON.stringify([{t: "D"}, {t: "O"}, {t: "G"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/CAR.png"),   nombreObjeto: "CAR",   palabra: JSON.stringify([{t: "C"}, {t: "A"}, {t: "R"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/PEN.png"),   nombreObjeto: "PEN",   palabra: JSON.stringify([{t: "P"}, {t: "E"}, {t: "N"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/home.png"),  nombreObjeto: "HOUSE", palabra: JSON.stringify([{t: "H"}, {t: "O"}, {t: "U"}, {t: "S"}, {t: "E"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/CLOCK.png"), nombreObjeto: "CLOCK", palabra: JSON.stringify([{t: "C"}, {t: "L"}, {t: "O"}, {t: "C"}, {t: "K"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/RULER.png"), nombreObjeto: "RULER", palabra: JSON.stringify([{t: "R"}, {t: "U"}, {t: "L"}, {t: "E"}, {t: "R"}])},
	{ruta: loadImage("/static/img/Trivia/lv1/CHAIR.png"), nombreObjeto: "CHAIR", palabra: JSON.stringify([{t: "C"}, {t: "H"}, {t: "A"}, {t: "I"}, {t: "R"}])},
];

var nivel2Vector = [
	{ruta: loadImage("/static/img/Trivia/lv2/YELLOW.png"),    nombreObjeto: "YELLOW",    palabra: JSON.stringify([{t: "Y"}, {t: "E"}, {t: "L"}, {t: "L"}, {t: "O"}, {t: "W"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/TOOLBOX.png"),   nombreObjeto: "TOOLBOX",   palabra: JSON.stringify([{t: "T"}, {t: "O"}, {t: "O"}, {t: "L"}, {t: "B"}, {t: "O"}, {t: "X"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/SNOWMAN.png"),   nombreObjeto: "SNOWMAN",   palabra: JSON.stringify([{t: "S"}, {t: "N"}, {t: "O"}, {t: "W"}, {t: "M"}, {t: "A"}, {t: "N"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/PRINTER.png"),   nombreObjeto: "PRINTER",   palabra: JSON.stringify([{t: "P"}, {t: "R"}, {t: "I"}, {t: "N"}, {t: "T"}, {t: "E"}, {t: "R"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/PRINCESS.png"),  nombreObjeto: "PRINCESS",  palabra: JSON.stringify([{t: "P"}, {t: "R"}, {t: "I"}, {t: "N"}, {t: "C"}, {t: "E"}, {t: "S"}, {t: "S"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/UMBRELLA.png"),  nombreObjeto: "UMBRELLA",  palabra: JSON.stringify([{t: "U"}, {t: "M"}, {t: "B"}, {t: "R"}, {t: "E"}, {t: "L"}, {t: "L"}, {t: "A"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/BACKPACK.png"),  nombreObjeto: "BACKPACK",  palabra: JSON.stringify([{t: "B"}, {t: "A"}, {t: "C"}, {t: "K"}, {t: "P"}, {t: "A"}, {t: "C"}, {t: "K"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/ALPHABET.png"),  nombreObjeto: "ALPHABET",  palabra: JSON.stringify([{t: "A"}, {t: "L"}, {t: "P"}, {t: "H"}, {t: "A"}, {t: "B"}, {t: "E"}, {t: "T"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/FLAVORING.png"), nombreObjeto: "FLAVORING", palabra: JSON.stringify([{t: "F"}, {t: "L"}, {t: "A"}, {t: "V"}, {t: "O"}, {t: "R"}, {t: "I"}, {t: "N"}, {t: "G"}])},
	{ruta: loadImage("/static/img/Trivia/lv2/GEOGRAPHY.png"), nombreObjeto: "GEOGRAPHY", palabra: JSON.stringify([{t: "G"}, {t: "E"}, {t: "O"}, {t: "G"}, {t: "R"}, {t: "A"}, {t: "P"}, {t: "H"}, {t: "Y"}])},
];

var nivel3Vector = [
	{ruta: loadImage("/static/img/Trivia/lv3/BATHROOM.png"), 	  nombreObjeto: "BATHROOM",     palabra: JSON.stringify([{t: "B"}, {t: "A"}, {t: "T"}, {t: "H"}, {t: "R"}, {t: "O"}, {t: "O"}, {t: "M"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/PLATYPUS.png"), 	  nombreObjeto: "PLATYPUS",     palabra: JSON.stringify([{t: "P"}, {t: "L"}, {t: "A"}, {t: "T"}, {t: "Y"}, {t: "P"}, {t: "U"}, {t: "S"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/TOOTHPAST.png"), 	  nombreObjeto: "TOOTHPAST",    palabra: JSON.stringify([{t: "T"}, {t: "O"}, {t: "O"}, {t: "T"}, {t: "H"}, {t: "P"}, {t: "A"}, {t: "S"}, {t: "T"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/BUTTERFLY.png"),    nombreObjeto: "BUTTERFLY",    palabra: JSON.stringify([{t: "B"}, {t: "U"}, {t: "T"}, {t: "T"}, {t: "E"}, {t: "R"}, {t: "F"}, {t: "L"}, {t: "Y"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/DISHWASHER.png"),   nombreObjeto: "DISHWASHER",   palabra: JSON.stringify([{t: "D"}, {t: "I"}, {t: "S"}, {t: "H"}, {t: "W"}, {t: "A"}, {t: "S"}, {t: "H"}, {t: "E"}, {t: "R"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/LAUNDROMAT.png"),   nombreObjeto: "LAUNDROMAT",   palabra: JSON.stringify([{t: "L"}, {t: "A"}, {t: "U"}, {t: "N"}, {t: "D"}, {t: "R"}, {t: "O"}, {t: "M"}, {t: "A"}, {t: "T"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/WINDSHIELD.png"),   nombreObjeto: "WINDSHIELD",   palabra: JSON.stringify([{t: "W"}, {t: "I"}, {t: "N"}, {t: "D"}, {t: "S"}, {t: "H"}, {t: "I"}, {t: "E"}, {t: "L"}, {t: "D"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/WATERMELON.png"),   nombreObjeto: "WATERMELON",   palabra: JSON.stringify([{t: "W"}, {t: "A"}, {t: "T"}, {t: "E"}, {t: "R"}, {t: "M"}, {t: "E"}, {t: "L"}, {t: "O"}, {t: "N"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/ONETHOUSAND.png"),  nombreObjeto: "ONETHOUSAND",  palabra: JSON.stringify([{t: "O"}, {t: "N"}, {t: "E"}, {t: "T"}, {t: "H"}, {t: "O"}, {t: "U"}, {t: "S"}, {t: "A"}, {t: "N"}, {t: "D"}])},
	{ruta: loadImage("/static/img/Trivia/lv3/REFRIGERATOR.png"), nombreObjeto: "REFRIGERATOR", palabra: JSON.stringify([{t: "R"}, {t: "E"}, {t: "F"}, {t: "R"}, {t: "I"}, {t: "G"}, {t: "E"}, {t: "R"}, {t: "A"}, {t: "T"}, {t: "O"}, {t: "R"}])},
];


eligio = function () {
   	nivel = document.getElementById('nivel').value; 
   	oneCLick();
}

var oneCLick = function(){
	resultOK = 0;
	intentos = 10;
	aciertos = 0;
	errores = 0;
	punteo = 0;
	alerta = "DA CLICK EN EL AREA DEL JUEGO Y UTILIZA TU TECLADO PARA ESCRIBIR TU RESPUESTA";
   	gameOver = false; 
   	rd = true;
   	cadena;
   	escribir = [];
   	juega = true;
   	var z = [{i: loadImage("/static/img/Trivia/gameOver.png")}];
};

randVector(nivel1Vector);
randVector(nivel2Vector);
randVector(nivel3Vector);

//Con este metodo se cargan las imagenes
void setup(){
	//Fondo del marco del dibujo
	Background = new PImage();
	Background = loadImage("/static/img/Trivia/background.jpg");
	//imagen que aparece siempre en la posicion del puntero
	puntero = new PImage();
	puntero = loadImage("/static/img/Trivia/puntero.png");
	
	//Se el almacen de la imagen que se mostrara en pantalla
	imagenPantalla = new PImage();
  	
  	size(650, 500);
  	background(146, 244, 239);

};

//Este metodo dibuja en pantalla
draw = function(){
	if(juega){
		//Dibuja la imagen que esta de fondo
		image(Background, 0, 0);

		textSize(30);
		fill(255,0,80);
		text("ESCRIBE EN INGLES EL NOMBRE \n DE LA FIGURA REPRESENTADA \n                EN LA IMAGEN",85,60);
	
		textSize(15);
		fill(255);
		text("Intentos Restantes: " + intentos + "    Aciertos: " + aciertos + "    Errores: " + errores + "    Puntos: " + punteo, 8, 17);

		fill(0);
		text(alerta, 8, 480);
		/*Dibuja la imagen del objeto a responder con forme al nivel lo realiza mientas el
		juego no haya terminado*/	
		if(gameOver == false){

			if(nivel == 1){
				//para que siempre que se empiese un juego las imagenes aparescan aleatoriamente
				if(rd == true){
					randVector(nivel1Vector);	
					rd = false;
				};
				//Dibuja las imagenes del nivel 1
				dibujaImagen(nivel1Vector[resultOK].ruta, 225, 200, 210, 210);
			}

			else if(nivel == 2){
			//para que siempre que se empiese un juego las imagenes aparescan aleatoriamente
				if(rd == true){
					randVector(nivel2Vector);	
					rd = false;
				};
				//Dibuja las imagenes del nivel 2
				dibujaImagen(nivel2Vector[resultOK].ruta, 225, 200, 210, 210);
			}

			else if(nivel == 3){
			//para que siempre que se empiese un juego las imagenes aparescan aleatoriamente
				if(rd == true){
					randVector(nivel3Vector);	
					rd = false;
				};
				//Dibuja las imagenes del nivel 3
				dibujaImagen(nivel3Vector[resultOK].ruta, 225, 200, 210, 210);
			};
	
		};
		
		if(intentos == 0){
			finDelJuego(z);
			guardarPunteo(4000,punteo,"nivel",null);
  			gameOver = true;
  			juega = false;
		};

		//Dibuja el circulo que aparese a en el centro del puntero del mouse
		if (mousePressed == true){
			image(puntero, mouseX - 25, mouseY - 25, 50, 50);
			alerta = "ESCRIBE TU RESPUESTA";
		};

		//llama la funcion que dibuja las letras en pantalla cuando se escribe con el teclado
		printRespuesta(200,200,escribir);

	};

};

//Evento para capturar el valor de la tecla precionada y que se ejecute el codigo existente en el.
void keyTyped() {
 	alerta = "PRECIONA ENTER PARA COMPROBAR TU RESPUESTA"
	teclasPresionadas();


	cadena=JSON.stringify(escribir);

  	if(nivel == 1){
  		comprobarCadena(nivel1Vector, cadena);
  	}

  	else if(nivel == 2){
 		comprobarCadena(nivel2Vector, cadena);	
  	}

  	else if(nivel == 3){
		comprobarCadena(nivel3Vector, cadena);
  	};
}

//Función que hace posible que tranforma los valores decimales de las teclas a valores ASCII.
var teclasPresionadas = function(){

	//valores decimales de las teclas y caracteres que representan en ASCII
	var teclaPress = [
		{teclaPmayus: 39, teclaPminus: 34,  letra: "'"},
		{teclaPmayus: 65, teclaPminus: 97,  letra: "A"},
		{teclaPmayus: 66, teclaPminus: 98,  letra: "B"},
		{teclaPmayus: 67, teclaPminus: 99,  letra: "C"},
		{teclaPmayus: 68, teclaPminus: 100, letra: "D"},
		{teclaPmayus: 69, teclaPminus: 101, letra: "E"},
		{teclaPmayus: 70, teclaPminus: 102, letra: "F"},
		{teclaPmayus: 71, teclaPminus: 103, letra: "G"},
		{teclaPmayus: 72, teclaPminus: 104, letra: "H"},
		{teclaPmayus: 73, teclaPminus: 105, letra: "I"},
		{teclaPmayus: 74, teclaPminus: 106, letra: "J"},
		{teclaPmayus: 75, teclaPminus: 107, letra: "K"},
		{teclaPmayus: 76, teclaPminus: 108, letra: "L"},
		{teclaPmayus: 77, teclaPminus: 109, letra: "M"},
		{teclaPmayus: 78, teclaPminus: 110, letra: "N"},
		{teclaPmayus: 79, teclaPminus: 111, letra: "O"},
		{teclaPmayus: 80, teclaPminus: 112, letra: "P"},
		{teclaPmayus: 81, teclaPminus: 113, letra: "Q"},
		{teclaPmayus: 82, teclaPminus: 114, letra: "R"},
		{teclaPmayus: 83, teclaPminus: 115, letra: "S"},
		{teclaPmayus: 84, teclaPminus: 116, letra: "T"},
		{teclaPmayus: 85, teclaPminus: 117, letra: "U"},
		{teclaPmayus: 86, teclaPminus: 118, letra: "V"},
		{teclaPmayus: 87, teclaPminus: 119, letra: "W"},
		{teclaPmayus: 88, teclaPminus: 120, letra: "X"},
		{teclaPmayus: 89, teclaPminus: 121, letra: "Y"},
		{teclaPmayus: 90, teclaPminus: 122, letra: "Z"}
	];

	//Captura el valor decimal de la tecla precionada.
	var v = int(key);

	//Elimina el la ultima letra de la cadena de array
	if (v == 8){
		escribir.pop();
	}

	/*Busca la letra almacenada el el arrar teclaPress que corresponde al valor decimal 
	de la tecla precionada para regresar el valor de ASCII, y compropueba que todavia hayan
	intentos para poder escribir en pantalla*/
	if(v && intentos > 0){	
		buscaLetra(v, teclaPress, escribir);//Escribe ', A, B, C, D, E, F, G, H, I, J, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
	};

}

//Función que realiza la captura de las lestras precionadas y las almacena en un array para realizar una cadena de texto en pantalla.
var printRespuesta = function (x, y, escribir){
	
	for(var i = 0; i < escribir.length; i++){
		textSize(30);
		fill(0);
		text(escribir[i].t, x, y);
		x += 20;
	}

}

/*Función que realiza la comprobación de que si lo escrito en pantalla corresponde al nombre de la imagen
mostrada y el control del puntaje*/
var comprobarCadena = function (nivelVector, cadena){
	if(int(key) == 10 && intentos > 0){
		if(resultOK < nivelVector.length){
  	  		if(cadena == nivelVector[resultOK].palabra){
  				alert("¡¡¡CORRECTO!!! LA PALABRE ES: " + nivelVector[resultOK].nombreObjeto);
  				escribir = [];
  				
  				//Evite que el arreglo se recorra mas de los atributos existentes
  				if(resultOK < nivelVector.length - 1){
  					resultOK++;		
  				};
  				
  				
  				aciertos++;
  				intentos--;
  				punteo += 5;
  			}

  			else{
  				alert("RESPUESTA INCORRECTA");
  				errores++;
  				intentos--;
  				//impide que se sigan restando putos al llegar a 0(cero)
  				if(punteo > 0){
  					if(punteo == 1){
  						punteo -= 1;
  					}
  					else{
  						punteo -= 2;	
  					};
  					
  				};
  				
  			};
  					
  		}

  		else{
  			alert("JUEGO TERMINADO");
  		};
  	}

  	else if(int(key) && intentos == 0){	
  		//finDelJuego(z);
  		alert("JUEGO TERMINADO, NO LE QUEDAN MAS INTENTOS");
  		//guardarPunteo(1000,punteo,"nivel",null);
  		//gameOver = true;
  		//juega = false;

  	};
 }

//Función para dibujar imagen en pantalla
var dibujaImagen = function (nivelVector, x, y, ancho, alto){
	imagenPantalla = nivelVector;
	image(imagenPantalla, x, y, ancho, alto);	
}

//Funcion fin del juego
var finDelJuego = function (z){
		alerta = "JUEGO TERMINADO, NO LE QUEDAN MAS INTENTOS";
		dibujaImagen(z[0].i, 70, 140, 510, 218);
		escribir = [];
}
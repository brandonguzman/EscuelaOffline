var creaPieza = function (posiciones, cordenadasIIxII, tPieza){
	tPieza = 300;

	//Desordena las cordenadas
	randVector(cordenadasIIxII);
	//Crea las piezas del rompecabezas conforme el numero de cordenadas del nivel
	for(var i = 1; i < cordenadasIIxII.length ; i++){
		posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: i, gColor: 6, rColor: 87, bColor: 71});
	};
	posiciones.push({x: 0, y: 0, ancho: tPieza, alto: tPieza, numero: cordenadasIIxII.length, gColor: 1, rColor: 26, bColor: 31});

	//Ingresa los valores desordenados de las cordenadas para las piezas del rompecabezas
	for(var i = 0; i < cordenadasIIxII.length; i++){
		posiciones[i].x = cordenadasIIxII[i].x;
		posiciones[i].y = cordenadasIIxII[i].y;
	};

}


/*es necesario un random mas personalizado en la  matrix de 2x2 ya que es mas alta la probabilidad de que el juego de una 
vez aparezca ganado y al ser una matriz de 2X2 hay 12 movimientos que hacen que el juego no se pueda solucionar al no 
permitir ordenar las piezas de manera secuencial en el puzzle*/
var randPuzzleIIxII = function(cordenadasIIxII, nRand){
	if(nRand == 0){
		cordenadasIIxII[0].x = 0;   cordenadasIIxII[0].y = 0;
		cordenadasIIxII[1].x = 250; cordenadasIIxII[1].y = 0;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 250;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 250;
	}

	else if(nRand == 1){
		cordenadasIIxII[0].x = 0;   cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 250; cordenadasIIxII[1].y = 0;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 250;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 0;
	}

	else if(nRand == 2){
		cordenadasIIxII[0].x = 0;   cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 0;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 250;
		cordenadasIIxII[3].x = 250; cordenadasIIxII[3].y = 0;
	}

	else if(nRand == 3){
		cordenadasIIxII[0].x = 0;   cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 0;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 250; cordenadasIIxII[3].y = 250;
	}

	else if(nRand == 4){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 0;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 250;
	}

	else if(nRand == 5){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 250; cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 0;
	}

	else if(nRand == 6){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 250;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 0;   cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 250; cordenadasIIxII[3].y = 0;
	}

	else if(nRand == 7){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 0;
		cordenadasIIxII[1].x = 0;   cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 0;   cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 250; cordenadasIIxII[3].y = 250;
	}

	else if(nRand == 8){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 0;
		cordenadasIIxII[1].x = 250; cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 0;   cordenadasIIxII[2].y = 0;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 250;
	}

	else if(nRand == 9){
		cordenadasIIxII[0].x = 250; cordenadasIIxII[0].y = 0;
		cordenadasIIxII[1].x = 250; cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 0;   cordenadasIIxII[2].y = 250;
		cordenadasIIxII[3].x = 0;   cordenadasIIxII[3].y = 0;
	}

	else if(nRand == 10){
		cordenadasIIxII[0].x = 0;   cordenadasIIxII[0].y = 0;
		cordenadasIIxII[1].x = 250; cordenadasIIxII[1].y = 250;
		cordenadasIIxII[2].x = 0;   cordenadasIIxII[2].y = 250;
		cordenadasIIxII[3].x = 250; cordenadasIIxII[3].y = 0;
	};

}

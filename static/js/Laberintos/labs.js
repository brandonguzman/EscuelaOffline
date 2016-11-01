var labs1 = []; //laberintos predefinidos
var labs2 = [];
var labs3 = [];

function preLabs(){
	labs1.push( setLab_1_1 );
	labs2.push( setLab_2_1 );
	labs3.push( setLab_3_1 );
}

function Cuadro(arr,aba,izq,der){
	this.arr = arr;
	this.aba = aba;
	this.izq = izq;
	this.der = der;
}

function llenarMatriz(matrix){
	for(var i=0; i<matrix.length; i++){
		for(var j=0; j<matrix[i].length; j++){
			matrix[i][j] = new Cuadro(true,true,true,true);
		}
	}
}

function abrirCamino(fil,col,matrix,arr,aba,izq,der){
	if( arr ){
		matrix[fil][col].arr = false; matrix[fil-1][col].aba = false;
	}
	if( aba ){
		matrix[fil][col].aba = false; matrix[fil+1][col].arr = false;
	}
	if( izq ){
		matrix[fil][col].izq = false; matrix[fil][col-1].der = false;
	}
	if( der ){
		matrix[fil][col].der = false; matrix[fil][col+1].izq = false;
	}
}

function getTrueOrFalse(){
	var a = aleat(0,1);
	if( a == 0 )
		return true;
	return false;
}

//arriba, abajo, izquierda, derecha
function setLab_1_1(laberinto){
abrirCamino(3,2,laberinto,true,false,false,true);

abrirCamino(3,4,laberinto,false,false,false,true);

abrirCamino(3,4,laberinto,false,false,true,false);

abrirCamino(3,3,laberinto,true,false,false,false);

abrirCamino(3,4,laberinto,false,false,true,false);

abrirCamino(4,5,laberinto,true,false,false,false);

abrirCamino(5,5,laberinto,true,false,false,false);

abrirCamino(6,5,laberinto,true,false,false,false);

abrirCamino(6,5,laberinto,false,true,false,false);

abrirCamino(8,5,laberinto,true,false,false,false);

abrirCamino(9,5,laberinto,true,false,false,false);

abrirCamino(9,4,laberinto,false,false,false,true);

abrirCamino(9,4,laberinto,false,false,true,false);

abrirCamino(7,10,laberinto,false,false,true,false);

abrirCamino(7,9,laberinto,false,false,true,false);

abrirCamino(9,3,laberinto,false,false,true,false);

abrirCamino(9,1,laberinto,false,false,false,true);

abrirCamino(9,1,laberinto,false,false,true,false);

abrirCamino(1,3,laberinto,false,true,false,false);

abrirCamino(1,4,laberinto,false,false,true,false);

abrirCamino(1,5,laberinto,false,false,true,false);

abrirCamino(1,6,laberinto,false,false,true,false);

abrirCamino(1,7,laberinto,false,false,true,false);

abrirCamino(1,7,laberinto,false,false,false,true);

abrirCamino(9,0,laberinto,true,false,false,false);

abrirCamino(8,1,laberinto,false,false,true,false);

abrirCamino(8,1,laberinto,false,false,false,true);

abrirCamino(8,3,laberinto,false,false,true,false);

abrirCamino(8,4,laberinto,false,false,true,false);

abrirCamino(8,4,laberinto,true,false,false,false);

abrirCamino(7,4,laberinto,false,false,true,false);

abrirCamino(7,3,laberinto,false,false,true,false);

abrirCamino(7,2,laberinto,false,false,true,false);

abrirCamino(7,1,laberinto,false,false,true,false);

abrirCamino(7,0,laberinto,true,false,false,false);

abrirCamino(6,0,laberinto,true,false,false,false);

abrirCamino(4,0,laberinto,false,true,false,false);

abrirCamino(6,1,laberinto,false,false,true,false);

abrirCamino(6,1,laberinto,false,false,false,true);

abrirCamino(6,3,laberinto,false,false,true,false);

abrirCamino(6,4,laberinto,false,false,true,false);

abrirCamino(6,4,laberinto,true,false,false,false);

abrirCamino(5,4,laberinto,true,false,false,false);

abrirCamino(4,3,laberinto,false,false,false,true);

abrirCamino(4,3,laberinto,false,false,true,false);

abrirCamino(4,2,laberinto,false,false,true,false);

abrirCamino(5,2,laberinto,false,false,true,false);

abrirCamino(5,2,laberinto,false,false,true,false);

abrirCamino(5,3,laberinto,false,false,true,false);

abrirCamino(4,1,laberinto,false,true,false,false);

abrirCamino(3,1,laberinto,false,true,false,false);

abrirCamino(3,1,laberinto,false,false,true,false);

abrirCamino(3,0,laberinto,true,false,false,false);

abrirCamino(2,1,laberinto,false,false,true,false);

abrirCamino(2,1,laberinto,true,false,false,false);

abrirCamino(1,0,laberinto,false,false,false,true);

abrirCamino(1,0,laberinto,true,false,false,false);

abrirCamino(0,1,laberinto,false,false,true,false);

abrirCamino(0,2,laberinto,false,false,true,false);

abrirCamino(0,3,laberinto,false,false,true,false);

abrirCamino(1,2,laberinto,false,true,false,false);

abrirCamino(0,4,laberinto,false,false,true,false);

abrirCamino(2,8,laberinto,true,false,false,false);

abrirCamino(3,8,laberinto,true,false,false,false);

abrirCamino(3,8,laberinto,false,true,false,false);

abrirCamino(6,8,laberinto,true,false,false,false);

abrirCamino(6,8,laberinto,true,false,false,false);

abrirCamino(5,8,laberinto,true,false,false,false);

abrirCamino(6,8,laberinto,false,true,false,false);

abrirCamino(7,11,laberinto,false,false,true,false);

abrirCamino(0,5,laberinto,false,false,true,false);

abrirCamino(0,6,laberinto,false,false,true,false);

abrirCamino(0,6,laberinto,false,false,false,true);

abrirCamino(0,8,laberinto,false,false,true,false);

abrirCamino(0,9,laberinto,false,false,false,false);

abrirCamino(0,9,laberinto,false,false,false,false);

abrirCamino(0,9,laberinto,false,false,true,false);

abrirCamino(0,9,laberinto,false,false,false,true);

abrirCamino(0,10,laberinto,false,false,false,true);

abrirCamino(0,12,laberinto,false,false,true,false);

abrirCamino(0,13,laberinto,false,true,true,false);

abrirCamino(2,13,laberinto,true,false,false,false);

abrirCamino(2,13,laberinto,false,true,false,false);

abrirCamino(3,13,laberinto,false,true,false,false);

abrirCamino(4,14,laberinto,false,false,true,false);

abrirCamino(4,14,laberinto,true,false,false,false);

abrirCamino(3,14,laberinto,false,false,false,false);

abrirCamino(2,14,laberinto,false,true,false,false);

abrirCamino(2,14,laberinto,true,false,false,false);

abrirCamino(1,14,laberinto,true,false,false,false);

abrirCamino(0,15,laberinto,false,true,true,false);

abrirCamino(2,15,laberinto,true,false,false,false);

abrirCamino(3,15,laberinto,true,false,false,false);

abrirCamino(3,15,laberinto,false,true,false,false);

abrirCamino(4,15,laberinto,false,true,false,false);

abrirCamino(5,14,laberinto,false,false,false,true);

abrirCamino(5,14,laberinto,false,false,true,false);

abrirCamino(5,13,laberinto,false,false,true,false);

abrirCamino(6,15,laberinto,true,false,false,false);

abrirCamino(6,16,laberinto,false,false,true,false);

abrirCamino(6,16,laberinto,false,false,false,true);

abrirCamino(5,17,laberinto,false,true,false,false);

abrirCamino(5,17,laberinto,false,false,true,false);

abrirCamino(5,16,laberinto,true,false,false,true);

abrirCamino(4,17,laberinto,false,false,true,false);

abrirCamino(4,17,laberinto,true,false,false,false);

abrirCamino(3,17,laberinto,false,false,true,false);

abrirCamino(2,16,laberinto,false,true,false,false);

abrirCamino(2,17,laberinto,false,false,true,false);

abrirCamino(2,17,laberinto,true,false,false,false);

abrirCamino(1,17,laberinto,false,false,true,false);

abrirCamino(1,16,laberinto,true,false,false,false);

abrirCamino(0,16,laberinto,false,false,false,true);

abrirCamino(0,18,laberinto,false,false,true,false);

abrirCamino(0,19,laberinto,false,false,true,false);

abrirCamino(1,19,laberinto,true,false,false,false);

abrirCamino(2,19,laberinto,true,false,false,false);

abrirCamino(3,19,laberinto,true,false,false,false);

abrirCamino(4,19,laberinto,true,false,false,false);

abrirCamino(4,19,laberinto,false,false,true,false);

abrirCamino(3,18,laberinto,false,true,false,false);

abrirCamino(3,18,laberinto,true,false,false,false);

abrirCamino(2,18,laberinto,true,false,false,false);

abrirCamino(5,19,laberinto,false,false,true,false);

abrirCamino(6,18,laberinto,true,false,false,false);

abrirCamino(6,18,laberinto,false,true,false,false);

abrirCamino(8,18,laberinto,true,false,false,false);

abrirCamino(7,19,laberinto,true,false,false,false);

abrirCamino(7,19,laberinto,false,true,false,false);

abrirCamino(8,19,laberinto,false,true,false,false);

abrirCamino(9,19,laberinto,false,false,true,false);

abrirCamino(6,19,laberinto,true,false,false,false);

abrirCamino(8,18,laberinto,true,false,true,false);

abrirCamino(8,17,laberinto,false,false,true,false);

abrirCamino(8,16,laberinto,false,false,true,false);

abrirCamino(8,15,laberinto,false,false,true,false);

abrirCamino(8,15,laberinto,true,false,false,false);

abrirCamino(7,16,laberinto,false,false,true,false);

abrirCamino(7,17,laberinto,false,false,true,false);

abrirCamino(8,14,laberinto,false,false,true,false);

abrirCamino(7,13,laberinto,false,true,false,false);

abrirCamino(7,13,laberinto,true,false,false,false);

abrirCamino(6,13,laberinto,false,false,true,false);

abrirCamino(6,12,laberinto,false,false,true,false);

abrirCamino(5,11,laberinto,false,true,false,false);

abrirCamino(5,11,laberinto,true,false,false,false);

abrirCamino(4,12,laberinto,false,false,true,false);

abrirCamino(4,12,laberinto,true,false,false,false);

abrirCamino(2,12,laberinto,false,true,false,false);

abrirCamino(2,12,laberinto,true,false,false,false);

abrirCamino(2,11,laberinto,true,false,false,false);

abrirCamino(2,11,laberinto,false,true,false,false);

abrirCamino(3,11,laberinto,false,false,true,false);

abrirCamino(3,10,laberinto,true,false,false,false);

abrirCamino(2,10,laberinto,true,false,false,false);

abrirCamino(1,10,laberinto,false,false,true,false);

abrirCamino(1,9,laberinto,false,true,false,true);

abrirCamino(2,9,laberinto,false,true,false,false);

abrirCamino(4,9,laberinto,true,false,false,false);

abrirCamino(5,9,laberinto,true,false,false,false);

abrirCamino(6,9,laberinto,true,false,false,false);

abrirCamino(6,9,laberinto,false,false,false,true);

abrirCamino(6,10,laberinto,true,false,false,false);

abrirCamino(5,10,laberinto,true,false,false,false);

abrirCamino(6,14,laberinto,false,true,false,false);

abrirCamino(8,11,laberinto,false,false,true,false);

abrirCamino(8,11,laberinto,true,false,false,false);

abrirCamino(8,9,laberinto,false,false,false,true);

abrirCamino(8,8,laberinto,false,false,false,true);

abrirCamino(8,8,laberinto,false,false,true,false);

abrirCamino(8,7,laberinto,true,false,false,false);

abrirCamino(7,7,laberinto,true,false,false,false);

abrirCamino(6,7,laberinto,true,false,false,false);

abrirCamino(4,7,laberinto,false,true,false,false);

abrirCamino(4,7,laberinto,false,false,true,false);

abrirCamino(4,7,laberinto,true,false,false,false);

abrirCamino(3,7,laberinto,true,false,false,false);

abrirCamino(2,6,laberinto,false,false,false,true);

abrirCamino(2,5,laberinto,false,false,false,true);

abrirCamino(2,4,laberinto,false,false,false,true);

abrirCamino(3,6,laberinto,false,true,false,false);

abrirCamino(5,6,laberinto,true,false,false,false);

abrirCamino(6,6,laberinto,true,false,false,false);

abrirCamino(6,6,laberinto,false,true,false,false);

abrirCamino(7,6,laberinto,false,true,false,false);

abrirCamino(9,6,laberinto,true,false,false,false);

abrirCamino(9,6,laberinto,false,false,false,true);

abrirCamino(9,7,laberinto,false,false,false,true);

abrirCamino(9,9,laberinto,false,false,true,false);

abrirCamino(9,9,laberinto,false,false,false,true);

abrirCamino(6,10,laberinto,false,true,false,false);

abrirCamino(9,10,laberinto,false,false,false,true);

abrirCamino(9,11,laberinto,false,false,false,true);

abrirCamino(8,12,laberinto,false,true,false,false);

abrirCamino(8,12,laberinto,true,false,false,false);

abrirCamino(9,13,laberinto,false,false,true,false);

abrirCamino(9,14,laberinto,false,false,true,false);

abrirCamino(9,16,laberinto,false,false,true,false);

abrirCamino(9,17,laberinto,false,false,true,false);
abrirCamino(1,12,laberinto,false,false,true,false);
};


//*****************************************************************************************
function setLab_2_1(laberinto){
	setLab_1_1(laberinto);
	abrirCamino(4,20,laberinto,false,true,true,false);

abrirCamino(4,21,laberinto,false,false,true,false);

abrirCamino(4,22,laberinto,false,false,false,false);

abrirCamino(4,22,laberinto,false,false,true,false);

abrirCamino(4,23,laberinto,false,false,true,false);

abrirCamino(4,24,laberinto,false,false,true,false);

abrirCamino(6,20,laberinto,true,false,false,false);

abrirCamino(7,20,laberinto,true,false,false,false);

abrirCamino(8,20,laberinto,true,false,false,true);

abrirCamino(8,21,laberinto,true,false,false,true);

abrirCamino(7,21,laberinto,true,false,false,true);

abrirCamino(6,21,laberinto,true,false,false,false);

abrirCamino(5,22,laberinto,false,false,true,false);

abrirCamino(5,23,laberinto,false,false,true,false);

abrirCamino(5,24,laberinto,false,false,true,false);

abrirCamino(5,25,laberinto,false,false,true,false);

abrirCamino(5,26,laberinto,false,false,true,false);

abrirCamino(7,22,laberinto,true,false,false,false);

abrirCamino(6,23,laberinto,false,false,true,false);

abrirCamino(6,24,laberinto,false,false,false,false);

abrirCamino(6,24,laberinto,false,false,true,false);

abrirCamino(8,23,laberinto,false,false,true,false);

abrirCamino(8,23,laberinto,true,false,false,false);

abrirCamino(7,24,laberinto,false,true,true,false);

abrirCamino(8,24,laberinto,false,true,false,false);

abrirCamino(10,24,laberinto,true,false,false,false);

abrirCamino(11,24,laberinto,true,false,false,false);

abrirCamino(6,25,laberinto,false,false,true,false);

abrirCamino(6,26,laberinto,false,false,true,false);

abrirCamino(7,26,laberinto,true,false,false,true);

abrirCamino(8,26,laberinto,true,false,false,false);

abrirCamino(9,26,laberinto,true,false,false,false);

abrirCamino(9,27,laberinto,true,false,false,false);

abrirCamino(8,27,laberinto,true,false,false,false);

abrirCamino(9,28,laberinto,false,false,true,false);

abrirCamino(5,26,laberinto,true,false,false,false);

abrirCamino(4,26,laberinto,true,false,false,false);

abrirCamino(4,25,laberinto,false,false,true,false);

abrirCamino(3,26,laberinto,false,false,true,false);

abrirCamino(3,25,laberinto,false,false,true,false);

abrirCamino(3,24,laberinto,false,false,true,false);

abrirCamino(3,23,laberinto,false,false,true,false);

abrirCamino(3,22,laberinto,false,false,true,false);

abrirCamino(3,21,laberinto,false,false,true,false);

abrirCamino(3,20,laberinto,true,false,false,false);

abrirCamino(2,20,laberinto,true,false,false,true);

abrirCamino(0,20,laberinto,false,true,false,false);

abrirCamino(0,21,laberinto,false,true,false,false);

abrirCamino(0,21,laberinto,false,false,true,false);

abrirCamino(0,22,laberinto,false,false,true,false);

abrirCamino(0,23,laberinto,false,false,true,false);

abrirCamino(0,24,laberinto,false,false,true,false);

abrirCamino(0,25,laberinto,false,false,true,false);

abrirCamino(1,25,laberinto,true,false,false,false);

abrirCamino(1,25,laberinto,false,false,true,false);

abrirCamino(1,24,laberinto,false,false,true,false);

abrirCamino(1,23,laberinto,false,false,true,false);

abrirCamino(2,22,laberinto,true,false,false,false);

abrirCamino(2,23,laberinto,false,false,true,false);

abrirCamino(2,24,laberinto,false,false,true,false);

abrirCamino(2,25,laberinto,false,false,true,false);

abrirCamino(2,26,laberinto,false,false,true,false);

abrirCamino(2,27,laberinto,false,false,true,false);

abrirCamino(2,28,laberinto,false,false,true,false);

abrirCamino(0,26,laberinto,false,false,true,false);

abrirCamino(0,27,laberinto,false,false,true,false);

abrirCamino(0,28,laberinto,false,false,true,false);

abrirCamino(1,27,laberinto,false,false,true,false);

abrirCamino(1,28,laberinto,false,false,true,false);

abrirCamino(1,28,laberinto,true,false,false,false);

abrirCamino(1,29,laberinto,false,false,true,false);

abrirCamino(1,29,laberinto,true,false,false,false);

abrirCamino(0,30,laberinto,false,false,true,false);

abrirCamino(0,31,laberinto,false,false,true,false);

abrirCamino(1,31,laberinto,true,false,false,false);

abrirCamino(1,31,laberinto,false,false,true,false);

abrirCamino(2,31,laberinto,false,false,true,false);

abrirCamino(2,30,laberinto,true,false,false,false);

abrirCamino(3,31,laberinto,true,false,false,false);

abrirCamino(3,31,laberinto,false,false,true,false);

abrirCamino(3,30,laberinto,false,false,true,false);

abrirCamino(3,29,laberinto,false,false,true,false);

abrirCamino(3,28,laberinto,false,false,true,false);

abrirCamino(4,27,laberinto,true,false,false,false);

abrirCamino(4,28,laberinto,false,false,true,false);

abrirCamino(4,29,laberinto,false,false,true,false);

abrirCamino(4,30,laberinto,false,false,true,false);

abrirCamino(4,31,laberinto,false,false,true,false);

abrirCamino(5,31,laberinto,true,false,false,false);

abrirCamino(5,31,laberinto,false,false,true,false);

abrirCamino(6,30,laberinto,true,false,false,false);

abrirCamino(6,31,laberinto,false,false,true,false);

abrirCamino(6,31,laberinto,false,true,false,false);

abrirCamino(5,30,laberinto,false,true,true,false);

abrirCamino(5,29,laberinto,false,false,true,false);

abrirCamino(5,28,laberinto,false,false,true,false);

abrirCamino(6,28,laberinto,false,false,true,false);

abrirCamino(6,27,laberinto,true,false,false,false);

abrirCamino(8,28,laberinto,false,true,false,false);

abrirCamino(8,28,laberinto,true,false,false,false);

abrirCamino(7,29,laberinto,true,false,false,false);

abrirCamino(6,29,laberinto,false,false,true,false);

abrirCamino(8,29,laberinto,true,false,false,false);

abrirCamino(9,29,laberinto,true,false,false,true);

abrirCamino(8,30,laberinto,true,false,false,false);

abrirCamino(8,31,laberinto,true,false,false,false);

abrirCamino(9,31,laberinto,true,false,false,false);

abrirCamino(10,31,laberinto,true,false,false,false);

abrirCamino(10,30,laberinto,false,false,false,true);

abrirCamino(10,30,laberinto,false,false,true,false);

abrirCamino(10,28,laberinto,false,false,false,true);

abrirCamino(10,28,laberinto,false,false,true,false);

abrirCamino(10,27,laberinto,false,false,true,false);

abrirCamino(11,26,laberinto,true,false,false,false);

abrirCamino(12,26,laberinto,true,false,false,false);

abrirCamino(12,26,laberinto,false,true,false,false);

abrirCamino(13,26,laberinto,false,false,true,false);

abrirCamino(13,24,laberinto,false,false,false,true);

abrirCamino(13,24,laberinto,false,false,true,false);

abrirCamino(13,23,laberinto,false,false,true,false);

abrirCamino(13,22,laberinto,false,false,true,false);

abrirCamino(13,21,laberinto,false,false,true,false);

abrirCamino(13,20,laberinto,false,false,true,false);

abrirCamino(13,19,laberinto,false,false,true,false);

abrirCamino(13,18,laberinto,false,false,true,false);

abrirCamino(13,16,laberinto,false,false,false,true);

abrirCamino(13,16,laberinto,true,false,false,false);

abrirCamino(12,16,laberinto,true,false,false,false);

abrirCamino(11,16,laberinto,true,false,false,false);

abrirCamino(11,16,laberinto,false,false,true,false);

abrirCamino(11,15,laberinto,false,false,true,false);

abrirCamino(11,14,laberinto,false,false,true,false);

abrirCamino(11,13,laberinto,false,true,false,false);

abrirCamino(12,13,laberinto,false,false,true,false);

abrirCamino(12,12,laberinto,false,false,true,false);

abrirCamino(12,11,laberinto,false,false,true,false);

abrirCamino(12,10,laberinto,false,false,true,false);

abrirCamino(10,15,laberinto,true,false,false,false);

abrirCamino(10,15,laberinto,false,false,true,false);

abrirCamino(10,14,laberinto,false,false,true,false);

abrirCamino(9,18,laberinto,false,false,true,false);

abrirCamino(10,13,laberinto,false,false,true,false);

abrirCamino(10,12,laberinto,false,false,true,false);

abrirCamino(10,11,laberinto,false,false,true,false);

abrirCamino(10,10,laberinto,false,false,true,false);

abrirCamino(10,9,laberinto,false,false,true,false);

abrirCamino(10,8,laberinto,false,false,true,false);

abrirCamino(12,9,laberinto,false,false,true,false);

abrirCamino(12,8,laberinto,false,false,true,false);

abrirCamino(12,7,laberinto,false,false,true,false);

abrirCamino(13,6,laberinto,true,false,false,false);

abrirCamino(14,6,laberinto,true,false,false,false);

abrirCamino(14,7,laberinto,false,false,true,false);

abrirCamino(14,8,laberinto,false,false,true,false);

abrirCamino(14,9,laberinto,false,false,true,false);

abrirCamino(14,9,laberinto,true,false,false,false);

abrirCamino(13,10,laberinto,false,false,true,false);

abrirCamino(13,11,laberinto,false,false,true,false);

abrirCamino(13,12,laberinto,false,false,true,false);

abrirCamino(13,13,laberinto,false,false,true,false);

abrirCamino(13,14,laberinto,false,false,true,false);

abrirCamino(13,14,laberinto,true,false,false,false);

abrirCamino(13,15,laberinto,true,false,false,false);

abrirCamino(12,15,laberinto,false,false,true,false);

abrirCamino(13,15,laberinto,false,true,false,false);

abrirCamino(15,15,laberinto,true,false,false,true);

abrirCamino(15,17,laberinto,false,false,true,false);

abrirCamino(15,18,laberinto,false,false,true,false);

abrirCamino(15,18,laberinto,true,false,false,true);

abrirCamino(14,18,laberinto,false,false,true,false);

abrirCamino(14,17,laberinto,false,false,true,false);

abrirCamino(15,20,laberinto,false,false,true,false);

abrirCamino(15,21,laberinto,false,false,true,false);

abrirCamino(14,19,laberinto,false,false,true,false);

abrirCamino(14,20,laberinto,false,false,true,false);

abrirCamino(14,21,laberinto,false,false,true,false);

abrirCamino(14,22,laberinto,false,false,true,false);

abrirCamino(15,22,laberinto,true,false,false,false);

abrirCamino(15,23,laberinto,false,false,true,false);

abrirCamino(15,24,laberinto,false,false,true,false);

abrirCamino(15,24,laberinto,true,false,false,true);

abrirCamino(14,24,laberinto,false,false,true,false);

abrirCamino(14,25,laberinto,false,false,true,false);

abrirCamino(14,26,laberinto,false,false,true,false);

abrirCamino(12,21,laberinto,false,true,false,false);

abrirCamino(12,21,laberinto,true,false,false,false);

abrirCamino(11,21,laberinto,true,false,false,false);

abrirCamino(10,21,laberinto,true,false,false,true);

abrirCamino(9,22,laberinto,false,false,true,false);

abrirCamino(9,23,laberinto,false,false,true,false);

abrirCamino(10,23,laberinto,true,false,false,false);

abrirCamino(11,23,laberinto,true,false,false,false);

abrirCamino(11,23,laberinto,false,false,true,false);

abrirCamino(12,22,laberinto,true,false,false,false);

abrirCamino(12,23,laberinto,false,false,true,false);

abrirCamino(12,24,laberinto,false,false,true,false);

abrirCamino(12,25,laberinto,false,false,true,false);

abrirCamino(11,25,laberinto,false,true,false,false);

abrirCamino(11,25,laberinto,true,false,false,false);

abrirCamino(10,25,laberinto,true,false,false,false);

abrirCamino(9,25,laberinto,true,false,false,false);

abrirCamino(8,25,laberinto,true,false,false,false);

abrirCamino(9,21,laberinto,false,true,true,false);

abrirCamino(9,20,laberinto,false,true,false,false);

abrirCamino(11,20,laberinto,true,false,false,false);

abrirCamino(12,20,laberinto,true,false,false,false);

abrirCamino(12,20,laberinto,false,false,true,false);

abrirCamino(12,19,laberinto,false,false,true,false);

abrirCamino(12,18,laberinto,false,false,true,false);

abrirCamino(11,17,laberinto,false,true,false,false);

abrirCamino(11,18,laberinto,false,false,true,false);

abrirCamino(11,19,laberinto,true,false,false,false);

abrirCamino(11,19,laberinto,true,false,false,false);

abrirCamino(10,19,laberinto,false,false,true,false);

abrirCamino(10,18,laberinto,false,false,true,false);

abrirCamino(11,19,laberinto,false,false,true,false);

abrirCamino(11,31,laberinto,true,false,false,false);

abrirCamino(11,31,laberinto,false,false,true,false);

abrirCamino(11,30,laberinto,false,false,true,false);

abrirCamino(11,29,laberinto,false,false,true,false);

abrirCamino(11,28,laberinto,false,false,true,false);

abrirCamino(12,27,laberinto,true,false,false,true);

abrirCamino(13,27,laberinto,true,false,false,false);

abrirCamino(12,29,laberinto,false,false,true,false);

abrirCamino(12,30,laberinto,false,false,true,false);

abrirCamino(12,31,laberinto,false,false,true,false);

abrirCamino(13,31,laberinto,true,false,false,false);

abrirCamino(14,31,laberinto,true,false,false,false);

abrirCamino(14,31,laberinto,false,true,false,false);

abrirCamino(15,31,laberinto,false,false,true,false);

abrirCamino(15,27,laberinto,false,false,true,false);

abrirCamino(15,26,laberinto,true,false,false,false);

abrirCamino(15,27,laberinto,true,false,false,true);

abrirCamino(15,30,laberinto,false,false,true,false);

abrirCamino(14,29,laberinto,false,false,true,false);

abrirCamino(14,28,laberinto,false,false,true,false);

abrirCamino(13,28,laberinto,false,false,true,false);

abrirCamino(14,30,laberinto,false,false,true,false);

abrirCamino(14,30,laberinto,true,false,false,false);

abrirCamino(13,30,laberinto,false,false,true,false);

abrirCamino(10,0,laberinto,true,false,false,false);

abrirCamino(11,0,laberinto,true,false,false,false);

abrirCamino(11,0,laberinto,false,true,false,false);

abrirCamino(12,0,laberinto,false,true,false,false);

abrirCamino(14,0,laberinto,true,false,false,false);

abrirCamino(14,0,laberinto,false,true,false,false);

abrirCamino(15,1,laberinto,false,false,true,false);

abrirCamino(15,1,laberinto,false,false,false,true);

abrirCamino(15,3,laberinto,false,false,true,false);

abrirCamino(14,1,laberinto,false,true,false,false);

abrirCamino(14,1,laberinto,true,false,false,false);

abrirCamino(13,1,laberinto,true,false,false,false);

abrirCamino(12,1,laberinto,true,false,false,false);

abrirCamino(12,2,laberinto,false,false,true,false);

abrirCamino(12,3,laberinto,false,false,true,false);

abrirCamino(12,3,laberinto,false,false,false,true);

abrirCamino(12,4,laberinto,false,false,false,true);

abrirCamino(12,5,laberinto,true,false,false,false);

abrirCamino(11,6,laberinto,false,false,true,false);

abrirCamino(11,7,laberinto,false,false,true,false);

abrirCamino(11,8,laberinto,false,false,true,false);

abrirCamino(11,9,laberinto,false,false,true,false);

abrirCamino(11,10,laberinto,false,false,true,false);

abrirCamino(11,11,laberinto,false,false,true,false);

abrirCamino(11,12,laberinto,false,false,true,false);

abrirCamino(11,5,laberinto,false,false,true,false);

abrirCamino(11,4,laberinto,false,false,true,false);

abrirCamino(11,3,laberinto,false,false,true,false);

abrirCamino(11,2,laberinto,true,false,false,false);

abrirCamino(10,2,laberinto,false,false,true,false);

abrirCamino(10,3,laberinto,false,false,true,false);

abrirCamino(10,4,laberinto,false,false,true,false);

abrirCamino(10,5,laberinto,false,false,true,false);

abrirCamino(10,6,laberinto,false,false,true,false);

abrirCamino(14,3,laberinto,false,true,false,false);

abrirCamino(13,3,laberinto,false,true,false,false);

abrirCamino(13,4,laberinto,false,false,true,false);

abrirCamino(13,4,laberinto,false,false,false,true);

abrirCamino(14,5,laberinto,true,false,false,false);

abrirCamino(14,5,laberinto,false,false,true,false);

abrirCamino(15,4,laberinto,true,false,false,false);

abrirCamino(15,5,laberinto,false,false,true,false);

abrirCamino(15,6,laberinto,false,false,true,false);

abrirCamino(15,7,laberinto,false,false,true,false);

abrirCamino(15,8,laberinto,false,false,true,false);

abrirCamino(15,9,laberinto,false,false,true,false);

abrirCamino(15,10,laberinto,false,false,true,false);

abrirCamino(15,11,laberinto,false,false,true,false);

abrirCamino(15,12,laberinto,false,false,true,false);

abrirCamino(15,13,laberinto,false,false,true,false);

abrirCamino(15,14,laberinto,false,false,true,false);

abrirCamino(15,14,laberinto,true,false,false,false);

abrirCamino(14,13,laberinto,false,false,false,true);

abrirCamino(14,13,laberinto,false,false,true,false);

abrirCamino(14,11,laberinto,false,false,false,true);

abrirCamino(14,10,laberinto,false,false,false,true);

abrirCamino(13,8,laberinto,false,false,true,false);

abrirCamino(13,9,laberinto,false,false,true,false);

abrirCamino(13,2,laberinto,false,true,false,true);

abrirCamino(6,15,laberinto,false,false,true,false);

//abrirCamino(8,30,laberinto,false,true,true,false);
};

function setLab_3_1(laberinto){
	setLab_2_1(laberinto);
	abrirCamino(16,21,laberinto,true,false,false,false);

abrirCamino(16,21,laberinto,false,false,true,false);

abrirCamino(16,20,laberinto,false,false,true,false);

abrirCamino(16,19,laberinto,false,false,true,false);

abrirCamino(16,18,laberinto,false,false,true,false);

abrirCamino(16,17,laberinto,false,false,true,false);

abrirCamino(16,16,laberinto,false,false,true,false);

abrirCamino(16,15,laberinto,false,false,true,false);

abrirCamino(16,14,laberinto,false,false,true,false);

abrirCamino(16,13,laberinto,false,false,true,false);

abrirCamino(16,11,laberinto,true,false,false,false);

abrirCamino(16,11,laberinto,false,false,true,false);

abrirCamino(16,10,laberinto,false,false,true,false);

abrirCamino(16,8,laberinto,false,false,false,true);

abrirCamino(16,12,laberinto,false,true,false,false);

abrirCamino(17,12,laberinto,false,false,true,false);

abrirCamino(17,11,laberinto,false,false,true,false);

abrirCamino(17,10,laberinto,false,false,true,false);

abrirCamino(17,9,laberinto,false,false,true,false);

abrirCamino(18,8,laberinto,true,false,false,false);

abrirCamino(18,9,laberinto,false,false,true,false);

abrirCamino(18,9,laberinto,false,false,false,true);

abrirCamino(18,11,laberinto,false,false,true,false);

abrirCamino(18,13,laberinto,false,false,true,false);

abrirCamino(18,13,laberinto,false,false,true,false);

abrirCamino(18,12,laberinto,false,false,true,false);

abrirCamino(18,14,laberinto,false,false,true,false);

abrirCamino(18,13,laberinto,true,false,false,true);

abrirCamino(17,14,laberinto,false,false,true,false);

abrirCamino(17,15,laberinto,false,false,true,false);

abrirCamino(17,15,laberinto,false,false,false,true);

abrirCamino(17,17,laberinto,false,false,true,false);

abrirCamino(17,18,laberinto,false,false,true,false);

abrirCamino(17,19,laberinto,false,false,true,false);

abrirCamino(18,14,laberinto,false,false,false,true);

abrirCamino(18,16,laberinto,false,false,true,false);

abrirCamino(18,19,laberinto,true,false,false,false);

abrirCamino(18,19,laberinto,false,false,true,false);

abrirCamino(18,18,laberinto,false,false,true,false);

abrirCamino(18,16,laberinto,false,true,false,false);

abrirCamino(19,17,laberinto,false,false,true,false);

abrirCamino(19,18,laberinto,false,false,true,false);

abrirCamino(19,19,laberinto,false,false,true,false);

abrirCamino(19,20,laberinto,false,false,true,false);

abrirCamino(19,20,laberinto,false,false,false,true);

abrirCamino(19,22,laberinto,false,false,true,false);

abrirCamino(19,23,laberinto,false,false,true,false);

abrirCamino(19,24,laberinto,false,false,true,false);

abrirCamino(19,25,laberinto,false,false,true,false);

abrirCamino(19,25,laberinto,false,false,false,true);

abrirCamino(19,27,laberinto,false,false,true,false);

abrirCamino(19,28,laberinto,false,false,false,false);

abrirCamino(19,28,laberinto,false,false,true,false);

abrirCamino(19,29,laberinto,false,false,true,false);

abrirCamino(18,29,laberinto,false,true,false,false);

abrirCamino(18,29,laberinto,false,false,true,false);

abrirCamino(18,28,laberinto,false,false,true,false);

abrirCamino(18,27,laberinto,false,false,true,false);

abrirCamino(18,26,laberinto,false,false,true,false);

abrirCamino(18,25,laberinto,false,false,true,false);

abrirCamino(18,24,laberinto,false,false,true,false);

abrirCamino(18,23,laberinto,false,false,true,false);

abrirCamino(18,22,laberinto,false,false,true,false);

abrirCamino(18,21,laberinto,false,false,true,false);

abrirCamino(18,20,laberinto,true,false,false,false);

abrirCamino(17,21,laberinto,false,true,true,false);

abrirCamino(17,22,laberinto,false,true,true,false);

abrirCamino(17,23,laberinto,false,false,true,false);

abrirCamino(17,24,laberinto,false,false,true,false);

abrirCamino(17,25,laberinto,false,false,true,false);

abrirCamino(17,26,laberinto,false,false,true,false);

abrirCamino(17,26,laberinto,false,false,false,true);

abrirCamino(17,28,laberinto,false,false,true,false);

abrirCamino(16,27,laberinto,false,false,true,false);

abrirCamino(16,26,laberinto,false,false,true,false);

abrirCamino(16,25,laberinto,false,false,true,false);

abrirCamino(16,24,laberinto,false,false,true,false);

abrirCamino(16,23,laberinto,false,false,true,false);

abrirCamino(16,28,laberinto,false,false,true,false);

abrirCamino(17,28,laberinto,true,false,false,false);

abrirCamino(16,29,laberinto,false,false,true,false);

abrirCamino(16,30,laberinto,false,false,true,false);

abrirCamino(16,31,laberinto,false,false,true,false);

abrirCamino(16,32,laberinto,false,false,true,false);

abrirCamino(16,33,laberinto,false,false,true,false);

abrirCamino(16,34,laberinto,false,false,true,false);

abrirCamino(15,34,laberinto,false,true,false,false);

abrirCamino(15,34,laberinto,true,false,false,false);

abrirCamino(14,34,laberinto,true,false,false,false);

abrirCamino(13,34,laberinto,true,false,false,false);

abrirCamino(12,34,laberinto,true,false,false,false);

abrirCamino(12,32,laberinto,false,false,true,false);

abrirCamino(13,32,laberinto,true,false,false,false);

abrirCamino(14,32,laberinto,true,false,false,false);

abrirCamino(15,32,laberinto,true,false,false,false);

abrirCamino(15,33,laberinto,false,false,true,false);

abrirCamino(15,33,laberinto,true,false,false,false);

abrirCamino(14,33,laberinto,true,false,false,false);

abrirCamino(13,33,laberinto,true,false,false,false);

abrirCamino(12,33,laberinto,true,false,false,false);

abrirCamino(11,33,laberinto,true,false,false,false);

abrirCamino(10,34,laberinto,false,false,true,false);

abrirCamino(10,35,laberinto,false,false,true,false);

abrirCamino(10,35,laberinto,true,false,false,false);

abrirCamino(9,35,laberinto,false,false,true,false);

abrirCamino(8,34,laberinto,false,true,false,false);

abrirCamino(8,34,laberinto,true,false,false,false);

abrirCamino(11,35,laberinto,false,false,true,false);

abrirCamino(11,36,laberinto,false,false,true,false);

abrirCamino(11,36,laberinto,true,false,false,true);

abrirCamino(10,36,laberinto,true,false,false,false);

abrirCamino(9,36,laberinto,true,false,false,false);

abrirCamino(8,36,laberinto,false,false,true,false);

abrirCamino(8,35,laberinto,true,false,false,false);

abrirCamino(7,35,laberinto,true,false,false,false);

abrirCamino(5,35,laberinto,false,true,false,false);

abrirCamino(5,35,laberinto,true,false,false,false);

abrirCamino(4,35,laberinto,false,false,true,false);

abrirCamino(4,34,laberinto,true,false,false,false);

abrirCamino(2,34,laberinto,false,true,false,false);

abrirCamino(1,34,laberinto,false,true,false,false);

abrirCamino(1,34,laberinto,true,false,false,false);

abrirCamino(0,35,laberinto,false,false,true,false);

abrirCamino(0,36,laberinto,false,false,true,false);

abrirCamino(0,37,laberinto,false,false,true,false);

abrirCamino(6,34,laberinto,false,true,false,false);

abrirCamino(6,34,laberinto,true,false,false,false);

abrirCamino(5,34,laberinto,false,false,true,false);

abrirCamino(5,33,laberinto,true,false,false,false);

abrirCamino(4,33,laberinto,true,false,false,false);

abrirCamino(3,33,laberinto,false,false,true,false);

abrirCamino(3,32,laberinto,true,false,false,false);

abrirCamino(2,32,laberinto,true,false,false,false);

abrirCamino(1,32,laberinto,true,false,false,false);

abrirCamino(0,33,laberinto,false,false,true,false);

abrirCamino(1,33,laberinto,true,false,false,false);

abrirCamino(2,33,laberinto,true,false,false,false);

abrirCamino(4,32,laberinto,true,false,false,false);

abrirCamino(5,32,laberinto,true,false,false,false);

abrirCamino(6,32,laberinto,true,false,false,false);

abrirCamino(6,33,laberinto,false,false,true,false);

abrirCamino(7,33,laberinto,true,false,false,false);

abrirCamino(7,33,laberinto,false,false,true,false);

abrirCamino(8,32,laberinto,true,false,false,true);

abrirCamino(9,33,laberinto,true,false,false,false);

abrirCamino(9,32,laberinto,false,true,false,true);

abrirCamino(11,32,laberinto,true,false,false,false);

abrirCamino(2,37,laberinto,true,false,false,false);

abrirCamino(1,37,laberinto,true,false,false,false);

abrirCamino(2,38,laberinto,false,false,true,false);

abrirCamino(2,38,laberinto,false,true,false,false);

abrirCamino(3,38,laberinto,false,true,false,false);

abrirCamino(4,38,laberinto,false,false,true,false);

abrirCamino(3,37,laberinto,false,false,true,false);

abrirCamino(3,36,laberinto,true,false,false,false);

abrirCamino(2,36,laberinto,true,false,false,false);

abrirCamino(1,36,laberinto,false,false,true,false);

abrirCamino(2,35,laberinto,true,false,false,false);

abrirCamino(3,35,laberinto,true,false,false,false);

abrirCamino(4,36,laberinto,true,false,false,false);

abrirCamino(5,36,laberinto,true,false,false,false);

abrirCamino(3,38,laberinto,false,false,true,false);

abrirCamino(6,36,laberinto,true,false,false,false);

abrirCamino(6,37,laberinto,false,false,true,false);

abrirCamino(6,37,laberinto,true,false,false,false);

abrirCamino(5,38,laberinto,false,false,true,false);

abrirCamino(5,39,laberinto,false,false,true,false);

abrirCamino(5,39,laberinto,true,false,false,false);

abrirCamino(4,39,laberinto,true,false,false,false);

abrirCamino(3,39,laberinto,true,false,false,false);

abrirCamino(2,39,laberinto,true,false,false,false);

abrirCamino(1,39,laberinto,true,false,false,false);

abrirCamino(0,39,laberinto,false,false,true,false);

abrirCamino(1,38,laberinto,true,false,false,false);

abrirCamino(7,37,laberinto,false,false,true,false);

abrirCamino(7,36,laberinto,true,false,false,false);

abrirCamino(7,38,laberinto,false,false,true,false);

abrirCamino(7,38,laberinto,true,false,false,false);

abrirCamino(6,39,laberinto,false,true,true,false);

abrirCamino(8,39,laberinto,true,false,false,false);

abrirCamino(9,39,laberinto,false,false,false,false);

abrirCamino(9,39,laberinto,true,false,false,false);

abrirCamino(10,39,laberinto,true,false,false,false);

abrirCamino(11,39,laberinto,true,false,false,false);

abrirCamino(12,39,laberinto,true,false,false,false);

abrirCamino(12,39,laberinto,false,false,false,false);

abrirCamino(12,39,laberinto,false,false,false,false);

abrirCamino(13,39,laberinto,true,false,false,false);

abrirCamino(13,39,laberinto,false,true,false,false);

abrirCamino(15,39,laberinto,false,false,true,false);

abrirCamino(15,38,laberinto,false,false,true,false);

abrirCamino(14,38,laberinto,true,false,false,false);

abrirCamino(14,39,laberinto,false,false,true,false);

abrirCamino(12,38,laberinto,false,true,false,false);

abrirCamino(12,38,laberinto,true,false,false,false);

abrirCamino(11,38,laberinto,true,false,false,false);

abrirCamino(10,38,laberinto,false,false,true,false);

abrirCamino(10,38,laberinto,false,false,true,false);

abrirCamino(10,37,laberinto,true,false,false,false);

abrirCamino(8,37,laberinto,false,true,false,true);

abrirCamino(9,38,laberinto,true,false,false,false);

abrirCamino(14,38,laberinto,false,false,true,false);

abrirCamino(14,37,laberinto,true,false,false,false);

abrirCamino(13,37,laberinto,false,false,false,false);

abrirCamino(13,37,laberinto,true,false,false,false);

abrirCamino(15,39,laberinto,true,false,false,false);

abrirCamino(12,37,laberinto,false,false,true,false);

abrirCamino(12,35,laberinto,false,true,false,true);

abrirCamino(14,35,laberinto,true,false,false,false);

abrirCamino(15,35,laberinto,true,false,false,false);

abrirCamino(15,35,laberinto,false,true,false,false);

abrirCamino(16,35,laberinto,false,true,false,false);

abrirCamino(17,35,laberinto,false,true,false,false);

abrirCamino(18,34,laberinto,false,false,false,true);

abrirCamino(18,34,laberinto,false,false,true,false);

abrirCamino(18,33,laberinto,false,false,true,false);

abrirCamino(19,32,laberinto,true,false,false,false);

abrirCamino(19,32,laberinto,false,false,true,false);

abrirCamino(18,32,laberinto,true,false,false,false);

abrirCamino(17,33,laberinto,false,true,true,false);

abrirCamino(17,34,laberinto,false,false,true,false);

abrirCamino(17,32,laberinto,false,false,true,false);

abrirCamino(17,31,laberinto,false,false,true,false);

abrirCamino(17,30,laberinto,false,false,true,false);

abrirCamino(18,31,laberinto,false,false,true,false);

abrirCamino(18,30,laberinto,true,false,false,false);

abrirCamino(19,30,laberinto,true,false,false,false);

abrirCamino(19,33,laberinto,false,false,true,false);

abrirCamino(19,34,laberinto,false,false,true,false);

abrirCamino(19,35,laberinto,false,false,true,false);

abrirCamino(19,36,laberinto,false,false,true,false);

abrirCamino(19,37,laberinto,false,false,true,false);

abrirCamino(19,38,laberinto,false,false,true,false);

abrirCamino(14,36,laberinto,true,false,false,false);

abrirCamino(14,36,laberinto,false,true,false,false);

abrirCamino(16,36,laberinto,true,false,false,false);

abrirCamino(17,36,laberinto,false,false,false,false);

abrirCamino(17,36,laberinto,false,true,false,false);

abrirCamino(17,36,laberinto,true,false,false,false);

abrirCamino(18,37,laberinto,false,false,true,false);

abrirCamino(18,37,laberinto,true,false,false,false);

abrirCamino(19,39,laberinto,false,false,true,false);

abrirCamino(19,39,laberinto,true,false,false,false);

abrirCamino(18,39,laberinto,true,false,false,false);

abrirCamino(17,39,laberinto,true,false,false,false);

abrirCamino(16,39,laberinto,false,false,true,false);

abrirCamino(16,38,laberinto,false,false,true,false);

abrirCamino(17,38,laberinto,true,false,false,false);

abrirCamino(17,38,laberinto,false,true,false,false);

abrirCamino(18,38,laberinto,false,false,true,false);

abrirCamino(16,8,laberinto,false,false,true,false);

abrirCamino(16,6,laberinto,false,false,false,true);

abrirCamino(16,6,laberinto,false,false,true,false);

abrirCamino(16,5,laberinto,false,false,true,false);

abrirCamino(16,4,laberinto,false,false,false,false);

abrirCamino(16,4,laberinto,false,false,true,false);

abrirCamino(16,3,laberinto,false,false,true,false);

abrirCamino(16,1,laberinto,false,false,false,true);

abrirCamino(16,1,laberinto,false,false,true,false);

abrirCamino(16,0,laberinto,false,true,false,false);

abrirCamino(17,1,laberinto,false,false,true,false);

abrirCamino(17,2,laberinto,false,false,true,false);

abrirCamino(18,2,laberinto,true,false,false,false);

abrirCamino(18,2,laberinto,false,false,true,false);

abrirCamino(18,1,laberinto,false,false,true,false);

abrirCamino(19,0,laberinto,true,false,false,false);

abrirCamino(19,1,laberinto,false,false,true,false);

abrirCamino(19,1,laberinto,false,false,false,true);

abrirCamino(19,3,laberinto,false,false,true,false);

abrirCamino(19,3,laberinto,true,false,false,false);

abrirCamino(18,3,laberinto,true,false,false,false);

abrirCamino(17,3,laberinto,false,false,false,true);

abrirCamino(17,4,laberinto,false,false,false,true);

abrirCamino(17,6,laberinto,false,false,true,false);

abrirCamino(17,6,laberinto,false,false,false,true);

abrirCamino(18,7,laberinto,true,false,false,false);

abrirCamino(18,7,laberinto,false,false,true,false);

abrirCamino(18,6,laberinto,false,false,true,false);

abrirCamino(18,5,laberinto,false,false,true,false);

abrirCamino(19,4,laberinto,true,false,false,false);

abrirCamino(19,5,laberinto,false,false,true,false);

abrirCamino(19,5,laberinto,false,false,false,true);

abrirCamino(19,7,laberinto,false,false,true,false);

abrirCamino(19,8,laberinto,false,false,true,false);

abrirCamino(19,9,laberinto,false,false,true,false);

abrirCamino(19,10,laberinto,false,false,true,false);

abrirCamino(19,11,laberinto,false,false,true,false);

abrirCamino(19,12,laberinto,false,false,true,false);

abrirCamino(19,13,laberinto,false,false,false,false);

abrirCamino(19,14,laberinto,false,false,true,false);

abrirCamino(19,13,laberinto,false,false,true,false);

abrirCamino(19,15,laberinto,false,false,true,false);
}
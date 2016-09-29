//llena la matriz con indicadores de cuantas minas hay alrededor de una caja
function relMatrix(m_mina, val_mina){
	var numMinas = 0;
	for(var y=0; y<m_mina.length; y++){
		for(var x=0; x<m_mina[y].length; x++){
			if( m_mina[y][x] == 0 ){
				if( x > 0 & y > 0 )
					if( m_mina[y-1][x-1] == val_mina ) numMinas++;
				if( x < m_mina[y].length-1 & y > 0 )
					if( m_mina[y-1][x+1] == val_mina ) numMinas++;
				if( x > 0 & y < m_mina.length-1 )
					if( m_mina[y+1][x-1] == val_mina ) numMinas++;
				if( x < m_mina[y].length-1 & y < m_mina.length-1 )
					if( m_mina[y+1][x+1] == val_mina ) numMinas++;
				if( x < m_mina[y].length-1 )
					if( m_mina[y][x+1] == val_mina) numMinas++;
				if( x > 0 )
					if( m_mina[y][x-1] == val_mina ) numMinas++;
				if( y < m_mina.length-1 )
					if( m_mina[y+1][x] == val_mina ) numMinas++;
				if( y > 0 )
					if( m_mina[y-1][x] == val_mina ) numMinas++;
				m_mina[y][x] = numMinas;
				numMinas = 0;
			}
		}
	}
}

//filas = No. de filas, columnas = No. columnas, minas = No. de minas
function Buscaminas(filas, columnas, minas){
	if( filas*columnas > minas ){ //tiene q haber mas terreno q minas
		this.MINA = 9; //número q representa una mina
		this.MINAS = minas; //el número de minas en el tablero
		this.FILAS = filas;
		this.COLUMNAS = columnas;
		this.TAMANIO = filas*columnas;
		this.DESPEJADO = 0; //total de cajas despejadas
		this.TABLERO = fillMatrixZero( newMatrix(filas,columnas) );
		this.ESTADOS = fillMatrixZero( newMatrix(filas,columnas) );
		this.OCULTO  = 0; //caja no mostrada
		this.VER = 1; //caja lista para ser mostrada
		this.VISTO = 2; //caja ya mostrada
		this.BANDERA = 3; //caja q muestra una bandera
		fillRandValMatrix(this.TABLERO,this.MINA,this.MINAS);
		relMatrix(this.TABLERO,this.MINA);
		this.JUGANDO = true; //indica q estamos en una partida
		this.GANADO = false; //indica q terminamos la partida con victoria (true) o derrota (false)
	}
}
Buscaminas.prototype.check = function(f,c){
	if( this.ESTADOS[f][c] == this.OCULTO	 ){
		this.ESTADOS[f][c] = this.VER;
		this.DESPEJADO++;
		if( this.DESPEJADO == (this.TAMANIO-this.MINAS) ){
			this.JUGANDO = false; this.GANADO = true;
		}else{
			if( this.TABLERO[f][c] == 0 ){
				for(var i=Math.max(0,f-1); i<=Math.min(this.FILAS-1,f+1); i++){
					for(var j=Math.max(0,c-1); j<=Math.min(this.COLUMNAS-1,c+1); j++){
						this.check(i,j);
					}
				}
			}else if( this.TABLERO[f][c] == this.MINA ){
				this.JUGANDO = false;
			}
		}
	}
}

var path = '/static/img/Buscaminas/';
var mina_roja = 'mina-r.png';
var mina = 'mina.png';
var bandera = 'bandera.png';
var tecla = false;
var jugando = false;
var filas = 16;
var columnas = 30;
var minas = 9;
var bm = null;
var crono = new Cronometro("bm_tiempo");
var divbm0 = document.getElementById('bm0');

function crearTablero(){
	var divbm = document.getElementById('bm');
	if( jugando ){
		jugando = false;
		for(var i=0; i<filas; i++){
			var f = document.getElementById('fila'+i);
			divbm.removeChild(f);
		}
		crearTablero();
	}else{
		var bm_n = document.getElementById("nivel").value*1;
		if( bm_n == 1 ){
			filas = 8; columnas = 8; minas = 10;
		}else if( bm_n == 2 ){
			filas = 16; columnas = 16; minas = 40;
		}else if( bm_n == 3 ){
			filas = 16; columnas = 30; minas = 99;
		}
		bm = new Buscaminas(filas,columnas,minas);
		for(var i = 0; i < bm.FILAS; i++){
			var fila = document.createElement("div");
			fila.id = "fila"+i;
			fila.setAttribute("class","bcfila");
			divbm.appendChild(fila);
	    for(var j = 0; j < bm.COLUMNAS; j++){
	      var div = document.createElement("div");
	      div.id = i + "-" + j;
	      div.setAttribute("class","bccaja");
	      div.setAttribute("name","namecaja");
	      div.onclick = clickCaja;
	      fila.appendChild(div);
	    }
	  }
	  divbm0.style.display = "block";
	  jugando = true;
	  crono.reiniciar();
	}
}

function clickCaja(e){
	var fc = this.getAttribute("id").split("-");
	var f = fc[0]*1; var c = fc[1]*1;
	if( tecla ){
		if( bm.ESTADOS[f][c] == bm.BANDERA ){
			this.removeChild( document.getElementById("b"+f+"-"+c) );
			bm.ESTADOS[f][c] = bm.OCULTO;
		}else{
			this.innerHTML = "<img id='b"+f+"-"+c+"' src='"+path+bandera+"' class='bcmina'></img>";
			bm.ESTADOS[f][c] = bm.BANDERA;
		}
	}else{
		bm.check(f,c);
		mostrarTablero();
		if( !bm.JUGANDO ){
			if( bm.GANADO )
				hasGanado();
			else
				hasPerdido(f,c);
		}
	}
}

function hasGanado(){
	quitarEvento();
	colocarBanderas();
	crono.detener();
	alert("Has ganado");
	guardarPunteo(500,reloj.getVal(),"nivel");
}
function hasPerdido(f,c){
	quitarEvento();
	mostrarBombas(f,c);
	crono.detener();
	alert("Has perdido");
}
function colocarBanderas(){
	for(var i=0; i<bm.FILAS; i++){
		for(var j=0; j<bm.COLUMNAS; j++){
			var num = bm.TABLERO[i][j];
			if( num == bm.MINA & bm.ESTADOS[i][j] != bm.BANDERA ){
				var caja = document.getElementById(i+"-"+j);
				caja.innerHTML = "<img src='"+path+bandera+"' class='bcmina'></img>";
			}
		}
	}
}
function mostrarBombas(f,c){
	for(var i=0; i<bm.FILAS; i++){
		for(var j=0; j<bm.COLUMNAS; j++){
			var num = bm.TABLERO[i][j];
			if( num == bm.MINA ){
				var caja = document.getElementById(i+"-"+j);
				if( f==i & c==j ){
					caja.innerHTML = "<img src='"+path+mina_roja+"' class='bcmina'></img>";
				}else{
					caja.innerHTML = "<img src='"+path+mina+"' class='bcmina'></img>";
				}
			}
		}
	}
}

function quitarEvento(){
	var cajas = document.getElementsByName("namecaja");
	for(var i=0; i<cajas.length; i++)
		cajas[i].onclick = null;
}
function mostrarTablero(){
	for(var i=0; i<bm.FILAS; i++){
		for(var j=0; j<bm.COLUMNAS; j++){
			if( bm.ESTADOS[i][j] == bm.VER ){
				bm.ESTADOS[i][j] = bm.VISTO;
				var caja = document.getElementById(i+"-"+j);
				caja.style.backgroundColor = "#ccc";
				caja.onclick = null;
				var num = bm.TABLERO[i][j];
				if( num>0 & num<9 ){
					caja.appendChild( document.createTextNode(num) );
				}
			}
		}
	}
}

function pressDown(){
	tecla = true;
	//console.log("down");
}
function pressUp(){
	tecla = false;
	//console.log("up");
}

//crearTablero();
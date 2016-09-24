var preg;
// funcion constructora para generar palabras
function palabras() {
	this.pregunta =[];
	this.elegida="";
	this.respuesta=[];
	this.cont = 0;
	
	// palabras para el nivel 1
	this.palabras = new Array(10);
	this.palabras[0] = "hello";
	this.palabras[1] = "after";
	this.palabras[2] = "boy";
	this.palabras[3] = "car";
	this.palabras[4] = "great";
	this.palabras[5] = "house";
	this.palabras[6] = "sure";
	this.palabras[7] = "nigth";
	this.palabras[8] = "people";
	this.palabras[9] = "apple";

	this.palabras2 = new Array(10);
	this.palabras2[0] = "university";
	this.palabras2[1] = "obesity";
	this.palabras2[2] = "gravity";
	this.palabras2[3] = "fingers";
	this.palabras2[4] = "accident";
	this.palabras2[5] = "happy";
	this.palabras2[6] = "actually";
	this.palabras2[7] = "address";
	this.palabras2[8] = "adjective";
	this.palabras2[9] = "hamburger";

	this.palabras3 = new Array(10);
	this.palabras3[0] = "restaurant";
	this.palabras3[1] = "research";
	this.palabras3[2] = "magazine";
	this.palabras3[3] = "chocolate";
	this.palabras3[4] = "comfortable";
	this.palabras3[5] = "corporations";
	this.palabras3[6] = "wednesday";
	this.palabras3[7] = "saturday";
	this.palabras3[8] = "lengthy";
	this.palabras3[9] = "yourselves";

	randVector(this.palabras);
	randVector(this.palabras2);
	randVector(this.palabras3);
};


palabras.prototype.generar = function(nivel) {
	if (nivel == 1) {
		this.respuesta = [];
		this.pregunta = [];
		preg =[];

		this.elegida = this.palabras[this.cont];
		preg = this.elegida.split("");	
		this.formaPregunta(preg);
	}
	if (nivel == 2) {
		this.respuesta = [];
		this.pregunta = [];
		preg =[];

		this.elegida = this.palabras2[this.cont];
		preg = this.elegida.split("");	
		this.formaPregunta(preg);
	}
	if (nivel == 3) {
		this.respuesta = [];
		this.pregunta = [];
		preg =[];

		this.elegida = this.palabras3[this.cont];
		preg = this.elegida.split("");	
		this.formaPregunta(preg);
	}
	
};


palabras.prototype.formaPregunta = function(pregunta){
	for (var i = 0; i < pregunta.length; i++) {
		this.pregunta[i] = "__ ";
	}
};



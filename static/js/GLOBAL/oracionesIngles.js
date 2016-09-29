
// constructor para crear trivias de ingles
function oracionesIngles() {
	this.pregunta = "";
	this.respuesta = new Array(3); 
	this.verdadera = -1;
	this.correcta = "";

	this.verbos1 = ["i'm","you're","she's","he's","it's","they're","we're"];
	this.oraciones1 = new Array(10);
	this.oraciones1[0] = "hello i'm Mario.";
	this.oraciones1[1] = "mario it's crazy.";
	this.oraciones1[2] = "she's my girlfriend.";
	this.oraciones1[3] = "Mario and i we're counsis.";
	this.oraciones1[4] = "she's a young woman.";
	this.oraciones1[5] = "he's a businessman.";
	this.oraciones1[6] = "Mario he's a pilot.";
	this.oraciones1[7] = "it's a good movie. ";
	this.oraciones1[8] = "it's cold.";
	this.oraciones1[9] = "he's my boyfriend";

	this.verbos2 = ["have","has","had"];
	this.oraciones2 = new Array(10);
	this.oraciones2[0] = "he has to lend us the money which we need.";
	this.oraciones2[1] = "You have to call her tomorrow.";
	this.oraciones2[2] = "she has a beautifull hair.";
	this.oraciones2[3] = "We have to be at the meeting next week.";
	this.oraciones2[4] = "You have to stay there all summer.";
	this.oraciones2[5] = "She has to send it by airmail.";
	this.oraciones2[6] = "You have to wait in his office.";
	this.oraciones2[7] = "He has a lot of friends.";
	this.oraciones2[8] = "She has to take the children with her to Puerto Barrios.";
	this.oraciones2[9] = "She has to be back by noon.";

	this.verbos3 = ["in","on","at"];
	this.oraciones3 = new Array(10);
	this.oraciones3[0] = "i live in Guatemala";
	this.oraciones3[1] = "The cat is in the box.";
	this.oraciones3[2] = "in this box.";
	this.oraciones3[3] = "My parents arrive in Guatemala";
	this.oraciones3[4] = "He is at home.";
	this.oraciones3[5] = "I always visit my sister at work.";
	this.oraciones3[6] = "The pen is on the table.";
	this.oraciones3[7] = "in the morning.";
	this.oraciones3[8] = "I am on the bus";
	this.oraciones3[9] = "He runs on Mondays and Fridays. ";
	this.cont = 0;
	// desordena las oraciones.
	randVector(this.oraciones1);
	randVector(this.oraciones2);
	randVector(this.oraciones3);
	
};
 
//metodo que genera oraciones en ingles dependiendo del nivel
oracionesIngles.prototype.generar = function(nivel) {
	if (nivel == 1) {
		// contador para recorrer las oraciones en orden
		

		var pregunta = this.oraciones1[this.cont].split(' ');

		// me devuelve en que indice de la oracion esta el verbo.
		var index = esVerbo(pregunta,this.verbos1);
		// formala la pregunta quitando el verbo
		this.pregunta="";
		this.formaPreg(index,pregunta);
	    //asignandole vervos a las tres posibles respuestas.
		this.respuesta[0] = pregunta[index];
		this.asigna(this.verbos1);
		// almacena la respuesta correcta
		this.correcta = this.respuesta[0];
		// desordena el vector de posibles respuestas
		randVector(this.respuesta);
		// se recorre el vector para obtener la nueva posicion de la respuesta verdadera.
		for (var i = 0; i < this.respuesta.length; i++) {
			if (this.correcta == this.respuesta[i]) {
				this.verdadera = i;
				break;
			}	
		}	
	}

	
	if (nivel == 2) {
		
			
		
		var pregunta = this.oraciones2[this.cont].split(' ');

		// me devuelve en que indice de la oracion esta el verbo.
		var index = esVerbo(pregunta,this.verbos2);
		// formala la pregunta quitando el verbo
		this.pregunta="";
		this.formaPreg(index,pregunta);

		//asignandole vervos a las tres posibles respuestas.
		this.respuesta[0] = pregunta[index];
		this.asigna(this.verbos2);

		// almacena la respuesta correcta
		this.correcta = this.respuesta[0];
		// desordena el vector de posibles respuestas
		randVector(this.respuesta);
		// se recorre el vector para obtener la nueva posicion de la respuesta verdadera.
		for (var i = 0; i < this.respuesta.length; i++) {
			if (this.correcta == this.respuesta[i]) {
				this.verdadera = i;
				break;
			}	
		}
		
	}

	

	if (nivel == 3) {
		

		var pregunta = this.oraciones3[this.cont].split(' ');
		// me devuelve en que indice de la oracion esta el verbo.
		var index = esVerbo(pregunta,this.verbos3);
		// formala la pregunta quitando el verbo
		this.pregunta="";
		this.formaPreg(index,pregunta);

		//asignandole vervos a las tres posibles respuestas.
		this.respuesta[0] = pregunta[index];
		this.asigna(this.verbos3);

		// almacena la respuesta correcta
		this.correcta = this.respuesta[0];
		// desordena el vector de posibles respuestas
		randVector(this.respuesta);
		// se recorre el vector para obtener la nueva posicion de la respuesta verdadera.
		for (var i = 0; i < this.respuesta.length; i++) {
			if (this.correcta == this.respuesta[i]) {
				this.verdadera = i;
				break;
			}	
		}
		
	}
	
};

esVerbo = function(vector,verbos){
	for (var i = 0; i < vector.length; i++) {
        for (var j = 0; j < verbos.length; j++){
           if (vector[i] == verbos[j]) {
           	return i;
           }
        }       	
    }
    return -1 ;
}

// metodo para formar la pregunta y el vervo lo oculta.
oracionesIngles.prototype.formaPreg = function(index,pregunta){
	for(var i =0; i< pregunta.length; i++){
			if ( i == index) {
				this.pregunta +=" ____ ";
			}else{
				this.pregunta +="  ";
				this.pregunta += pregunta[i];

			}
		}


};

// metodo que asigna aleatoriamente verbos para rellenar las pocisiones de las respuestas.
oracionesIngles.prototype.asigna = function(verbo){

	while(true){
			var ale = aleat(0 , verbo.length - 1);
			var aux = verbo[ale];
			if (aux != this.respuesta[0]) {
				this.respuesta[1] = aux;
                break; 
			}
		}
		while(true){
			var a = aleat(0 , verbo.length - 1);
			var aux1 = verbo[a];
			if (aux1 != this.respuesta[0] & aux1 != this.respuesta[1]) {
				this.respuesta[2] = aux1;
				break;
			}

		}
};


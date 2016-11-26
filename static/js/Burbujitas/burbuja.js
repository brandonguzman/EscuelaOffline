size(600,400);


var numero1 = Math.floor((Math.random() *4));
var numero2 = Math.floor((Math.random() *4));
var Resultado;
var Gravedad_P ;
var movimiento_P;  
var Gravedad_O ;
var movimiento_O;
var Gravedad_A ;
var movimiento_A;        
var comprueba_P = false;
var comprueba_E=false;
var jugar = false;
var objeto;
var pelota;
var burbuja;
var mate;
var nivel;
var O_punteo;
var pantalla=1;
var aux;
var sonido;
var operando = new Array(3);
operando[0]='+';
operando[1]='-';
operando[2]='*';
var cintento=0;
var end2;
PImage Fin = loadImage("/static/img/Burbujitas/fin.jpg");

function aleat(a,b){
  return Math.round( Math.random() * (b-a) ) + a;
}

figura = function(movX, movY, altura, ancho, texto,imagen){
this.altura = altura;
this.ancho = ancho;
this.movY = movY;
this.movX = movX;
this.texto = texto;
this.imagen = imagen;
};

function TriviaMate(){
    this.op1= 0; this.op2= 0; this.op3= 0; this.r= 0;
    this.pregunta= '';
    
    // ejemplo de llamada a la función : init('*', 5);
    
};
function E_punteo(){
	this.punteo = 0;
	this.error = 0;
}


TriviaMate.prototype.init=function(oper,dif){
	 //dif = dificultad (1-10), oper = operación matemática
        var oper1 = Math.round(Math.random()*10*dif*dif); //primer operando
        var oper2 = Math.round(Math.random()*10*dif*dif); //segundo operando
        var r = 0;
        if (oper == '+'){ //para sumas
            r = oper1 + oper2;
            this.pregunta = oper1 + ' + ' + oper2 +' =';
        }else if(oper == '-'){ //para restas
            r = oper1 - oper2;
            this.pregunta = oper1 + ' - ' + oper2 +' =';
        }else if(oper == '*'){ //para multiplicaciones
            r = oper1 * oper2;
            this.pregunta = oper1 + ' * ' + oper2 +' =';
        }else if(oper == '/'){ //para divisiones
            r = oper1 / oper2;

            this.pregunta = oper1 + ' / ' + oper2 +' =';
        }
       
        this.r = r;
        var op = [r,r,r];
        op[0]= r; op[1] = r; op[2] = r;
        var salir = false;
        while(!salir){ //while para elegir un numero aleatorio para mostrar como respuesta
            if(op[0] === r){
                op[0] = op[0] - Math.round(Math.random()*10);
            }else{ salir = true; }
        }
        salir = false;
        while(!salir){ //while para elegir un numero aleatorio para mostrar como respuesta
            if(op[1] === r){
                op[1] = op[1] + Math.round(Math.random()*10);
            }else{ salir = true; }
        }
        for(var i=0; i<3; i++){ //'barajamos' las 3 opciones de respuesta aleatoriamente
            var aux;
            var aleat = Math.round(Math.random()*2);
            aux = op[aleat];
            op[aleat] = op[i];
            op[i] = aux;
        }
        this.op1 = op[0]; this.op2 = op[1]; this.op3 = op[2]; //seteamos las variables 'op#'
    };


creaobjeto = function(){
var asignaoperando = aleat(0,operando.length - 1);
 mate = new TriviaMate();
 mate.init(operando[asignaoperando],nivel);
 objeto = new figura(310,10,80, 80, mate.op1,loadImage("/static/img/Burbujitas/burbuja.png"));
 pelota = new figura(150,10,80, 80, mate.op2,loadImage("/static/img/Burbujitas/burbuja.png")); 
 burbuja = new figura(450, 10,80, 80, mate.op3,loadImage("/static/img/Burbujitas/burbuja.png"));
 end2 = new figura(0, 0,600,400," ",loadImage("/static/img/Burbujitas/bubu.jpg"));
 
};
O_punteo = new E_punteo();

figura.prototype.comprobarClick = function(x,y){
		
	if( x > this.movX & x < this.movX+60 & y>this.movY & y< this.movY+70){
		
		    if(mate.r==this.texto){
		    			comprueba_P = true;
		    			
		    			sonido = document.getElementById('exito');
		    			sonido.play();
		    			
		    			ValidaPunteo();
		    			fill(255,0,0);
					 	creaobjeto();
					 	cintento+=1;
					 	 } else if(mate.r!=this.texto){
					 	comprueba_E = true;
					 	
					 	ValidaPunteo();
 						
 						sonido = document.getElementById('error');
		    			sonido.play();
 							
 							this.imagen= -1;
 							this.texto ='';
 							 }
   	      }	

};



seleccion = function(){
	nivel = document.getElementById('nivel').value;
	document.getElementById('micanvas').style.display='block';
     if(nivel ==1){
   	 jugar = true;
   	creaobjeto();
   	O_punteo.punteo= 0;
   	O_punteo.error = 0;
   		
   		
   }
   if(nivel ==2){
   	nivel = nivel - 0.5;
   	jugar = true;
   	creaobjeto();
   	  	O_punteo.punteo= 0;
    	O_punteo.error = 0;
 			
         	
   }
   if(nivel == 3){
   	nivel = nivel-1.5;
   	jugar = true;
   	creaobjeto();
 	O_punteo.punteo= 0;
    O_punteo.error = 0;  	
  			
   }
  
};

 ValidaPunteo = function(){
	if (comprueba_P==true){
		O_punteo.punteo = O_punteo.punteo + 5;	
		
		comprueba_P =false;
		
	}else if(comprueba_E==true){
		
		O_punteo.punteo = O_punteo.punteo - 2;
    	comprueba_E =false;
		
	}
	if(O_punteo.punteo<0){
		O_punteo.punteo=0;
	}
	
};

figura.prototype.dibuja = function() {
     
	//noStroke();
	//fill(168, 201, 250);	
	image(this.imagen,this.movX,this.movY,this.altura,this.ancho);
	//ellipse (this.movX,this.movY, this.altura, this.ancho);
	fill(0);
	textSize(25);
	text(this.texto, this.movX+17, this.movY+40);

    };


var mover_D = function(bubble,nivel){
 
 if( bubble.movY >340){
	   
	   Gravedad_O -=nivel;

} else if( bubble.movY <11){
	
	Gravedad_O =nivel;
	
}   
if ( bubble.movY >340){
	movimiento_O +=nivel;
	
} else if(bubble.movX<10){
	movimiento_O = nivel;
	
}
if (bubble.movX >530){
	movimiento_O -=nivel;
}
bubble.movY= bubble.movY + Gravedad_O;
bubble.movX = bubble.movX+ movimiento_O;

};

var mover_I = function(bubble,nivel){
      

	if( bubble.movY >340){
	Gravedad_P -=nivel;
	
}else if( bubble.movY <11){
	Gravedad_P =nivel;
	
}
 if ( bubble.movY >340){
	movimiento_P -=nivel;
	
} else if(bubble.movX<11){
	movimiento_P = nivel;
	
}
if (bubble.movX <11){
	movimiento_P +=nivel;
}  	
if (bubble.movX>530){
	movimiento_P -=nivel;
} 

bubble.movY= bubble.movY + Gravedad_P;
bubble.movX = bubble.movX + movimiento_P;

};


var mover_A = function(bubble,nivel){

	if( bubble.movY <11){
	Gravedad_A = nivel;
	
}else if( bubble.movY >340){
	Gravedad_A -=nivel;
	
}
 if ( bubble.movY <11){
	movimiento_A +=nivel-0.3;
	
} else if(bubble.movX<11){
	movimiento_A = nivel;
	
}
if (bubble.movX <11){
	movimiento_A =nivel;
}  	
if (bubble.movX>540){
	movimiento_A -=nivel;
}
bubble.movY= bubble.movY + Gravedad_A;
bubble.movX = bubble.movX + movimiento_A;
};

finalizar = function(){
    		if(cintento==10){	
    			
	    		image(Fin,0,0,600,400);
	    		PFont fontA = loadFont("Jokerman");
	    		textFont(fontA,33);
	    		text("JUEGO", 400,85);
	    		text("TERMINADO", 60,200);
	    		PFont fontA = loadFont("Jokerman");
	    		textFont(fontA,25);
	    		text("SU PUNTEO FUE:   "+O_punteo.punteo +"  Puntos", 130,320);
	    		guardarPunteo(3000,O_punteo.punteo,"nivel",null);
				jugar=false;
			}	
}    			
draw = function(){
 if(jugar){
	    //background(151, 244, 247);
 	end2.dibuja();
 	objeto.dibuja();
	burbuja.dibuja();
	pelota.dibuja();
	mover_A(pelota,nivel - 0.3);
	mover_I(objeto,nivel - 0.3);
	mover_D(burbuja,nivel - 0.3);
	
	/*if(cintento==3){
		Fin.dibuja();
		guardarPunteo(1000,O_punteo.punteo,"nivel",null);

		jugar = false;
	}*/
	fill(0);
	textSize(18);
	text("Seleccione la Respuesta Correcta de :" + mate.pregunta,200,15);
	textSize(18);
	text("Punteo"+" "+O_punteo.punteo, 6,15);
	finalizar();
			 	
	}

};
		
mouseClicked = function(){
	
	objeto.comprobarClick(mouseX, mouseY);
	pelota.comprobarClick(mouseX, mouseY);
	burbuja.comprobarClick(mouseX, mouseY);
};

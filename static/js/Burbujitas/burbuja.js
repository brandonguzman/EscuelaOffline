size(600,400);
background(151, 244, 247);

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

function aleat(a,b){
  return Math.round( Math.random() * (b-a) ) + a;
}

figura = function(movX, movY, altura, ancho, texto){
this.altura = altura;
this.ancho = ancho;
this.movY = movY;
this.movX = movX;
this.texto = texto;
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
 objeto = new figura(310,40,100, 100, mate.op1);
 pelota = new figura(150, 40,100, 100, mate.op2); 
 burbuja = new figura(450, 40, 100, 100, mate.op3);
 
};
O_punteo = new E_punteo();

figura.prototype.comprobarClick = function(x,y){
		
	if( x > this.movX-40 & x < this.movX+40 & y>this.movY-40 & y< this.movY+40){
		
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
 							this.altura= 0;
 							this.ancho = 0;
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
   	jugar = true;
   	creaobjeto();
   	  	O_punteo.punteo= 0;
    	O_punteo.error = 0;
 			
         	
   }
   if(nivel == 3){
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
     
	noStroke();
	fill(168, 201, 250);	
	ellipse (this.movX,this.movY, this.altura, this.ancho);
	fill(0);
	textSize(25);
	text(this.texto, this.movX-20, this.movY);

    };


var mover_D = function(bubble,nivel){
 
 if( bubble.movY >350){
	   
	   Gravedad_O -=nivel;

} else if( bubble.movY < 50){
	
	Gravedad_O =nivel;
	
}   
if ( bubble.movY >350){
	movimiento_O +=nivel;
	
} else if(bubble.movX<50){
	movimiento_O = nivel;
	
}
if (bubble.movX >550){
	movimiento_O -=nivel;
}
bubble.movY= bubble.movY + Gravedad_O;
bubble.movX = bubble.movX+ movimiento_O;

};

var mover_I = function(bubble,nivel){
      

	if( bubble.movY >350){
	Gravedad_P -=nivel;
	
}else if( bubble.movY < 50){
	Gravedad_P =nivel;
	
}
 if ( bubble.movY >350){
	movimiento_P -=nivel;
	
} else if(bubble.movX<50){
	movimiento_P = nivel;
	
}
if (bubble.movX <50){
	movimiento_P +=nivel;
}  	
if (bubble.movX>550){
	movimiento_P -=nivel;
} 

bubble.movY= bubble.movY + Gravedad_P;
bubble.movX = bubble.movX + movimiento_P;

};


var mover_A = function(bubble,nivel){

	if( bubble.movY <50){
	Gravedad_A = nivel;
	
}else if( bubble.movY >350){
	Gravedad_A -=nivel;
	
}
 if ( bubble.movY <50){
	movimiento_A +=nivel-0.3;
	
} else if(bubble.movX<50){
	movimiento_A = nivel;
	
}
if (bubble.movX <50){
	movimiento_A =nivel;
}  	
if (bubble.movX>550){
	movimiento_A -=nivel;
}
bubble.movY= bubble.movY + Gravedad_A;
bubble.movX = bubble.movX + movimiento_A;
};


draw = function(){
 if(jugar){
	    background(151, 244, 247);
 	
 	objeto.dibuja();
	burbuja.dibuja();
	pelota.dibuja();
	mover_A(pelota,nivel - 0.3);
	mover_I(objeto,nivel - 0.3);
	mover_D(burbuja,nivel - 0.3);

	if(cintento==10){
		alert("Terminaste");
		guardarPunteo(1000,O_punteo.punteo,"nivel",null);
		jugar = false;
	}
	fill(0);
	textSize(18);
	text("Seleccione la Respuesta Correcta de :" + mate.pregunta,200,15);
	textSize(18);
	text("Punteo"+" "+O_punteo.punteo, 6,15);
	
					 	
	}

};
		
mouseClicked = function(){
	objeto.comprobarClick(mouseX, mouseY);
	pelota.comprobarClick(mouseX, mouseY);
	burbuja.comprobarClick(mouseX, mouseY);
};

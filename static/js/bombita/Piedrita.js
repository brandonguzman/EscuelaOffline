	size(600,400);
	background(151, 244, 247);

	var operando = new Array(3);
	operando[0]='+';
	operando[1]='-';
	operando[2]='*';
	var jugar = false;
	var linea1;
	var linea2;	
	var cuadrado;
	var canonX = 270;
	var canonY = 300;
	var balaX= 295;
	var balaY= 300;
	var c=90;
	var img;
	var canon;
	var bala;
	var hon;
	var posicionX;
	var posicionY;
	var lanzar;
	var validaposicion=false;
	var resultado=false;
	var error=0;
	var desierto;
	var lineaY=340;
	var contador=0;
	var auxcont=false;
	var sonido;
	var cielo;
	var lanzamiento;
	var end;
	PImage end2 = loadImage("/static/img/bombita/fin.jpg");
	PImage Malo = loadImage("/static/img/bombita/Malo.png");
	
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

	figura_linea = function(x1,y1,x2,y2){
  		this.x1=x1;
  		this.y1=y1;
  		this.x2=x2;
  		this.y2=y2;
  	};

	function TriviaMate(){
    	this.op1= 0; this.op2= 0; this.op3= 0; this.r= 0;
    	this.pregunta= '';
    };	

    figura_cuadrado = function(x,y,altura,ancho,radio){
    	this.x= x;
    	this.y=y;
    	this.altura = altura;
    	this.ancho = ancho;
    	this.radio = radio;
    }

    function E_punteo(){
	this.punteo = 0;
	this.error = 0;
}
    TriviaMate.prototype.init=function(oper,dif){
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
		objeto = new figura(300,90,50, 50, mate.op1);
		pelota = new figura(150, 90,50, 50, mate.op2); 
		burbuja = new figura(470, 90, 50, 50, mate.op3);
		piedra = new figura(305,310,15,15);
		linea2 = new figura_linea(325,310,330,lineaY);
		linea1 = new figura_linea(285,310,290,lineaY);
		cuadrado = new figura_cuadrado(290,lineaY,40,5,40);
		img = new creaimagen(loadImage("/static/img/bombita/bala.png"),balaX,balaY,25,25);
		hon = new creaimagen(loadImage("/static/img/bombita/HOND.png"),canonX,canonY,70,70);
		desierto = new creaimagen(loadImage("/static/img/bombita/Desert.jpg"),0,0,600,400);
		end = new creaimagen(loadImage("/static/img/bombita/fin.jpg"),0,0,600,400);

	};
		O_punteo = new E_punteo();
	
	seleccion = function(){
		nivel = document.getElementById('nivel').value;
		document.getElementById('micanvas').style.display='block';
     	if(nivel ==1){
   	 		jugar = true;
	   		creaobjeto();
	    	O_punteo.punteo= 0;
	    	contador=0;
	    }
   		if(nivel ==2){
   			jugar = true;
   			creaobjeto();
   			O_punteo.punteo= 0;
   			contador=0;
   	  	}
   		if(nivel == 3){
   			jugar = true;
   			creaobjeto();
   			O_punteo.punteo= 0;
   			contador=0;
   		}
  	};
  	
  	
	
  	figura_linea.prototype.dibuja_linea = function(){
  		noFill();
		stroke(255,255,255);
		strokeWeight(2);
		line(this.x1,this.y1,this.x2,this.y2);
  	}
  	
  	figura_cuadrado.prototype.dibuja_cuadrado = function(){
  		fill(255,255,255);
		stroke(255,255,255);
		strokeWeight(2);
		rect(this.x,this.y,this.altura,this.ancho,this.radio);
  	}
  	figura.prototype.dibuja = function() {
     	noStroke();
		fill(255, 221, 153);	
		ellipse (this.movX,this.movY, this.altura, this.ancho);
		fill(0);
		textSize(15);
		text(this.texto, this.movX-15, this.movY+3);
    };
    creaimagen = function(imagen,imgX, imgY, altura, ancho){
    	this.imagen= imagen;
    	this.imgX = imgX;
    	this.imgY = imgY;
    	this.altura= altura;
    	this.ancho = ancho;
    };
    creaimagen.prototype.dibuja_imagen = function(){
    	image(this.imagen,this.imgX,this.imgY,this.altura,this.ancho);
    }

    choquepared = function(){
    	if(img.imgX<=30 || img.imgY<=10 || img.imgX>=550){
    		img.imgX = balaX;
	    		 	  	img.imgY = balaY;
	    		 	  	linea1.y2= lineaY;
	    		 	  	linea2.y2 = lineaY;
	    		 	  	cuadrado.y=lineaY;
	    		 	  	lanzar= -1;
    	}
    }
    
    validachoque = function(){

    	if(img.imgX>pelota.movX-20 & img.imgX<pelota.movX+20 & img.imgY>pelota.movY-10 & img.imgY<pelota.movY+10){
    			
    		if(mate.r==pelota.texto){
    			resultado=true;
    				if(resultado==true){
	    				sonido = document.getElementById('explosion');
		    			sonido.play();
		    			creaobjeto();
		    			O_punteo.punteo = O_punteo.punteo +5;
		    			auxcont=true;
		    			contador = contador+1;
		    			posicionX=balaX;
		    			posicionY=balaY;
		    			resultado=false;
		    			lanzar=-1;
		    		}	
	    	}	
    	    		
    		else if(mate.r!=pelota.texto){
    				
    			error=true;
    				if(error==true){
	    		 	  sonido = document.getElementById('error');
		    			sonido.play();
	    		 	  O_punteo.punteo = O_punteo.punteo - 2;
	    		 	  if(O_punteo.punteo < 0){
		    				O_punteo.punteo=0;

		    			}
		    			
		    			pelota.altura =0;
		    			pelota.ancho = 0;
		    			pelota.texto='';
		    			auxcont=true;
		    			contador= contador+1;
	    		 	   	img.imgX = balaX;
	    		 	  	img.imgY = balaY;
	    		 	  	linea1.y2= lineaY;
	    		 	  	linea2.y2 = lineaY;
	    		 	  	cuadrado.y=lineaY;
	    		 	  	pelota.movX =-10;
		    			pelota.movY=-10;
	    		 	  	
	    		  	  	lanzar=-1;
	    		 	  	error=false;
		    		}  
    		 //image(Malo,150,90,50,50);
    		 }
    		 
    	}
      // burbuja 2
      if(img.imgX>objeto.movX-20 & img.imgX<objeto.movX+20 & img.imgY>objeto.movY-10 & img.imgY<objeto.movY+10){
    			
    		if(mate.r==objeto.texto){
    			resultado=true;
    				if(resultado==true){
	    				sonido = document.getElementById('explosion');
		    			sonido.play();
		    			
		    			creaobjeto();
		    			O_punteo.punteo = O_punteo.punteo +5;
		    			auxcont=true;
		    			contador= contador+1;
		    			posicionX=balaX;
		    			posicionY=balaY;
		    			resultado=false;
		    			lanzar=-1;
		    		}	
	    	}	
    	    		
    		else if(mate.r!=objeto.texto){
    				
    			error=true;

    				if(error==true){
	    		 	  sonido = document.getElementById('error');
		    			sonido.play();
		    			
	    		 	  O_punteo.punteo = O_punteo.punteo - 2;
	    		 	  if(O_punteo.punteo < 0){
		    				O_punteo.punteo=0;
		    			}
		    			
		    			objeto.altura =0;
		    			objeto.ancho = 0;
		    			objeto.texto='';
		    			auxcont=true;
		    			contador= contador+1;
	    		 	   	img.imgX = balaX;
	    		 	  	img.imgY = balaY;
	    		 	  	linea1.y2= lineaY;
	    		 	  	linea2.y2 = lineaY;
	    		 	  	cuadrado.y=lineaY;
	    		 	  	objeto.movX = -10;
		    			objeto.movY = -10;
	    		 	  	
	    		 	  	lanzar=-1;
	    		 	  	error=false;
		    			
		    		}  
    		  //image(Malo,300,90,50,50);
    		 }
    		 
    	}
    	if(img.imgX>burbuja.movX-25 & img.imgX<burbuja.movX+25 & img.imgY>burbuja.movY-10 & img.imgY<burbuja.movY+10){
    			
    		if(mate.r==burbuja.texto){
    			resultado=true;
    				if(resultado==true){
	    				sonido = document.getElementById('explosion');
		    			sonido.play();
		    			
		    			creaobjeto();
		    			O_punteo.punteo = O_punteo.punteo +5;
		    			auxcont=true;
		    			contador= contador+1;
		    			posicionX=balaX;
		    			posicionY=balaY;
		    			resultado=false;
		    			lanzar=-1;
		    		}	
	    	}	
    	    		
    		else if(mate.r!=burbuja.texto){
    			
    			error=true;
    				if(error==true){
	    		 	  sonido = document.getElementById('error');
		    			sonido.play();
		    			
	    		 	  	O_punteo.punteo = O_punteo.punteo - 2;
	    		 	  	if(O_punteo.punteo < 0){
		    				O_punteo.punteo=0;
		    			}

		    			burbuja.altura =0;
		    			burbuja.ancho = 0;
		    			burbuja.texto='';
		    			auxcont=true;
		    			contador= contador+1;
	    		 	   	img.imgX = balaX;
	    		 	  	img.imgY = balaY;
	    		 	  	linea1.y2= lineaY;
	    		 	  	linea2.y2 = lineaY;
	    		 	  	cuadrado.y=lineaY;
	    		 	  	burbuja.movX = -10;
		    			burbuja.movY = -10;
	    		 	  	
	    		 	  	lanzar=-1;
	    		 	  	error=false;
	    		 	  	
		    		}  
    		// image(Malo,470,90,50,50);
    		 }
    		 
    	}
    };
    imagenes = function(){
    	if(pelota.movX==-10){
    		image(Malo,130,80,50,50);
    	} 
    	if(burbuja.movX==-10){
    		image(Malo,450,80,50,50);
    	}
    	if(objeto.movX==-10){
    		image(Malo,280,80,50,50);
    	}

    }
    fin = function(){
    	if(auxcont==true){
    		if(contador==10){
    			//end.dibuja_imagen();
    			//text("hola",10,10);
    			img.imgX = balaX;
	    		img.imgY = balaY;
	    		linea1.y2= lineaY;
	    		linea2.y2 = lineaY;
	    		cuadrado.y=lineaY;
    			background(255);
	    		//end.dibuja_imagen();
	    		image(end2,0,0,600,400);
	    		PFont fontA = loadFont("Jokerman");
	    		textFont(fontA,33);
	    		text("JUEGO TERMINADO!", 6,55);
	    		PFont fontA = loadFont("Jokerman");
	    		textFont(fontA,25);
	    		text("SU PUNTEO FUE:"+O_punteo.punteo, 345,350);
	    		guardarPunteo(3000,O_punteo.punteo,"nivel",null);
	    		lanzar=-1;
	    		error=false;
    			jugar=false;
    			auxcont=false;


    		}
    	}
    }

     lanzar_bala = function(){
     	
	    if(lanzar==1){
				img.imgX = posicionX;
				img.imgY = posicionY-12;
				posicionX+=2;
				posicionY-=2.4;
				
			if(posicionY>300){
				linea1.x2=posicionX-1;
				linea2.x2=(posicionX+40)-1;
				linea1.y2=posicionY-1;
				linea2.y2=posicionY-1;
				cuadrado.x=posicionX-1;
				cuadrado.y=posicionY-1;
				lanzamiento = document.getElementById('lanzamiento');
				lanzamiento.play();
			}
		}	
		
		if(lanzar==2){
				img.imgX = posicionX;
				img.imgY = posicionY-12;
				posicionX-=1.6;
				posicionY-=2.2;
			if(posicionY>300){
				linea1.x2=posicionX-1;
				linea2.x2=(posicionX+40)-1;
				linea1.y2=posicionY-1;
				linea2.y2=posicionY-1;
				cuadrado.x=posicionX-1;
				cuadrado.y=posicionY-1;
				lanzamiento = document.getElementById('lanzamiento');
				lanzamiento.play();
			}
		}
		if(lanzar==3){
				img.imgX = posicionX+8;
				img.imgY = posicionY-12;
				posicionY-=2.4;
			if(posicionY>300){
				linea1.x2=posicionX-1;
				linea2.x2=(posicionX+40)-1;
				linea1.y2=posicionY-1;
				linea2.y2=posicionY-1;
				cuadrado.x=posicionX-1;
				cuadrado.y=posicionY-1;
				lanzamiento = document.getElementById('lanzamiento');
				lanzamiento.play();
			}
		}
    }

	draw = function(){
 		if(jugar){

		    //background(151, 244, 247);
	 	 	desierto.dibuja_imagen();
	 	 	img.dibuja_imagen();
			hon.dibuja_imagen();
			objeto.dibuja();
			burbuja.dibuja();
			pelota.dibuja();
			linea1.dibuja_linea();
			linea2.dibuja_linea();
			cuadrado.dibuja_cuadrado();
			lanzar_bala();
			validachoque();
			imagenes();
			choquepared();
			fill(0);
			textSize(18);
			PFont fontA = loadFont("Arial");
	    	textFont(fontA,18);
			text("Seleccione la Respuesta Correcta de:" + mate.pregunta,200,15);
			PFont fontA = loadFont("Arial");
	    	textFont(fontA,18);
			text("Punteo"+" "+O_punteo.punteo, 6,15);
			fin();
		}
	};

mouseDragged = function(){
	
	if(mouseY>300 & mouseY<380 & mouseX>200 & mouseX<400){
		validaposicion=true;
		linea1.x2=mouseX;
		linea2.x2=mouseX+40;
		linea1.y2=mouseY;
		linea2.y2=mouseY;
		cuadrado.x=mouseX;
		cuadrado.y=mouseY;
		img.imgX = mouseX;
		img.imgY = mouseY-20;
		
	}	
	validaposicion=false;
	mouseReleased = function() {
		if(mouseY>300 & mouseY<480 & mouseX>200 & mouseX<400){	
			validaposicion=true;
				posicionX = mouseX;
				posicionY = mouseY;
				
			if(posicionX<280){
				lanzar=1;
				
			}
			if(posicionX>295){
				lanzar = 2;
				
			}
		    if(posicionX>=280& posicionX<=295){
		    	lanzar=3;
		    }

		}
	 	validaposicion=false;    
	};
 		validaposicion=false;
};
	
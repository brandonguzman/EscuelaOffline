// tamaño del lienzo
  size(650, 500); 
// declarando variables globales 
var carro1;
var nube1;
var nube2;
var sol;
var punteo;
var calle;  
var pocisionX = [800,800,800];
var pocisionY = [300,365,425];
var ficha1;
var ficha2;
var ficha3;
var genera;
var gene = true;
var aux = 1;
var jugar = false;
var nivel;

// funcion para iniciar el juego seleccionando un nivel
eligio = function () {
        nivel = document.getElementById('nivel').value; 
        clickDibuja();
        jugar = true;   
}

 
 
//constructor del objeto carro
var carro = function(x,y){
    this.x = x;
    this.y = y; 
};

var calle = function(x,y){
    this.x = x;
    this.y = y;
}
// constructor del objeto nube
var nubes = function(nubeX,nubeY,ancho,alto){
    this.nubeX = nubeX;
    this.nubeY = nubeY;
    this.ancho = ancho;
    this.alto = alto;
};

// constructor del objeto fichas.
var fichas = function(fichaX,fichaY){
    this.fichaX = fichaX;
    this.fichaY = fichaY;
};

var sol = function(x,y){
    this.x = x;
    this.y = y;

};
// constructor para la puntuacion
var puntuacion = function(nivel,NoErrores,NoAsiertos,punteo){
    this.nivel = nivel;
    this.NoErrores = NoErrores;
    this.NoAsiertos = NoAsiertos;
    this.punteo = punteo;
};

// metodo para dibujar la puntuacion
puntuacion.prototype.escribe = function(){
    
    fill(255,4,4);
    textSize(15);
    text("Nivel:"+this.nivel+ "    "+ "No. Errores:"+ this.NoErrores+ "    "+ " No. Asiertos:"+this.NoAsiertos+"    "+" Punteo:"+this.punteo,10,20);
    
    };

// meotodo para dibujar la calle
calle.prototype.dibuja = function(){
    //dibujo el carrill 1,2,3
    fill(203,196,196);
    rect(this.x, this.y, 700,160);

    fill(246,254,8);
    rect(this.x, this.y + 40, 700,6);

    fill(246,254,8);
    rect(this.x,this.y + 100, 700,6);

};

// efecto de sol sonriente
sol.prototype.normal = function(){
    noStroke();
    fill(255, 170, 0);
    ellipse(this.x, this.y, 100,100);

    fill(0);
    ellipse(this.x - 15,this.y - 10, 15,15);
    ellipse(this.x + 15,this.y - 10, 15,15);
    
    stroke(0);
    fill(255,4,4);
    ellipse(this.x, this.y + 20, 15,20); 
};
// efecto de sol triste
sol.prototype.triste = function(){
     noStroke();
    fill(255, 170, 0);
    ellipse(this.x, this.y, 100,100);

    fill(0);
    ellipse(this.x - 15,this.y - 10, 15,15);
    ellipse(this.x + 15,this.y - 10, 15,15);
    
    stroke(0);
    fill(255,4,4);
    ellipse(this.x, this.y + 20, 30,1); 
};
// metodo para dinujar las fichas
fichas.prototype.dib = function(nivel){
    
    if (nivel == 2) {
        nivel = nivel - 0.5;
    }else if (nivel == 3) {
        nivel = nivel - 1;
    }

    noStroke();
    fill(255,255,255);
    ellipse(this.fichaX, this.fichaY, 55,45); 

    if (this.fichaX < 0) {
        this.fichaX = 800;
    }else{
        this.fichaX -=nivel;
    }
};

// metodo para escribir las respuestas en las fichas
fichas.prototype.texto = function(texto){
    fill(0);
    textSize(12);
    text(texto,this.fichaX - 6 ,this.fichaY);

};


// metodo para dibujar nubes 
nubes.prototype.dibuja = function(){
    noStroke();
    fill(255, 255, 255);
    ellipse(this.nubeX, this.nubeY, this.ancho + 56,this.alto + 37);
    ellipse(this.nubeX+62, this.nubeY, this.ancho, this.alto);
    ellipse(this.nubeX-62, this.nubeY, this.ancho, this.alto);

    if(this.nubeX == - 90){
    this.nubeX = 700;
    }else{   
    this.nubeX -= 0.5;
    }

};
// metodo para dibuhar el carro
carro.prototype.dibujar = function() {
    // cuertpo del carro
    fill(255,0,115);
    rect(this.x , this.y , 100, 20);
    rect(this.x + 15,this.y - 20, 70, 40);
    // dibujo de las llantas
    fill(77, 66, 66);
    ellipse(this.x + 25, this.y + 21, 24, 24);
    ellipse(this.x + 75,this.y + 21, 24, 24);
    // ventana del carro
    fill(255,255,255);
    rect(this.x+ 60, this.y - 10 ,10,10);
};
        carro1  = new carro(10,300);
        nube1 = new nubes(300,150,70,60);
        nube2 = new nubes(200,50,50,30);
        sol = new sol(500,100);
        calle = new calle(0,300);  
        

    // creando intancias del los objetos.
   var clickDibuja = function() {
        gene = true;
        genera = new oracionesIngles();
        ficha1 = new fichas(pocisionX[0],pocisionY[0]);
        ficha2 = new fichas(pocisionX[1],pocisionY[1]);
        ficha3 = new fichas(pocisionX[2],pocisionY[2]);
        punteo = new puntuacion(nivel,0,0,0);   
        
    };


// funcion draw para redibujar los objetos
 draw = function(){
    if (jugar){
         noStroke();
         background(151, 244, 247);
// dibujando los objetos
        calle.dibuja();
         if (aux == 1) {
            sol.normal();
         }else{
            sol.triste();
         }
        nube1.dibuja();
        nube2.dibuja();
        carro1.dibujar();

        ficha1.dib(nivel);
        ficha2.dib(nivel);
        ficha3.dib(nivel);
        punteo.escribe();


    if (gene) {
        genera.generar(nivel);
        gene = false;          
    }       
        
    
    fill(0);
    textSize(16);
    text("Choque con la respuesta correcta para completar la oracion.", 10,490);
    text("▲"+ " "+"Arriba",500,480);
    text("▼"+ " "+"Abajo",500,495);

    // genera la pregunta hasta que aparecen las fichas.
    if (ficha1.fichaX <= 650 & ficha2.fichaX <= 650 & ficha2.fichaX <= 650) {

        text(genera.pregunta,20,100); 
    }

   
        
    ficha1.texto(genera.respuesta[0]);
    ficha2.texto(genera.respuesta[1]);
    ficha3.texto(genera.respuesta[2]);   
    
    var carroX = carro1.x + 130;
    var carroY = carro1.y;
    choque(carroX,carroY);

    if (genera.cont == genera.oraciones1.length) {
            alert("Has terminado"+" "+"Punteo:"+" "+punteo.punteo);
            guardarPunteo(1000,punteo.punteo,"nivel",null);
        }
    if (genera.cont == genera.oraciones2.length) {
            alert("Has terminado"+" "+"Punteo:"+" "+punteo.punteo);
            guardarPunteo(1000,punteo.punteo,"nivel",null);
        }
     if (genera.cont == genera.oraciones3.length) {
            alert("Has terminado"+" "+"Punteo:"+" "+punteo.punteo);
            guardarPunteo(1000,punteo.punteo,"nivel",null);
        }    


     }
 };

 var pocisionFichas = function(ficha1,ficha2,ficha3){
    ficha1.fichaX = 800;
    ficha2.fichaX = 800;
    ficha3.fichaX = 800;

 }

 var texto = function(texto){
    if (ficha1.fichaX <= 150 & ficha2.fichaX <= 150 & ficha2.fichaX <= 150) {
        fill(0);
        textSize(16);
        text(texto,20,130);
    }

 };

 var choque = function(carroX,carroY){   
// comprueba el choque en el primer carril comprobando que la X y Y del carro sea igual ala X y Y de la ficha1. 
if (carroX  == ficha1.fichaX & carroY == ficha1.fichaY){ 

    //si lo que trae la ficha1 conpruba si es igual a la respuesta correcta.
        if (genera.respuesta[0] == genera.correcta){
            // dibuja el sol alegre
             aux = 1;
             //sonido de pito
             var v = document.getElementById("exito");
             v.play();
             // le suma 1 al no de asiertos y 5 puntos
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;

        }else{
            // dibuja el sol triste 
            aux = 0; 
            var v = document.getElementById("error");
             v.play();
            // le suma 1 al numero de errores y le resta 3 al punteo.
            punteo.NoErrores +=1; 

            if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }
        } 

        // la variable gene la vuelve true para que genere otra oracion en la sig pocision
        // y las fichas las pocisiona al principio.
            gene = true;
            genera.cont +=1;
            pocisionFichas(ficha1,ficha2,ficha3);

// comprueba el choque en el segundo carril
    }else if (carroX == ficha2.fichaX & carroY == ficha2.fichaY) {
        if (genera.respuesta[1] == genera.correcta) {
             aux = 1;
             var v = document.getElementById("exito");
             v.play();
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;
        }else{
             aux = 0;
             var v = document.getElementById("error");
             v.play();
             punteo.NoErrores +=1; 
            
             if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }

        }
         gene = true;  
         genera.cont +=1;
         pocisionFichas(ficha1,ficha2,ficha3);

// comprueba el choque en el tercer carril
    }else if (carroX == ficha3.fichaX & carroY == ficha3.fichaY) {
        if (genera.respuesta[2] == genera.correcta) {
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;
            aux = 1;
            var v = document.getElementById("exito");
             v.play();
        }else{
             aux = 0;
             var v = document.getElementById("error");
             v.play();
             punteo.NoErrores +=1;
             if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }    
        }
         gene = true;
         genera.cont +=1;
         pocisionFichas(ficha1,ficha2,ficha3);
    }   

 };

// evento de precionar el teclado para que el carro se mueva. 
void keyPressed() {
// comprueba la tecla hacia arriba 
if (key == CODED) {
    if (keyCode == UP){
        if (carro1.y < pocisionY[0]) {
            carro1.y = pocisionY[0];
        }else if (carro1.y == pocisionY[1]) {
            carro1.y = pocisionY[0];  
        }else if (carro1.y == pocisionY[2]) {
            carro1.y = pocisionY[1]
        }
    }

// comprueba las teclas hacia abajo
    if (keyCode == DOWN){
        if (carro1.y == pocisionY[0]) {
            carro1.y =pocisionY[1];
        }else if(carro1.y == pocisionY[1]) {
            carro1.y =pocisionY[2];  
        }
        
    }
}
  
};

// tamaño del lienzo
   
// declarando variables globales 
var carro1;
var nube1;
var nube2;
var sol;
var punteo;
var calle;  
var pocisionX = [800,800,800];
var pocisionY = [340,405,460];
var ficha1;
var ficha2;
var ficha3;
var genera;
var gene = true;
var aux = 1;
var jugar = false;
var nivel;
var cont = 10;
var alerta = "";
var xAlert = 0;
var mostrarAlerta = false;

void setup(){
size(650, 500);
fondo = new PImage();
fondo = loadImage("/static/img/carrito/fondo.png");
fin = new PImage();
fin = loadImage("/static/img/carrito/fin.jpg");

}

// funcion para iniciar el juego seleccionando un nivel
eligio = function () {
        nivel = document.getElementById('nivel').value; 
        clickDibuja();
        jugar = true;   
        timeOut(200,selectCanvas);
        cont = 10;
        //var niv = document.getElementById("nivel");
        //niv.focus();
}
function selectCanvas(){
    var can = document.getElementById("canvasCarrito");
    can.focus();
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
    fill(28,3,250);
    rect(0,0,650,30);
    fill(255);
    textSize(20);
    text("Nivel:"+this.nivel+ "    "+ "No. Errores:"+ this.NoErrores+ "    "+ " No. Asiertos:"+this.NoAsiertos+"    "+" Punteo:"+this.punteo,100,20);
    
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
    noStroke();
    fill(255,255,255);
    if (nivel ==1) {
        ellipse(this.fichaX, this.fichaY, 55,45); 
    }else if (nivel ==2) {
        ellipse(this.fichaX, this.fichaY, 70,45); 
    }else if (nivel ==3) {
        ellipse(this.fichaX, this.fichaY, 70,45); 
    }

    if (nivel == 2) {
        nivel = nivel - 1;
    }else if (nivel == 3) {
        nivel = nivel - 2;
    } 

    if (this.fichaX < 0) {
        this.fichaX = 800;
    }else{
        this.fichaX -=nivel;
    }
};

// metodo para escribir las respuestas en las fichas
fichas.prototype.texto = function(texto){
    fill(0);
    textSize(20);
    text(texto,this.fichaX - 15 ,this.fichaY);

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
        carro1  = new carro(10,340);
        nube1 = new nubes(300,150,70,60);
        nube2 = new nubes(200,50,50,30);
        sol = new sol(530,80);
        calle = new calle(0,340);  
        

    // creando intancias del los objetos.
   var clickDibuja = function() {
        gene = true;
        ficha1 = new fichas(pocisionX[0],pocisionY[0]);
        ficha2 = new fichas(pocisionX[1],pocisionY[1]);
        ficha3 = new fichas(pocisionX[2],pocisionY[2]);
        punteo = new puntuacion(nivel,0,0,0);   
        
    };


// funcion draw para redibujar los objetos
 draw = function(){
    if (jugar){
        noStroke();
        image(fondo,0,0,650,500);
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
        if (nivel == 1) {
        //genera un numero aleatorio para cambiar las operaciones.
        //por ejemplo si el numero que genera ale es 1 se genera una suma.
        var ale =aleat(1,2);
        // genera un numero aleatorio para la dificultad.
        var e = aleat(1,10);
        if (ale == 1) {
            genera = new TriviaMate();
            genera.init("+",e);
        }else if (ale == 2){
            genera = new TriviaMate();
            genera.init("-",e);
        }
    }
// para el nivel 2
    if (nivel == 2) {
        //genera un numero aleatorio para cambiar las operaciones.
        //por ejemplo si el numero que genera ale es 1 se genera una multiplicacion.
        var ale = aleat(1,2);
        var e = aleat(1,10);
        if (ale == 1) {
            genera = new TriviaMate();
            genera.init("*",e);
        }else if (ale == 2) {
            genera = new TriviaMate();
            genera.init("/",10);
        }
    }

    if (nivel == 3) {
        //genera un numero aleatorio para cambiar las operaciones.
        //por ejemplo si el numero que genera ale es 1 se genera una una operacion conbinada suma y resta.
        var ale =aleat(1,2);
        var e = aleat(1,10);
        if (ale == 1) {
            genera = new TriviaMate();
            genera.init("+-",e);
        }else if (ale == 2) {
            genera = new TriviaMate();
            genera.init("*/",e);
        }
    }   
       gene = false;          
    }       
        
    
    fill(0);
    textSize(20);

    // genera la pregunta hasta que aparecen las fichas.
    if (ficha1.fichaX <= 650 & ficha2.fichaX <= 650 & ficha2.fichaX <= 650) {

        text("Resuelve la operación: "+genera.pregunta+" "+"=",20,100); 
    }

   
        
    ficha1.texto(genera.op1);
    ficha2.texto(genera.op2);
    ficha3.texto(genera.op3);   
    
    var carroX = carro1.x + 130;
    var carroY = carro1.y;
    choque(carroX,carroY);

    if (cont == 0 & nivel ==1 ) {
            mostrarAlerta =true;
            alerta ="Has Terminado la Partida con:"+punteo.punteo+" puntos"; //texto mostrado como alerta
            xAlert =150;
            dibujarTextos();
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar =false;
        }
    if (cont == 0 & nivel ==2) {
            mostrarAlerta =true;
            alerta ="Has Terminado la Partida con:"+punteo.punteo+" puntos"; //texto mostrado como alerta
            xAlert =150;
            dibujarTextos();
            alert("Has terminado"+" "+"Punteo:"+" "+punteo.punteo);
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar = false;
        }
     if (cont == 0 & nivel == 3) {
            mostrarAlerta =true;
            alerta ="Has Terminado la Partida con:"+punteo.punteo+" puntos"; //texto mostrado como alerta
            xAlert =150;
            dibujarTextos();
            alert("Has terminado"+" "+"Punteo:"+" "+punteo.punteo);
            guardarPunteo(3000,punteo.punteo,"nivel",null);
            jugar = false;
        }    


     }
 };

 function dibujarTextos(){
    fill(100,100,150);
    textSize(16);
    if( mostrarAlerta ){
        image(fin,0,0,650,500);
        fill(250,142,242); stroke(250);
        rect(0,240,710,50);
        fill(0);
        textSize(20);
        text(alerta, xAlert, 270);
        mostrarAlerta = false;
        stroke(0);
    }
}

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
        if (genera.op1 == genera.r){
            // dibuja el sol alegre
             aux = 1;
             //sonido de pito
             var v = document.getElementById("exito");
             v.play();
             // le suma 1 al no de asiertos y 5 puntos
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;
             cont -=1;

        }else{
            // dibuja el sol triste 

            aux = 0; 
            var v = document.getElementById("error");
             v.play();
            // le suma 1 al numero de errores y le resta 3 al punteo.
            punteo.NoErrores +=1; 
             cont -=1;
            if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }
        } 

        // la variable gene la vuelve true para que genere otra oracion en la sig pocision
        // y las fichas las pocisiona al principio.
            gene = true;
            pocisionFichas(ficha1,ficha2,ficha3);

// comprueba el choque en el segundo carril
    }else if (carroX == ficha2.fichaX & carroY == ficha2.fichaY) {
        if (genera.op2 == genera.r) {
             aux = 1;
             var v = document.getElementById("exito");
             v.play();
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;
             cont-=1;
        }else{
             aux = 0;
             var v = document.getElementById("error");
             v.play();
             punteo.NoErrores +=1; 
             cont -=1;
             if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }

        }
         gene = true; 
         pocisionFichas(ficha1,ficha2,ficha3);

// comprueba el choque en el tercer carril
    }else if (carroX == ficha3.fichaX & carroY == ficha3.fichaY) {
        if (genera.op3 == genera.r) {
             punteo.NoAsiertos +=1;
             punteo.punteo +=5;
            aux = 1;
            var v = document.getElementById("exito");
             v.play();
             cont-=1;
        }else{
             aux = 0;
             var v = document.getElementById("error");
             v.play();
             punteo.NoErrores +=1;
              cont -=1;
             if (punteo.punteo < 0 | punteo.punteo <=3) { 
                punteo.punteo = 0;
                }else{                
                    punteo.punteo -=3; 
                }    
        }
         gene = true;
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

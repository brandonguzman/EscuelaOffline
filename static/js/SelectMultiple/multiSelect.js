void setup(){
  size(600,400);
  background(125);
  fill(255);
  //noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);  
  frameRate(50);
}

function Juego(anchoCanvas, altoCanvas){
  this.ancho = anchoCanvas; this.alto = altoCanvas;
  this.left = 46; this.top = 100; //margen izquierdo y de arriba
  this.rAlto = 50; this.rAncho = 300; //alto y ancho de cada caja de respuesta
  this.l1 = 0; this.l2 = 0; this.l3 = 0; //coord izq de cada caja
  this.t1 = 0; this.t2 = 0; this.t3 = 0; //coord top de cada caja
  this.op1 = 0; this.op2 = 0; this.op3 = 0; this.r = 0;
  this.pregunta = ''; this.elec = 0;
  this.trivia = null;  
  this.activC1 = false;
  this.activC2 = false;
  this.activC3 = false; 
  this.activOK = false;
  this.OK = false;
  this.UNA = true;
}
Juego.prototype.init = function(trivia){
  //var izq = Math.round(this.ancho/2) - Math.round(this.rAncho/2);
  var izq = 50;
  this.l1 = izq; this.l2 = izq; this.l3 = izq; //coord izq de cada caja (es la misma eje x)
  this.t3 = this.alto-100;
  this.t2 = this.t3-this.rAlto-20;
  this.t1 = this.t2-this.rAlto-20;
  this.trivia = trivia;
  this.op1 = trivia.op1; this.op2 = trivia.op2; this.op3 = trivia.op3; this.r = trivia.r;
  this.pregunta = trivia.pregunta;
  this.mostrarPregs = true;
  this.mostrarPregunta(this.pregunta);
  this.mostrarOpciones();
}
Juego.prototype.resetRespuestas = function(){
  this.activC1 = false; this.activC2 = false; this.activC3 = false;
}
Juego.prototype.mostrarPregunta = function(texto){ //escribe la pregunta o trivia, por ejemplo "5 * 3 ="
  //this.limpiar(0,0,600,150);
  textSize(38);
  fill(255);
  text("Resuelve la operación:", this.left-10, this.top-40);
  fill(142,0,2);
  text(this.pregunta + " = ?", this.left-10, this.top);
}
Juego.prototype.dibujarOpcion = function(texto, x, y, cL, cC){ //cL = color de letra ;; cC = color de caja (0-255)
  textSize(48);
  fill(cC);
  //rect(x,y,this.rAncho,this.rAlto);
  if( cC == 230 ){
    image(cuadro2,x,y,this.rAncho,this.rAlto+10);
  }else{
    image(cuadro,x,y,this.rAncho,this.rAlto+10);
  }
  fill(cL);
  text(texto,x+20,y+40);
}
Juego.prototype.mostrarOpciones= function(){ //funcion q se llama al iniciar el juego y muestra las 3 posibles respuestas
  if( this.mostrarPregs ){
    // this.dibujarOpcion(this.op1,this.l1,this.t1,0,190); //caja1
    // this.dibujarOpcion(this.op2,this.l2,this.t2,0,190); //caja2
    // this.dibujarOpcion(this.op3,this.l3,this.t3,0,190); //caja3
    fill(60);
    if( this.activC1 ){
      image(cuadro,this.l1+20,this.t1,this.rAncho,this.rAlto+10);
      fill(240,240,100); //es el color de relleno
      text(this.op1,this.l1+110,this.t1+40);
    }else{
      image(cuadro2,this.l1,this.t1,this.rAncho,this.rAlto+10);
      text(this.op1,this.l1+90,this.t1+40);
    }
    fill(60);
    if( this.activC2 ){
      image(cuadro,this.l2+20,this.t2,this.rAncho,this.rAlto+10);
      fill(240,240,100); //es el color de relleno
      text(this.op2,this.l2+110,this.t2+40);
    }else{
      image(cuadro2,this.l2,this.t2,this.rAncho,this.rAlto+10);
      text(this.op2,this.l2+90,this.t2+40);
    }
    fill(60);
    if( this.activC3 ){
      image(cuadro,this.l3+20,this.t3,this.rAncho,this.rAlto+10);
      fill(240,240,100); //es el color de relleno
      text(this.op3,this.l3+110,this.t3+40);
    }else{
      image(cuadro2,this.l3,this.t3,this.rAncho,this.rAlto+10);
      text(this.op3,this.l3+90,this.t3+40);
    }
  }
}
Juego.prototype.limpiar = function(x,y,ancho,alto){
  fill(125); //es el color de relleno
  stroke(125); //es el color de contorno
  rect(x,y,ancho,alto); //dibujamos un rectangulo, para "limpiar" pantalla
}
Juego.prototype.mostrarOK = function(){
  //this.limpiar(0,160,600,240);
  if( this.activOK ){
    this.mostrarPregs = false;
    fill(240,240,100); //es el color de relleno
    stroke(10); //es el color de contorno
    rect(100, 150, this.ancho-200, this.alto-300);
    fill(60,100,60);
    textSize(48);
    if (this.OK){
      text("Muy Bien", 200, 200);
      textSize(20);
      text("La respuesta es: "+ this.r, 200, 230);
      image(feliz,450,130,120,120);
    }else{
      text("Erraste", 210, 200);
      textSize(20);
      text("La respuesta era: "+ this.r, 200, 230);
      image(sorpr,450,130,120,120);
    }
    mouseMovedActive = false;
    if( this.UNA ){
      nuevaPregunta(2500);
      this.UNA = false;
    }
  }
}
Juego.prototype.check = function(r,op){ //comprueba valor elegido (segun clic) con el valor de respuesta (r)
  this.activOK = true;
  if(r == op){ //si 'r' es igual a la opcion 'op' elegida al dar clic sobre alguna caja
      this.OK = true;
      this.UNA = true;
      noTrivias++;
      correct.play(); //sonido de ok
  }else{
      this.OK = false;
      this.UNA = true;
      noErrores++;
      wrong.play(); //sonido de wrong
  }
}
Juego.prototype.mouseClicked = function(x,y){ //al hacer clic sobre cualquier caja, se selecciona la respuesta y se evalua
  if( mouseMovedActive ){
    var noCaja = this.comprobarClickCaja(x,y);
    if (noCaja == 1){
        this.check(this.r, this.op1);
    }else if (noCaja == 2){
        this.check(this.r, this.op2);
    }else if (noCaja == 3){
        this.check(this.r, this.op3);
    }
  }
}
Juego.prototype.mouseOverBox = function(x,y){ //hace la animación de resaltar la caja
  var noCaja = this.comprobarClickCaja(x,y);
  if (noCaja == 1){
      //this.dibujarOpcion(this.op1,this.l1,this.t1,0,230); //resalta la caja
      this.activC1 = true;
  }else{
      //this.dibujarOpcion(this.op1,this.l1,this.t1,0,190); //regresa al estado inicial
      this.activC1 = false;
  }
  if (noCaja == 2){
      //this.dibujarOpcion(this.op2,this.l2,this.t2,0,230);
      this.activC2 = true;
  }else{
      //this.dibujarOpcion(this.op2,this.l2,this.t2,0,190);
      this.activC2 = false;
  }
  if (noCaja == 3){
      //this.dibujarOpcion(this.op3,this.l3,this.t3,0,230);
      this.activC3 = true;
  }else{
      //this.dibujarOpcion(this.op3,this.l3,this.t3,0,190);
      this.activC3 = false;
  }
}
Juego.prototype.comprobarClickCaja = function(x,y){ //devuelve 1 si se dio click en la caja1, 2 si se dio click en la caja2, 3 si se dio ...
  if (x > this.l1 & x < this.l1+this.rAncho & y > this.t1 & y < this.t1+this.rAlto){
      return 1;
  }
  if (x > this.l2 & x < this.l2+this.rAncho & y > this.t2 & y < this.t2+this.rAlto){
      return 2;
  }
  if (x > this.l3 & x < this.l3+this.rAncho & y > this.t3 & y < this.t3+this.rAlto){
      return 3;
  }
}

var mouseMovedActive = false;
var juego = new Juego(600,400); //se crea el juego
var trivia = new TriviaMate(); //se crea la trivia
var nivel = null;
var path = "/static/img/SelectM/";
PImage feliz = loadImage(path+"boy-feliz.png");
PImage sorpr = loadImage(path+"boy-sorprendido.png");
PImage fondo = loadImage(path+"fondos.jpg");
PImage fondo2 = loadImage(path+"mate-divertida.jpg");
PImage cuadro = loadImage(path+"cuadro.png");
PImage cuadro2 = loadImage(path+"cuadro2.png");

mouseMoved = function(){ //se pone en 'escucha' el evento de mover el ratón
  if( mouseMovedActive )
    juego.mouseOverBox(mouseX, mouseY); //y cuando el ratón se mueva, se llama ésta función
}
mouseClicked = function(){ //se pone en 'escucha' el evento de clic
  juego.mouseClicked(mouseX, mouseY); //y cuando se de clic, se llama a ésta función
}

function nuevaPregunta(tiempo){
  window.setTimeout(function(){
    //juego.limpiar(0,160,600,240);
    juego.mostrarPregs = true;
    juego.activOK = false;
    juego.resetRespuestas();
    //redraw();
    if( noTrivias == noTotal ){
      comprobar();
    }else{
      mouseMovedActive = true;
      selectNivel();
      juego.init(trivia);
    }
  },tiempo);
}

function selectNivel(){
  if( nivel == 0 ){
    trivia.init("+", 10);
  }else if( nivel == 1 ){
    trivia.init("+-", 6);
  }else if( nivel == 2 ){
    trivia.init("*/", 5);  
  }else if( nivel == 3 ){
    trivia.init("*/", 10);  
  }else if( nivel == 4 ){
    trivia.init("all", 10);
  }
}

var una = true;
var setnew = 0;
function lisenNew(){
  if( una ){
    console.log("lisen");
    setnew = window.setInterval(function(){
      if( !jugando & !terminado ){
        noTrivias = 0;
        noErrores = 0;
        nivel = null;
        window.clearInterval(setnew);
        una = true;
        jugando = true;
        matarcrono();
        redraw();
        console.log("ok");
      }
    }, 500);
    una = false;
  }
}

var noTrivias = 0;
var noTotal = 10;
var noErrores = 0;
var $errores = $("#errores");
var $numero  = $("#numero");
var $canvas = $("#canvasjuego");
var cronometro = new Cronometro("tiempo");
var terminado = false;
var punteo = 0;
var terminado = false; //muestra una imagen cuando se termina el juego

var cronoactive = true;
function inicrono(){
  if( cronoactive ){
    cronometro.iniciar();
    cronoactive = false;
  }
}
function matarcrono(){
  cronometro.detener();
  cronometro.kill();
  cronometro = new Cronometro("tiempo");
  cronoactive = true;
}
function sumarErrores(){
  cronometro.intervalo = 30; //para hacer q pase rápido el tiempo
  cronometro.iniciar(); //lo iniciamos para q muestre el tiempo
  //detiene la sumatoria del tiempo por errores
  var ret = 0;
  ret += noErrores*200;
  window.setTimeout(function(){
    cronometro.detener(); //lo detenemos
    cronometro.kill(); //lo destruimos
    //$canvas.hide(500);
  },ret);
}
function comprobar(){
  //if( noTrivias == noTotal ){
    terminado = true;
    jugando = false;
    cronometro.detener();
    terminado = true;
    punteo = $("#tiempo").text();
    sumarErrores();
    var ret = 2000;
    ret += noErrores*200;
    guardarPunteo(ret, punteo, "nivel", null);
  //}
}
//función principal que dibuja en el canvas
draw = function(){
  if( jugando ){
    image(fondo,0,0,600,400);
    //comprobar();
    
    mouseMovedActive = true;
    //window.clearInterval(recursion);
    
    $errores.text("Errores: "+noErrores);
    $numero.text("No: "+noTrivias);
    juego.mostrarPregunta();
    juego.mostrarOpciones();
    juego.mostrarOK();
    //lisenNew();
  }else{
    image(fondo2,0,0,600,400);
  }
  if( terminado ){
    image(fondo,0,0,600,400);
    textSize(48);
    fill(142,0,2); //es el color de relleno 8e0002
    text("¡Has Terminado!",100,150);
  }
};

inicializar = function(){
  jugando = true;
  nivel = $("#nivel").val();
  selectNivel();
  juego.init(trivia); //se le pasa al juego una trivia
  matarcrono();
  inicrono();
  noErrores = 0;
  noTrivias = 0;
}
/* Los objetos así como los arrays son pasados a las funciones por referencia.
   Esto es, que el cambio interno q se haga a las variables, se verá reflejado fuera de la función.
   Solo los tipos de datos primitivo y strings son pasados por valor.
*/
//genera un número entero aleatorio entre a y b
function aleat(a,b){
  return Math.round( Math.random() * (b-a) ) + a;
}
//desordena un vector y lo devuelve
function randVector(v){
  var aux = 0, rand = 0;
  for(var i=0; i<v.length; i++){
    aux = v[i];
    rand = aleat(0,v.length-1);
    v[i] = v[rand];
    v[rand] = aux;
  }
  return v;
}
//desordena una matriz de exactamente MxN, y lo retorna
function randMatrix(m){
  var aux = 0;
  var tM = m.length; var tN = 0;
  var alM = 0, alN = 0;
  for(var i=0; i<tM; i++){
    tN = m[i].length;
    for(var j=0; j<tN; j++){
      alM = aleat(0,tM-1); 
      alN = aleat(0,tN-1);
      aux = m[i][j];
      m[i][j] = m[alM][alN];
      m[alM][alN] = aux;
    }
  }
  return m
}
//imprime un array o matriz por consola
function printArray(arr, id=0){
  if( arr instanceof Array ){
    for(var i=0; i<arr.length; i++){
      if( arr[i] instanceof Array )
        printArray(arr[i], id+1);
    }
    console.log(arr);
  }else{
    console.log("La variable no es de tipo Array");
  }
}
//se le pasa un vector y lo llena del 1 hasta length
function fillVector(v){
  for(var i=0; i<v.length; i++)
    v[i] = i+1;
  return v;
}
//regresa un nuevo vector de tamaño 'length' lleno del 1 a length
function newFillVector(length){
  var v = new Array(length);
  return fillVector(v);
}
//se le pasa una matriz y la llena desde 1 hasta nxm
function fillMatrix(m){
  var n = 1;
  for(var i=0; i<m.length; i++){
    for(var j=0; j<m[i].length; j++)
      m[i][j] = n++;
  }
  return m;
}
//retorna una matriz de nXm, vacía.
function newMatrix(m,n){
  var mz = new Array(m);
  for(var i=0; i<m; i++)
    mz[i] = new Array(n);
  return mz;
}
//retorna una matriz de nXm, llena del 1 hasta nxm
function newFillMatrix(m,n){
  return fillMatrix( newMatrix(m,n) );
}
//llena una matriz con ceros
function fillMatrixZero(m){
  for(var i=0; i<m.length; i++){
    for(var j=0; j<m[i].length; j++)
      m[i][j] = 0;
  }
  return m;
}
//ingresa el número (val), una cantidad de veces (n) en una matriz (m) aleatoriamente
function fillRandValMatrix(m,val,n){
  for(var a=0; a<n; a++){
    //posible bucle infinito, cuando n se acerca a Matriz(n*m)
    while(true){
      x = aleat(0,m.length-1);
      y = aleat(0,m[0].length-1);
      if( m[x][y] == val )
        continue;
      else{
        m[x][y] = val;
        break;
      }
    }
  }
}
//reloj donde se guarda el tiempo transcurrido
function Reloj(){
  this.strTime = "";
  this.seg = 0; this.min = 0; this.hour = 0; this.dec = 0;
  this.getVal = function(){
    this.dec++;
    if(this.dec>9){
      this.dec = 0; this.seg++;
      if(this.seg>59){
        this.seg = 0; this.min++;
        if(this.min>59){
          this.min = 0; this.hour++;
        }
      }
    }
    if(this.min<10)
      this.strTime = "0"+this.min;
    else
      this.strTime = this.min;
    if(this.seg<10)
      this.strTime += ":0"+this.seg;
    else
      this.strTime += ":"+this.seg;
    if(this.dec<10)
      this.strTime += ":0"+this.dec;
    else
      this.strTime += ":"+this.dec;
    return this.strTime;
  };
  this.getVal2 = function(){
    return this.strTime;
  }
  this.restablecer = function(){ //restablece todo a 0, pero no para el crono
    this.seg = 0; this.min = 0; this.hour = 0; this.dec = 0;
  }
}
//un cronómetro; idDisplay = nombre del objeto donde se muestra el tiempo,
function Cronometro(idDisplay){
  display = document.getElementById(idDisplay);
  reloj = new Reloj();
  this.intervalo = 100;
  display.textContent = '00:00:00';
  this.crono = 0;
  this.activo = false;
  
  this.detener = function(){//detiene el crono, pero guarda el estado
    window.clearInterval(this.crono);
    this.activo = false;
  };
  this.iniciar = function(){//inicia el cronómetro, solo se debe llamar una vez!
    this.detener();
    this.crono = window.setInterval(function(){
      setDisplay();
    },this.intervalo);
    this.activo = true;
  };
  this.reiniciar = function(){//reinicia todo a 0, y vuelve a comenzar
    reloj.restablecer();
    this.detener();
    this.iniciar();
  }
  this.pausar = function(){//detiene el crono, pero se guarda el estado
    this.detener();
  };
  this.sumarSeg = function(seg){
    for(var i=1; i<=seg; i++){
      this.crono = window.setTimeout(function(){
        setDisplay();
      },1000);
    }
  };
  this.kill = function(){
    reloj = null;
    display = null;
  }
}

var reloj;
var display;
//escribe el tiempo en una caja
function setDisplay(){
  display.textContent = reloj.getVal();
}
function setDisplay2(){
  display.textContent = reloj.getVal2();
}

//función para enviar el punteo a la url que lo guarda en la db
function guardarPunteo(retardo, punteo, selectNivel, selectTipo){
  window.setTimeout(function(){
    var tipo  = null;
    if(selectTipo)
      tipo = document.getElementById(selectTipo).value;
    var nivel = document.getElementById(selectNivel).value;
    var form = document.getElementById("punteojuego");
    var input = document.createElement("input");
    input.setAttribute("name","punteo");
    input.setAttribute("value",punteo);
    form.appendChild( input );
    var input = document.createElement("input");
    input.setAttribute("name","idnivel");
    input.setAttribute("value",nivel);
    form.appendChild( input );
    var input = document.createElement("input");
    input.setAttribute("name","idtipo");
    input.setAttribute("value",tipo);
    form.appendChild( input );
    form.submit();
  },retardo);
}

function timeOut(milis, funcion){
  window.setTimeout(funcion,milis);
}

function Punto(x,y){
  this.x = x; this.y = y;
}
//mueve el select de "niveles"... hacia un div con id (idDiv)
function setNivel(idDiv){
  var div_nivel = document.getElementById("nivel");
  var div_nivel_j = document.getElementById(idDiv);
  div_nivel_j.appendChild(div_nivel);
}
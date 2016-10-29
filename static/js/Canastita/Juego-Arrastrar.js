	size(650,500);
	// vectores de nombres de la imagenes para la comparacion
	var frutas = ["apple","pear","orange","grape","pineapple","peach","cherry","watermelon","strawberry","blueberry"]; 
	var verduras = ["broccoli","asparagus","corn","tomato","radish","lettuce","cucumber","carrot","celery","potato"];
	var acuaticos = ["fish","octopus","crab","starfish","whale","snail","dolphin","tortoise","shark","sea hourse"];
	var terrestre = ["cow","chicken","horse","mouse","rabbit","lion","dog","goat","pork","cat"];
	var animales = ["cow","chicken","horse","mouse","rabbit","fish","crab","whale","snail","dolphin",];
	var mixFV = ["apple","pear","orange","peach","pineapple","broccoli","corn","radish","lettuce","carrot"];
// variables globales a utilizar
	var mix = [];
	var rutas =["/static/img/Canastita/frutas/","/static/img/Canastita/verduras/","/static/img/Canastita/acuaticos/","/static/img/Canastita/terrestres/","/static/img/Canastita/animales/","/static/img/Canastita/mix/"];
	var rutaCaja = "/static/img/Canastita/caja/";
	var ima = [];
	var pila = [];
	var img = [];
	var tamaño = 73;
	var x; var y;
	var contador = 20;
	var draged = true;
	var nivel;
	var jugar = false;
	var crono = null;

// funcion que se activa al elegir un nivel
	eligio = function () {
        nivel = document.getElementById('nivel').value; 
        clickDibuja();
        jugar = true; 
        // se inicializa el cronometro
        if( crono )
        	crono.kill();
        crono = new Cronometro("crono"); 
        crono.iniciar();
        contador = 20;
}
	

// esta funcion carga las imagenes se le pasa la ruta1,ruta2,dos letras,un vector para asignar 
// un tipo dependiendo la imagen y el nivel que se encuentra
function CargaImagenes(r1,r2,l1,l2,vector1,vector2,nivel){
		for (var i = 0; i < 20; i++) {
			if (i<=9) {	
			// se guarda en un vector objetos de tipo PImage
			img[i]= new PImage();
			// luego se guarda en otro vector de objetos, el objeto imagen y el tipo
			mix[i] = {imagen: img[i] =loadImage(r1+l1+i+".PNG"),tipo: vector1[i]};	

		}
			if (i > 9) {
				// se guarda en un vector objetos de tipo PImage
				img[i]= new PImage();
				// se guarda en un vector objetos de tipo PImage	
				mix[i] = {imagen:img[i] = loadImage(r2+l2+i+".PNG"), tipo: vector2[i - 10]};		
			}		
		}
		// se obtiene todo el vector de imagenes y se varagean las imagenes
		randVector(mix);
		//luego dependiendo el niven en que este se carga la imagen de los canastos
		// que es donde se arrastraran la imagenes
		if (nivel == 1) {
		canasto1 = new PImage();
		canasto1 = loadImage(rutaCaja+"1.png");
		canasto2 = new PImage();
		canasto2 = loadImage(rutaCaja+"1.png");
		}else if (nivel == 2) {
			canasto1 = new PImage();
			canasto1 = loadImage(rutaCaja+"2.png");
			canasto2 = new PImage();
			canasto2 = loadImage(rutaCaja+"3.png");

		}else if (nivel == 3) {
			canasto1 = new PImage();
			canasto1 = loadImage(rutaCaja+"1.png");
			canasto2 = new PImage();
			canasto2 = loadImage(rutaCaja+"3.png");
		}	
	};

// constructor de objeto caja se le pasa un objeto imagen, un vector
// que es para comparar lo que se le arrastra, una x Y y, el tipo que es un texto de la caja
//un alto y ancho que es para el tamano de la imagen
function caja(imagen,vector,x,y,tipo,alto,ancho){
	this.imagen = imagen;
	this.vector = vector;
	this.x = x;
	this.y = y;
	this.tipo = tipo;
	this.alto = alto;
	this.ancho = ancho;

}
// constructor de objeto imagen se le pasa un objeto imagen, un vector
//un tipo que es el tipo de imagen que es , una x Y y, un alto y ancho que es para el tamano de la imagen
function imagen(imagen,tipo,x,y,alto,ancho){
	this.imagen = imagen;
	this.tipo = tipo;
	this.x = x;
	this.y = y;
	this.alto = alto;
	this.ancho = ancho;
};

// metodo para dibujar la imagen con un metodo image del objeto PImage
imagen.prototype.dibujar = function(){
	image(this.imagen,this.x,this.y,this.alto,this.ancho);
};

//metodo click para saber a que objeto se le dio click
imagen.prototype.click = function(x,y,objeto){
		//compruebo aquien se le dio click
		if (x > this.x + 10 & x < this.x + 64 & y > this.y + 5 & y < this.y + 53) {
			//se le da el efecto que crece la imagen cuando se le da click.
			objeto.ancho = 90;
			objeto.alto = 90;
			// se guarda la pocision del objeto para si no existe donde lo arrastra 
			//lo regresa a esta pocision.
			pila[0] = objeto.x;
			pila[1] = objeto.y;
		// metodo para usar el evento mouseDragged para arrastrar el objeto
			compruebo(x,y,objeto);
		}
};

// metodo para dibujar la caja con el metodo image de PImage y escribo el texto
caja.prototype.dibujar = function(){
	image(this.imagen,this.x,this.y,this.alto,this.ancho);
	fill(0);
	text(this.tipo,this.x + 20,this.y+ 93);

};

// funcion para crear todos los objetos de tipo imagen modificando su pocision de x Y y
creaObjeto = function(){
for (var i = 0; i < mix.length; i++) {
	if (i == 0) {
		x = 20;y = 30;
	}else if (i > 0 & i <=7) {
		x +=80;y = 30;
	}else if (i == 8) {
		x = 20;y = 100;
	}else if (i >8 & i <=15) {
		x +=80;y = 100;
	}else if (i == 16) {
		x =20;y = 180;
	}else if (i > 16 & i <=19) {
		x +=80;y = 180;
	}

	if (i>=0 & i<=9) {
		// se le pasa una imagen el tipo de imagen una x Y y el ancho y alto 
		ima[i] = new imagen(mix[i].imagen,mix[i].tipo,x,y,tamaño,tamaño);
    	}

    if (i>=10 & i<=19) {
    	// se le pasa una imagen el tipo de imagen una x Y y el ancho y alto 
		ima[i] = new imagen(mix[i].imagen,mix[i].tipo,x,y,tamaño,tamaño);	
    	}
	}
};

// funcion que se llama para dibujar los objetos cuando se le da click al boton
// agarra el nivel y redibuja las imagenes dependiendo el nivel.
 var clickDibuja = function() {
 	if (nivel == 1) {
 		CargaImagenes(rutas[0],rutas[1],"f","v",frutas,verduras,nivel);
 		creaObjeto();
 		caja1 = new caja(canasto1,frutas,20,400,"fruits");
		caja2 = new caja(canasto2,verduras,500,400,"vegetables");

 	}else if (nivel == 2) {
 		CargaImagenes(rutas[2],rutas[3],"w","l",acuaticos,terrestre,nivel);
 		creaObjeto();
 		caja1 = new caja(canasto1,acuaticos,20,400,"Water animals",tamaño + 30,tamaño);
		caja2 = new caja(canasto2,terrestre,500,400,"Land animals",tamaño + 30,tamaño);

 	}else if (nivel == 3) {
 		CargaImagenes(rutas[4],rutas[5],"a","m",animales,mixFV,nivel);
 		creaObjeto();
 		caja1 = new caja(canasto1,mixFV,20,400,"fruits and vegetables",tamaño + 30,tamaño);
		caja2 = new caja(canasto2,animales,500,400,"animals",tamaño + 30,tamaño);
 	}
		

}


draw = function(){
	if (jugar) {
	background(146,244,239);
	caja1.dibujar();
	caja2.dibujar();
	for (var i = 0; i < ima.length; i++) {
		ima[i].dibujar();	
	}
	if (contador == 0) {
		
		crono.detener();
		var tiempo = document.getElementById("crono").innerText;
		guardarPunteo(1000,tiempo,"nivel",null);
		
		jugar = false;

	}

	}			
};

void mouseClicked(){
	 draged = true;
for (var i = 0; i < ima.length; i++) {
		
		ima[i].click(mouseX,mouseY,ima[i]);

	}	

};

busca = function(objeto,vector){
for (var i = 0; i < vector.length; i++) {
	if (objeto.tipo == vector[i]) {
		return i;	
	}
	
}
return -1;

};

compruebo = function(x,y,objeto){

 mouseDragged = function() {

 		if (draged) {
			 	objeto.x  = mouseX;
			 	objeto.y = mouseY;
			 	

			 if (objeto.x >= 600 ) {
			 	objeto.x = 575;	
			 }
			 if (objeto.y >= 450 ) {
			 	objeto.y = 430;	
			 }

			if (objeto.x <= caja1.x + 30 & objeto.y >= caja1.y) {
				draged = false;
				var x= busca(objeto,caja1.vector);
				if (x >=0) {
					contador -=1;
					objeto.imagen = -1;
					var v = document.getElementById("exito");
       				v.play();
       				
				}else if (x == -1) {
					objeto.ancho = tamaño;
					objeto.alto = tamaño;
					objeto.x = pila[0];
					objeto.y = pila[1];
		
					var v = document.getElementById("error");
       				 v.play();
       				

				}
				
			}
				if (objeto.x >= caja2.x & objeto.y >= caja2.y) {
				draged = false;		
				var x = busca(objeto,caja2.vector);
				if (x >=0) {
					contador -=1;
					objeto.imagen = -1;
					var v = document.getElementById("exito");
       				v.play();
       				
				}else if (x == -1) {
					objeto.ancho = tamaño;
					objeto.alto = tamaño;
					objeto.x = pila[0];
					objeto.y = pila[1];
		
					var v = document.getElementById("error");
       				 v.play();
       				

				}
				 
				}

			}
		}
			 };

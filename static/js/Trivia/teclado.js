//Funcion que busca la letra dentro del array
var buscaLetra = function(codigoLetra,	teclaPress, escribir){
		
	for(var i = 0; i < teclaPress.length; i++){
		if(teclaPress[i].teclaPmayus == codigoLetra || teclaPress[i].teclaPminus == codigoLetra ){
			escribir.push({t: teclaPress[i].letra});
			//alert("Presionaste: " + teclaPress[i].letra + escribir);	
		}
	};								
}


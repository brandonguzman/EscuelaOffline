http_request = null;

function cargarAjax(nombre_funcion, url){
	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
	    http_request = new XMLHttpRequest();
	    if( http_request.overrideMimeType ){
	    	http_request.overrideMimeType('text/xml');
	    }
	} else if (window.ActiveXObject) { // IE
	    http_request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if( !http_request ){ //si el obj es null.
		return false;
	}

	http_request.onreadystatechange = nombre_funcion;
	http_request.open('GET', url, nombre_funcion);
	http_request.send(null);
}

function funcion(){
	if (http_request.readyState == 4) { //respuesta recibida
    	if (http_request.status == 200) { //OK
    		alert(http_request.responseText);
		} else {

		}
	} else {

	}
}

cargarAjax();
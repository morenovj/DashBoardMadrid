var peticionURL = 'JSON/twitter.txt';
var peticion = new XMLHttpRequest();
peticion.open('GET', peticionURL, true);
peticion.responseType = 'json';
peticion.send();


peticion.onload = function(){
    var contenido = peticion.response;
    console.log(contenido);
    obtenerDatos(contenido);
}

function obtenerDatos(contenido){
    var tr;
    for (var i = 0; i < contenido.length; i++) {
        tr = $('<tr/>');
        tr.append("<a href="+contenido[i].direccion+">" + contenido[i].texto + "</a>");
        $("#datosTwitter").append(tr);
    }
}
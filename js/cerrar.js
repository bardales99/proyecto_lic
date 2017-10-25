if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
function iniciar(){
	var boton= document.getElementById('cerrar_sesion');
	if(boton.addEventListener){
		boton.addEventListener("click",function(){
			window.location= '../index.html';
		},false);
	}
}

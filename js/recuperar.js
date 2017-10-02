(()=>{
	//Declaramos las variables de la ventana modal
	var modal = document.getElementById('modal-show');
	var btnmodal = document.getElementById('modal');
	var btncerrarmodal = document.getElementById('cerrar');
	var contRecu = document.getElementById('form-con');
	var capaN = document.getElementById('capa-negra');
	var menu =  document.getElementById('menu');
	var cont2= document.getElementById('con2');
	var lblalert = document.getElementById('lblinner');
	var successM = document.getElementById('success-modal');

btncerrarmodal.onclick = function(){
		modal.style.display = 'none';
		contRecu.style.display = "block";
		cont2.style.marginTop = '-5%';
		capaN.style.opacity = '1';
		successM.style.color = '#E23E57';
	}
//se inicializa el proceso al cargar la pagina
if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
//se inicia el proceso
function iniciar(){
	var boton= document.getElementById('btnenviar');
	if(boton.addEventListener){
		boton.addEventListener("click",function(){
			var recuperar= new recuperacion(document.recuperar.correo.value, document.recuperar.pregunta.value)
			recuperar.comprobar();
		},false);
}

}
//se pasan los datos
function recuperacion(email, respuesta){
	this.email=email;
	this.respuesta=respuesta;
	this.comprobar= function(){
		var pregunta= document.recuperar.pregunseguri.options[recuperar.pregunseguri.selectedIndex].text;
		var user= sessionStorage.getItem("Usuario");
		var pregun= sessionStorage.getItem("Pregunta");
		var respu= sessionStorage.getItem("Respuesta");
		var pass= sessionStorage.getItem("Password");
		var lblalert = document.getElementById('lblinner');
		if((email===user) && (pregunta===pregun) && (respu===respuesta)){
			//si todo es correcto despues de la verificacion se muestra la contra
	contRecu.style.display = "none";
	modal.style.display = 'block';
	cont2.style.marginTop = '9.5%';
	capaN.style.opacity = '0';
	successM.style.color = '#40A798';
	lblalert.innerHTML = "Hola, tu contraseña es: " + pass;
		}else{
		contRecu.style.display = "none";
		modal.style.display = 'block';
		cont2.style.marginTop = '9.5%';
		capaN.style.opacity = '0';
		successM.style.color = '#E23E57';
		lblalert.innerHTML = "Correo, pregunta o respuesta incorrecta";
		}
	}
}
})();
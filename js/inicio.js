(()=>{
	var modal = document.getElementById('modal-show');
	var btnmodal = document.getElementById('modal');
	var contSes = document.getElementById('form-se');
	var capaN = document.getElementById('capa-negra');
	var menu =  document.getElementById('menu');
	var cont2= document.getElementById('con2');
	var lblalert = document.getElementById('lblinner');
	var successM = document.getElementById('success-modal');

if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
function iniciar(){
	var boton= document.getElementById('btnenviar');
	if(boton.addEventListener){
		boton.addEventListener("click",function(){
			var inicio= new sesion(document.inicio.correo.value, document.inicio.contra.value)
			inicio.comprobar();
		},false);
}
}
function sesion(email, password){
	this.email= email;
	this.password=password;
	this.comprobar= function(){
		var user= sessionStorage.getItem("Usuario");
		var pass= sessionStorage.getItem("Password");
		var btncerrarmodal = document.getElementById('cerrar');
		if((email===user) && pass===password){
			if (sessionStorage.getItem("Banco")){
	btncerrarmodal.onclick = function(){
		window.location= "menusesion.html";
		modal.style.display = 'none';
		successM.style.color = '#E23E57';
	}}else{
		btncerrarmodal.onclick = function(){
		window.location= "datos_iniciales.html";
		modal.style.display = 'none';
		successM.style.color = '#E23E57';
	}
	}

	contSes.style.display = "none";
	modal.style.display = 'block';
	cont2.style.marginTop = '9.5%';
	capaN.style.opacity = '0';
	lblalert.innerHTML = "Bienvenido a eWallet";
	successM.style.color = '#40A798';
		}else{
	contSes.style.display = "none";
	modal.style.display = 'block';
	cont2.style.marginTop = '9.5%';
	capaN.style.opacity = '0';
	lblalert.innerHTML = "Datos de sesión incorrectos";
	btncerrarmodal.onclick = function(){
		modal.style.display = 'none';
		contSes.style.display = "block";
		cont2.style.marginTop = '-5%';
		capaN.style.opacity = '1';
	}
		}
		
	}
}
})();

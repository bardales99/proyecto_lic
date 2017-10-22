(()=>{
		//Declaramos las variables de la ventana modal
	var modal = document.getElementById('modal-show');
	var btnmodal = document.getElementById('modal');
	var btncerrarmodal = document.getElementById('cerrar');
	var contRegistro = document.getElementById('form-reg');
	var capaN = document.getElementById('capa-negra');
	var menu =  document.getElementById('menu');
	var cont2= document.getElementById('con2');
	var successM = document.getElementById('success-modal');
	var lblalert = document.getElementById('lblinner');
	var cerrar = false;
	var usuarios = [];
	var count = 0;
//se inicializa el proceso al cargar la pagina
if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
//se inicializa el proceso del registro
function iniciar(){
	localStorage.clear();
	var boton= document.getElementById('btnenviar');
	if(boton.addEventListener){
		boton.addEventListener("click",function(){
			var nuevousuario= new User(document.frmregistro.nombres.value, document.frmregistro.apellidos.value, document.frmregistro.correo.value, document.frmregistro.contra.value, document.frmregistro.confirm_contra.value, document.frmregistro.departamento.value, document.frmregistro.municipio.value, document.frmregistro.colonia.value, document.frmregistro.calle_pasaje.value, document.frmregistro.num_casa.value, document.frmregistro.pregunta.value, document.frmregistro.DUI.value, document.frmregistro.NIT.value, document.frmregistro.num_cel.value, document.frmregistro.fecha.value);
			nuevousuario.comprobar();
		},false);
	}
}
//se crea la funcion que abarca todos los datos
function User(nombres, apellidos, email, password, password2, departamento, municipio, colonia, calle, casa,respuesta, dui, nit, numero, fecha){
	this.nombres=nombres;
	this.apellidos=apellidos;
	this.email=email;
	this.password=password;
	this.password2=password2;
	this.departamento= departamento;
	this.municipio= municipio;
	this.colonia= colonia;
	this.calle= calle;
	this.casa= casa;
	this.respuesta=respuesta;
	this.dui=dui;
	this.nit=nit;
	this.numero=numero;
	this.fecha= fecha;
	//se inicializa cada variable a el valor que se ha pasado
	this.comprobar= function(){
		//se crean los patrones
		var pre= document.frmregistro.pregunseguri.options[frmregistro.pregunseguri.selectedIndex].text;
		var nombs= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]?)+$/;
		var apells=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]?)+$/;
		var corr= /^[\w]+@{1}[\w]+\.[a-z]{2,3}/;
		var pass=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
		var depar= ['Santa Ana', 'Sonsonate', 'Ahuachapan', 'La Libertad', 'Chalatenango', 'San Salvador', 'La Paz', 'Cuscatlan','San Vicente','Usulutan','Cabañas','Morazan','San Miguel','La Union'];
		var du= /^\d{8}-\d{1}$/;
		var ni= /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
		var num= /^[6,7]{1}\d{3}-\d{4}$/;
		var fechaNac= new Date(fecha);
		var fechaact= new Date();
		var mes= fechaact.getMonth();
		var dia= fechaact.getDay();
		var anio= fechaact.getFullYear();
		fechaact.setDate(dia);
		fechaact.setMonth(mes);
		fechaact.setFullYear(anio);
		var edad= Math.floor(((fechaact-fechaNac)/(1000*60*60*24)/365));
		//se verifica con un if si todo es true y la longitud es mayor a 0
		if((nombs.test(nombres) && nombres.length!=0) && ((apells.test(apellidos) && apellidos.length!=0)) && ((corr.test(email) && email.length!=0)) && ((pass.test(password) && password.length!=0)) && ((password===password2)) && ((depar.includes(departamento))) && ((municipio.length!=0 && municipio.length!=" ")) && ((colonia.length!=0 && colonia.length!=" ")) && ((calle.length!=0 && calle.length!=" ")) && ((casa.length!=0 && casa.length!=" ")) && ((du.test(dui))) && ((respuesta.length!=0 && respuesta.length!=" ")) && ((ni.test(nit))) && ((num.test(numero))) && (edad>=18)){
		
		//LocalStorage
		var user = {
			Usuario: email,
			Password: password,
			Respuesta: respuesta,
			Pregunta: pre
		};
		var usuarioGuardado = JSON.stringify(user);
		localStorage.setItem("UsuarioR", usuarioGuardado);
		var usuarioStr = localStorage.getItem("UsuarioR");
		var usuarioStr = JSON.parse(usuarioStr);
		usuarios[count] = usuarioStr;
		count +=1;
		//Fin LocalStorage

			//se mmuestra la modal dependiendo del rsultado
			contRegistro.style.display = "none";
			modal.style.display = 'block';
			cont2.style.marginTop = '9.5%';
			capaN.style.opacity = '0';
			successM.style.color = '#40A798';
			lblalert.innerHTML = "Datos correctos, el Registro ha sido exitoso";
		
		btncerrarmodal.onclick = function(){
		window.location= "../html/menu.html";
		modal.style.display = 'none';
		contRegistro.style.display = "block";
		cont2.style.marginTop = '-5%';
		capaN.style.opacity = '1';
		successM.style.color = '#E23E57';
			}
		}else{
		contRegistro.style.display = "none";
		modal.style.display = 'block';
		cont2.style.marginTop = '9.5%';
		capaN.style.opacity = '0';
	btncerrarmodal.onclick = function(){
		modal.style.display = 'none';
		contRegistro.style.display = "block";
		cont2.style.marginTop = '-5%';
		capaN.style.opacity = '1';
	}
		}
		if(nombs.test(nombres) && nombres.length!=0){
			document.frmregistro.input1.style.borderColor="#00FF08";
		}else{
			document.frmregistro.input1.style.borderColor="#FF0000";
		}if(apells.test(apellidos) && apellidos.length!=0){
			document.frmregistro.input2.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input2.style.borderColor="#FF0000";
		}if(corr.test(email) && email.length!=0){
			document.frmregistro.input3.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input3.style.borderColor="#FF0000";
		}if(pass.test(password) && password.length!=0){
			document.frmregistro.input4.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input4.style.borderColor="#FF0000";
		}if(password===password2 && password2.length!=0){
			document.frmregistro.input5.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input5.style.borderColor="#FF0000";
		}if(depar.includes(departamento)){
			document.frmregistro.input6.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input6.style.borderColor="#FF0000";
		}if(municipio.length!=0 && municipio.length!=" "){
			document.frmregistro.input7.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input7.style.borderColor="#FF0000";
		}if(colonia.length!=0 && colonia.length!=" "){
			document.frmregistro.input8.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input8.style.borderColor="#FF0000";
		}if(calle.length!=0 && calle.length!=" "){
			document.frmregistro.input9.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input9.style.borderColor="#FF0000";
		}if(casa.length!=0 && casa.length!=" "){
			document.frmregistro.input10.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input10.style.borderColor="#FF0000";
		}if(du.test(dui)){
			document.frmregistro.input11.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input11.style.borderColor="#FF0000";
		}if(respuesta.length!=0 && respuesta.length!=" "){
			document.frmregistro.inputpregunta.style.borderColor="#00FF00";
		}else{
			document.frmregistro.inputpregunta.style.borderColor="#FF0000";
		}if(ni.test(nit)){
			document.frmregistro.input12.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input12.style.borderColor="#FF0000";
		}if(num.test(numero)){
			document.frmregistro.input13.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input13.style.borderColor="#FF0000";
		}if(edad>=18){
			document.frmregistro.input14.style.borderColor="#00FF00";
		}else{
			document.frmregistro.input14.style.borderColor="FF0000";
		}
	}
}
})();
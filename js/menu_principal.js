(()=>{

//se declaran las variables de los botones del menu
	var btnCuentas = document.getElementById('cuentas');
	var contCuentas = document.getElementById('sub-cuentas');
	var contConfi = document.getElementById('sub-conf');
	var contEstad = document.getElementById('sub-estadi');
	var btnConfi = document.getElementById('configuraciones');
	var btnEstadis = document.getElementById('estadisticas');

	var cuenta = false;

	//se muestran los datos segun se presione un boton
	btnCuentas.onclick = function(){
		if (cuenta == false){
		contCuentas.style.display = 'block';
		cuenta = true;
		}else if(cuenta == true){
		contCuentas.style.display = 'none';
		cuenta = 0;
		}
	}

	btnConfi.onclick = function(){
		if (cuenta == false){
		contConfi.style.display = 'block';
		cuenta = true;
		}else if(cuenta == true){
		contConfi.style.display = 'none';
		cuenta = 0;
		}

	}
	btnEstadis.onclick = function(){
		if (cuenta == false){
		contEstad.style.display = 'block';
		cuenta = true;
		}else if(cuenta == true){
		contEstad.style.display = 'none';
		cuenta = 0;
		}
	}
})();
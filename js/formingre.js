(()=>{
	//script para ocultar y aparecer el formulario
	var frmingre = document.getElementById('form-in');
	var btningresos = document.getElementById('btn-ingre');
	var cerrar;
	//cuando se haga click se muestra y cerrar = true
	btningresos.onclick = function(){
		frmingre.style.display = 'block';
		btningresos.textContent = 'Terminar';
		cerrar = true;
		//si es igual a true al presionar nuevamente el form se cierra
		if (cerrar == true){
		btningresos.onclick = function(){
		cerrar= false;
		frmingre.style.display = 'none';
		btningresos.textContent = 'Agregar una nueva tarjeta';
			}
		}
	}
})();
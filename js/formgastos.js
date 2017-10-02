(()=>{
	//script para ocultar y aparecer el formulario
	var frmgas = document.getElementById('form-in');
	var btngas = document.getElementById('btn-gas');
	var cerrar;
	//cuando se haga click se muestra y cerrar = true
	btngas.onclick = function(){
		frmgas.style.display = 'block';
		btngas.textContent = 'Terminar';
		cerrar = true;
		//si es igual a true al presionar nuevamente el form se cierra
		if (cerrar == true){
		btngas.onclick = function(){
		cerrar= false;
		frmgas.style.display = 'none';
		btngas.textContent = 'Agregar gasto';
			}
		}
	}
})();
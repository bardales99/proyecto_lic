(()=>{
	//script para ocultar y aparecer el formulario
	var frmtarjetas = document.getElementById('form-tar');
	var btntarje = document.getElementById('btn-tarje');
	var cerrar;
	//cuando se haga click se muestra y cerrar = true
	btntarje.onclick = function(){
		frmtarjetas.style.display = 'block';
		btntarje.textContent = 'Terminar';
		cerrar = true;
		//si es igual a true al presionar nuevamente el form se cierra
		if (cerrar == true){
		btntarje.onclick = function(){
		cerrar= false;
		frmtarjetas.style.display = 'none';
		btntarje.textContent = 'Agregar una nueva tarjeta';
			}
		}
	}
})();
(()=>{
	//script para ocultar y aparecer el formulario
	var frmcuentas = document.getElementById('form-se');
	var frmtarjetas = document.getElementById('form-tar');
	var btncuentas = document.getElementById('btn-cuentas');
	var btntarje = document.getElementById('btn-tarje');
	var cerrar;
	//cuando se haga click se muestra y cerrar = true
	btncuentas.onclick = function(){
		frmcuentas.style.display = 'block';
		btncuentas.textContent = 'Terminar';
		cerrar = true;
		//si es igual a true al presionar nuevamente el form se cierra
		if (cerrar == true){
	btncuentas.onclick = function(){
		cerrar= false;
		frmcuentas.style.display = 'none';
		btncuentas.textContent = 'Agregar una nueva cuenta';
			}
		}
	}

})();
(()=>{
	var frmgas = document.getElementById('form-in');
	var btngas = document.getElementById('btn-gas');
	var cerrar;
	btngas.onclick = function(){
		frmgas.style.display = 'block';
		btngas.textContent = 'Terminar';
		cerrar = true;
		if (cerrar == true){
		btngas.onclick = function(){
		cerrar= false;
		frmgas.style.display = 'none';
		btngas.textContent = 'Agregar gasto';
			}
		}
	}
})();

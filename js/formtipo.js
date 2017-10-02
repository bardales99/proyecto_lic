(()=>{
  //script para mostrar los select segun su opcion
	var Scuentas = document.getElementById('selectC');
	var Starjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox');
  //se captura el evento del select con el addEventListener
select.addEventListener('change',
  function(){
    //se declara la variable que debe tomar el valor del select
    var selectedOption = this.options[select.selectedIndex];
    //se muestra algo si una opcion es seleccionada
    if(selectedOption.text = "Cuenta de ahorro"){
    	Scuentas.style.display = 'block';
      Starjeta.style.display = 'none';
    }else if(selectedOption.text = "Tarjeta de crédito"){
    	Starjeta.style.display = 'block';
      Scuentas.style.display = 'none';
    }
  });

})();
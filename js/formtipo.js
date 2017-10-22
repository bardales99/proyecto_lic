(()=>{
  //script para mostrar los select segun su opcion
	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox');
  //se captura el evento del select con el addEventListener
  window.onload = function(){
    document.getElementById('seltarjeta').style.display = "none";
    document.getElementById('selcuenta').style.display = "none";
    tarjeta.style.display = 'none';
    cuentas.style.display = 'none';
  }
select.addEventListener('change',
  function(){
    //se declara la variable que debe tomar el valor del select
    var selectedOption = this.options[select.selectedIndex];
    //se muestra algo si una opcion es seleccionada
    console.log(selectedOption);
    if(selectedOption.text == "Cuenta de ahorro"){
    	cuentas.style.display = 'block';
      tarjeta.style.display = 'none';
      document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
    }else if(selectedOption.text == "Tarjeta de crédito"){
    	tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
      document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
    }
  });

})();
(()=>{
  //script para mostrar los select segun su opcion
	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox2');
  var lblC = document.getElementById('titulo-tipos');
  var lblT = document.getElementById('ty');
  var cadena;
  var contSes = document.getElementById('form-in');
  //se captura el evento del select con el addEventListener
  window.onload = function(){
    tipopago();
  }
  function tipopago(){
  var tipo = localStorage.getItem("TipoPago");
  var tipo = JSON.parse(tipo);

  var tipoPag = tipo.TipoPago;
  var opcion = tipo.OpcionSelect;
  var SelectC = document.getElementById('selcuentaF');
  var SelectT = document.getElementById('seltarjetaF');

  if (tipoPag == "tarjeta") {

    var prin = document.createElement('option');
    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Tarjeta de crédito";
    prin.value = tipoPag;
    select.appendChild(prin);
    var option = document.createElement('option');
      option.id = "opc";
      option.className = "opcionesS";
      option.textContent = opcion;
      option.value = opcion;
      SelectT.appendChild(option);
      tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
      lblT.style.color = 'black';
      lblT.style.fontSize = '1.1em';
      lblT.style.fontFamily = 'sego';
      console.log(prin);
      console.log(option);

  }else if(tipoPag == "cuenta"){
    var prin = document.createElement('option');
    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Cuenta de ahorro";
    prin.value = "Cuenta de ahorro";
    select.appendChild(prin);
    var option = document.createElement('option');
      option.id = "opc";
      option.className = "opcionesS";
      option.textContent = opcion;
      option.value = opcion;
      SelectC.appendChild(option);
      tarjeta.style.display = 'none';
      cuentas.style.display = 'block';
      lblC.style.color = 'black';
      lblC.style.fontSize = '1.1em';
      lblC.style.fontFamily = 'sego';
  }else if(tipoPag == "Efectivo"){
    var prin = document.createElement('option');
    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Efectivo";
    prin.value = "Efectivo";
    select.appendChild(prin);
      }  

  }

})();
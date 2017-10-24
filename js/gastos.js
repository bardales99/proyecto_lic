(()=>{
  //script para mostrar los select segun su opcion
	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox2');
  var contFoo = document.getElementById('foo');
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
    prin.value = "Tarjeta de crédito";
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
  /*
  document.getElementById('seltarjeta').style.display = "none";
  document.getElementById('selcuentaF').style.display = "none";
   tarjeta.style.display = 'none';
    cuentas.style.display = 'none';

select.addEventListener('change',
  function(){
    //se declara la variable que debe tomar el valor del select
    var selectedOption = this.options[select.selectedIndex];
    //se muestra algo si una opcion es seleccionada
    if(selectedOption.text == "Cuenta de ahorro"){
    	cuentas.style.display = 'block';
      tarjeta.style.display = 'none';
      contSes.style.marginBottom = '-2%';
      contFoo.style.marginTop = '7%';
      document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuentaF').style.display = "block";
    document.getElementById('titulo-tipos').style.color = "#363636";
    document.getElementById('titulo-tipos').style.fontFamily = "sego";
      cadena = "Cuenta de ahorro";
      generarOpciones(cadena);
    }else if(selectedOption.text == "Tarjeta de crédito"){
    	tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
      contSes.style.marginBottom = '-2%';
      contFoo.style.marginTop = '7%';
    document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuentaF').style.display = "block";
    document.getElementById('ty').style.color = "#363636";
    document.getElementById('ty').style.fontFamily = "sego";
    cadena = "Tarjeta de crédito";
    generarOpciones(cadena);
    }else if(selectedOption.text == "Efectivo"){
      tarjeta.style.display = 'none';
      cuentas.style.display = 'none';
      contSes.style.marginBottom = '0px';
      contFoo.style.marginTop = '2%';
    document.getElementById('seltarjeta').style.display = "none";
    document.getElementById('selcuentaF').style.display = "none";
    document.getElementById('ty').style.color = "#363636";
    document.getElementById('ty').style.fontFamily = "sego";
    }
  });

function generarOpciones(metodo){
  var SelectC = document.getElementById('selcuentaF');
  var SelectT = document.getElementById('seltarjeta');
  if (metodo == "Cuenta de ahorro") {
    for (var i = 0; i < 50; i++) {
      var metodoC = localStorage.getItem("Banco # " + i);
      var metodoC = JSON.parse(metodoC);
      var option = document.createElement('option');
      option.id = "cuenta"+ i;
      option.className = "opcionesS";
      option.textContent = metodoC.NumCuenta;
      SelectC.appendChild(option);
    }
  }
  if(metodo == "Tarjeta de crédito"){
    for (var i = 0; i < 50; i++) {
      var metodoT = localStorage.getItem("Tarjeta # " + i);
      var metodoT = JSON.parse(metodoT);
      var option = document.createElement('option');
      option.setAttribute("id", "tarjeta " + i);
      option.className = "opcionesS";
      option.textContent = metodoT.NumTarjeta;
      SelectT.appendChild(option);
    }
  }
  
}//fin function
*/

})();
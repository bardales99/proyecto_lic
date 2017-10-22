(()=>{
  //script para mostrar los select segun su opcion
	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox2');
  var contFoo = document.getElementById('foo');
  var cadena;
  var contSes = document.getElementById('form-in');
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
    if(selectedOption.text == "Cuenta de ahorro"){
    	cuentas.style.display = 'block';
      tarjeta.style.display = 'none';
      contSes.style.marginBottom = '-2%';
      contFoo.style.marginTop = '6%';
      document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
    document.getElementById('titulo-tipos').style.color = "#363636";
    document.getElementById('titulo-tipos').style.fontFamily = "sego";
      cadena = "Cuenta de ahorro";
      generarOpciones(cadena);
    }else if(selectedOption.text == "Tarjeta de crédito"){
    	tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
      contSes.style.marginBottom = '-2%';
      contFoo.style.marginTop = '6%';
    document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
    document.getElementById('ty').style.color = "#363636";
    document.getElementById('ty').style.fontFamily = "sego";
    cadena = "Tarjeta de crédito";
    generarOpciones(cadena);
    }else if(selectedOption.text == "Efectivo"){
      tarjeta.style.display = 'none';
      cuentas.style.display = 'none';
      contSes.style.marginBottom = '0px';
      contFoo.style.marginTop = '3%';
    document.getElementById('seltarjeta').style.display = "none";
    document.getElementById('selcuenta').style.display = "none";
    document.getElementById('ty').style.color = "#363636";
    document.getElementById('ty').style.fontFamily = "sego";
    }
  });

function generarOpciones(metodo){
  var SelectC = document.getElementById('selcuenta');
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

})();
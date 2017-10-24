(()=>{
	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox');
	var btn_define = document.getElementById('btn-defin');
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
    console.log(selectedOption);
    //se muestra algo si una opcion es seleccionada
    if(selectedOption.text == "Cuenta de ahorro"){
    cuentas.style.display = 'block';
      tarjeta.style.display = 'none';
      document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
      cadena = "Cuenta de ahorro";
      generarOpciones(cadena);
    }else if(selectedOption.text == "Tarjeta de crédito"){
    	tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
    document.getElementById('seltarjeta').style.display = "block";
    document.getElementById('selcuenta').style.display = "block";
    cadena = "Tarjeta de crédito";
    generarOpciones(cadena);
    }else if(selectedOption.text == "Efectivo"){
      tarjeta.style.display = 'none';
      cuentas.style.display = 'none';
    document.getElementById('seltarjeta').style.display = "none";
    document.getElementById('selcuenta').style.display = "none";
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

btn_define.onclick = function(){
  	var select = document.getElementById('inputbox').value;
  	var t = document.getElementById('seltarjeta').value;
	var c = document.getElementById('selcuenta').value;
	var nel = 0;
	if (select == "tarjeta") {
		var pagos = {
			TipoPago: select,
			OpcionSelect: t
		}
		var formaP = JSON.stringify(pagos);
		localStorage.setItem("TipoPago",formaP);
	}else if(select == "cuenta"){
		var pagos = {
			TipoPago: select,
			OpcionSelect: c
		}
		var formaP = JSON.stringify(pagos);
		localStorage.setItem("TipoPago",formaP);
	}else if(select == "Efectivo"){
		var pagos = {
			TipoPago: select,
			OpcionSelect: nel
		}
		var formaP = JSON.stringify(pagos);
		localStorage.setItem("TipoPago",formaP);
	}
  }

})();
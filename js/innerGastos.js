(()=>{	
	var btnAgregar = document.getElementById('agregar');

	var modal = document.getElementById('modal-show');
    var btncerrarmodal = document.getElementById('cerrar');
    var contSes = document.getElementById('form-in');
    var successM = document.getElementById('success-modal');
    var lblalert = document.getElementById('lblinner');
    var cerrar = false;
    //Generar valor de los select
    var selectPrincipal = document.getElementById('inputbox2');
	var selectC = document.getElementById('selcuentaF');
  	var selectT = document.getElementById('seltarjetaF');
	var gastosG = localStorage.getItem("#GastosGenerados");
	var gastosG = JSON.parse(gastosG);
	var count = gastosG.NumGastosGen;
	var motivosG = localStorage.getItem("#MotivosGenerados");
	var motivosG = JSON.parse(motivosG);
	var cuenta = motivosG.NumMotivosGen;
	var se = document.getElementById('motivo');
	var motivo_gen;

	var tipp = localStorage.getItem("TipoPago");
	var tipp = JSON.parse(tipp);
	var typetype = tipp.TipoPago;
	var opciopci = tipp.OpcionSelect;

	var cuentas = document.getElementById('selectC');
	var tarjeta = document.getElementById('selecT');
	var select = document.getElementById('inputbox2');
  var lblC = document.getElementById('titulo-tipos');
  var lblT = document.getElementById('ty');
  var cadena;
  var contSes = document.getElementById('form-in');


  var prin = document.createElement('option');
  var opt = document.createElement('option');

  //se captura el evento del select con el addEventListener
  function tipopago(){
  var tipo = localStorage.getItem("TipoPago");
  var tipo = JSON.parse(tipo);

  var tipoPag = tipo.TipoPago;
  var opcion = tipo.OpcionSelect;
  var SelectC = document.getElementById('selcuentaF');
  var SelectT = document.getElementById('seltarjetaF');

  if (tipoPag == "tarjeta") {

    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Tarjeta de crédito";
    prin.value = tipoPag;
    select.appendChild(prin);
      opt.id = "opc";
      opt.className = "opcionesS";
      opt.textContent = opcion;
      opt.value = opcion;
      SelectT.appendChild(opt);
      tarjeta.style.display = 'block';
      cuentas.style.display = 'none';
      lblT.style.color = 'black';
      lblT.style.fontSize = '1.1em';
      lblT.style.fontFamily = 'sego';

  }else if(tipoPag == "cuenta"){
    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Cuenta de ahorro";
    prin.value = "Cuenta de ahorro";
    select.appendChild(prin);
      opt.id = "opc";
      opt.className = "opcionesS";
      opt.textContent = opcion;
      opt.value = opcion;
      SelectC.appendChild(opt);
      tarjeta.style.display = 'none';
      cuentas.style.display = 'block';
      lblC.style.color = 'black';
      lblC.style.fontSize = '1.1em';
      lblC.style.fontFamily = 'sego';
  }else if(tipoPag == "Efectivo"){
    prin.id = "prima";
    prin.className = "opcionesS";
    prin.textContent = "Efectivo";
    prin.value = "Efectivo";
    select.appendChild(prin);
      }  

  }
  /*fin*/









window.onload = function(){
	tipopago();
	var motivosG = localStorage.getItem("#MotivosGenerados");
	var motivosG = JSON.parse(motivosG);
	var cuenta = motivosG.NumMotivosGen;
	if (cuenta != 0){
		innerMotivo(cuenta);
	}else{
		cuenta = motivosG.NumMotivosGen;
	}
}

function innerMotivo(cuen){
	var select = document.getElementById('motivo');
	for (var i = 0; i <= cuen; i++) {
	var mot = localStorage.getItem("Motivo # " + i);
	var mot = JSON.parse(mot);
	var option = document.createElement('option');
	option.textContent = mot.MotivosGen;
	select.appendChild(option);
	}
	
}

se.addEventListener('change',function(){
	var ind = se.selectedIndex;
	var opt = se.options;
  	motivo_gen = opt[ind].text;
});
//Fin Generar valor de los select

btnAgregar.onclick = function(){

	var sell = document.getElementById('prima').value;
	var tipp = document.getElementById('opc').value;

	var fechaPa = document.getElementById('inputext1').value;
	var fech = new Date(fechaPa);
	var dia = fech.getDate();
	var mes = fech.getMonth();
	var anio = fech.getFullYear();
	var fechaIngreso = String((dia += 1)+"/"+ (mes+=1)+"/"+anio);

	var txtMonto = document.getElementById('monto');
	
	var txtMotivo = document.getElementById('inputext2');
	
	
	var motivo = txtMotivo.value;
	var monto = txtMonto.value || '';

    if (motivo == "") {
        motivo = motivo_gen;
    }else{
    	motivo = txtMotivo.value;
    	agregarmotivo(txtMotivo.value,cuenta);
    }
    if (!monto || !monto.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un valor para el monto o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        }
        return;
    }

    txtMotivo.value = '';
    txtMonto.value = '';
    if (sell == "Efectivo") {
    	opt = "";
    }
    var userGas = {
        Fecha: fechaIngreso,
        Motivo: motivo,
        Monto: monto,
        TipoPago: sell,
        LugarGasto: opt.value,
        Id: count
    };
    var userGasguardado = JSON.stringify(userGas);
    localStorage.setItem("Gasto # " + count,userGasguardado);
    var userGasString = localStorage.getItem("Gasto # " + count);
    var userGasString = JSON.parse(userGasString);
    var pag = userGasString.LugarGasto;
    count += 1;
    agasto(count);
    console.log(sell);
    console.log(opt.value);
    restarGasto(monto, count, sell, pag);
    window.location = 'gastos.html';
}
function restarGasto(monto,id,sC_T,nC_T){
	if (sC_T == "Cuenta de ahorro"){
		for (var i = 0; i <50 ; i++) {
			var gasto = localStorage.getItem("Banco # " + i);
			var gasto = JSON.parse(gasto);
			var numCu = gasto.NumCuenta;
			var resta = gasto.SaldoCuenta;
			var banco = gasto.Banco;
			var identi = gasto.Id;
			if (numCu === nC_T){
				var nuevoSaldo = resta - monto;
				var modificarB = {
					Banco: banco,
					NumCuenta: numCu,
					SaldoCuenta: nuevoSaldo,
					Id: identi
					};
				var userBmodi = JSON.stringify(modificarB);
    			localStorage.setItem("Banco # " + identi,userBmodi);
			}//fin IF
			window.location = 'gastos.html';
		}
		window.location = 'gastos.html';
	}else if(sC_T == "Tarjeta de crédito"){
		for (var i = 0; i <50 ; i++) {
			var gasto = localStorage.getItem("Tarjeta # " + i);
			var gasto = JSON.parse(gasto);
			var numeroTarjeta = gasto.NumTarjeta;
			var resta = gasto.SaldoActual;
			console.log(resta);
			var banco = gasto.Banco;
			var identi = gasto.Id;
			var interes = gasto.InteresAnual;
			var fecha_pago = gasto.FechaPago;
			if (numeroTarjeta === nC_T){
				var nuevoSaldo = resta - monto;
				var modificarB = {
					Banco: banco,
					NumTarjeta: numeroTarjeta,
					SaldoActual: nuevoSaldo,
					FechaPago: fecha_pago,
					InteresAnual: interes,
					Id: identi
					};
				var userBmodi = JSON.stringify(modificarB);
    			localStorage.setItem("Tarjeta # " + identi,userBmodi);
			}//fin IF
			window.location = 'gastos.html';
		}
		window.location = 'gastos.html';
	}else if(sC_T == "Efectivo"){
			var gasto = localStorage.getItem("Balance");
			var gasto = JSON.parse(gasto);
			var efectivo = gasto.Efectivo_Balance;
			var efecUser = localStorage.getItem("UsuarioR");
	    	var efecUser = JSON.parse(efecUser);
	    	var NombreUsuario = efecUser.Usuario

				var nuevoSaldo = efectivo - monto;
				var modificarE = {
					Efectivo_Balance: nuevoSaldo,
					User: NombreUsuario
					};
				var userEmodi = JSON.stringify(modificarE);
    			localStorage.setItem("Balance",userEmodi);
	window.location = 'gastos.html';
	}
	window.location = 'gastos.html';
}

function agasto(count){
		var efecUser = localStorage.getItem("UsuarioR");
	    var efecUser = JSON.parse(efecUser);
	    var NombreUsuario = efecUser.Usuario

		var GastosCount = {
			NumGastosGen: count,
	    	User: NombreUsuario
		}
		var Account = JSON.stringify(GastosCount);
		localStorage.setItem("#GastosGenerados", Account);
	}
function agregarmotivo(motivo,cuenta){
	var efecUser = localStorage.getItem("UsuarioR");
	    var efecUser = JSON.parse(efecUser);
	    var NombreUsuario = efecUser.Usuario

	var userMot = {
		MotivosGen: motivo,
	    User: NombreUsuario
	}
	var userMotguardado = JSON.stringify(userMot);
	localStorage.setItem("Motivo # " + cuenta, userMotguardado);
	cuenta += 1;
	motivoN(cuenta);
	}
function motivoN(count){
		var efecUser = localStorage.getItem("UsuarioR");
	    var efecUser = JSON.parse(efecUser);
	    var NombreUsuario = efecUser.Usuario

		var MotivosCount = {
			NumMotivosGen: count,
	    	User: NombreUsuario
		}
		var Account = JSON.stringify(MotivosCount);
		localStorage.setItem("#MotivosGenerados", Account);
	}
})();
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
	var selectC = document.getElementById('selcuenta');
  	var selectT = document.getElementById('seltarjeta');
	var tipoPago;
	var selectedOption;
	var gastosG = localStorage.getItem("#GastosGenerados");
	var gastosG = JSON.parse(gastosG);
	var count = gastosG.NumGastosGen;
	var motivosG = localStorage.getItem("#MotivosGenerados");
	var motivosG = JSON.parse(motivosG);
	var cuenta = motivosG.NumMotivosGen;
	var se = document.getElementById('motivo');
	var motivo_gen;

window.onload = function(){
	var motivosG = localStorage.getItem("#MotivosGenerados");
	var motivosG = JSON.parse(motivosG);
	var cuenta = motivosG.NumMotivosGen;
	innerMotivo(cuenta);	
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

selectPrincipal.addEventListener('change',
  function(){
  	selectedOption = this.options[selectPrincipal.selectedIndex];
  	selectedOption = selectedOption.text;
  	if (selectedOption == "Cuenta de ahorro"){
  	selectC.addEventListener('change',function(){
  	var ind = selectC.selectedIndex;
  	var opt = selectC.options;
  	tipoPago = 0;
  	tipoPago = opt[ind].text;
  		});
  	}else if(selectedOption == "Tarjeta de crédito"){
  	selectT.addEventListener('change',function(){
  	var ind = selectT.selectedIndex;
  	var opt = selectT.options;
  	tipoPago = 0;
  	tipoPago = opt[ind].text;
  	});
  	}
});

se.addEventListener('change',function(){
	var ind = se.selectedIndex;
	var opt = se.options;
  	motivo_gen = opt[ind].text;
});
//Fin Generar valor de los select

btnAgregar.onclick = function(){
	
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

    var userGas = {
        Fecha: fechaIngreso,
        Motivo: motivo,
        Monto: monto,
        TipoPago: selectedOption,
        LugarGasto: tipoPago,
        Id: count
    };
    var userGasguardado = JSON.stringify(userGas);
    localStorage.setItem("Gasto # " + count,userGasguardado);
    var userGasString = localStorage.getItem("Gasto # " + count);
    var userGasString = JSON.parse(userGasString);
    var pag = userGasString.LugarGasto;
    count += 1;
    agasto(count);
    restarGasto(monto,count,selectedOption,pag);
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
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
	var ingresosG = localStorage.getItem("#IngresosGenerados");
	var ingresosG = JSON.parse(ingresosG);
	var count = ingresosG.NumIngresosGen;

selectPrincipal.addEventListener('change',
  function(){
  	selectedOption = this.options[selectPrincipal.selectedIndex];
  	selectedOption = selectedOption.text;
  	if (selectedOption == "Cuenta de ahorro"){
  	selectC.addEventListener('change',function(){
  	var ind = selectC.selectedIndex;
  	var opt = selectC.options;
  	tipoPago = opt[ind].text;
  		});
  	}else if(selectedOption == "Tarjeta de crédito"){
  	selectT.addEventListener('change',function(){
  	var ind = selectT.selectedIndex;
  	var opt = selectT.options;
  	tipoPago = opt[ind].text;
  	});
  	}

});

//Fin Generar valor de los select

btnAgregar.onclick = function(){
	
	var fechaPa = document.getElementById('inputext1').value;
	var fech = new Date(fechaPa);
	var dia = fech.getDate();
	var mes = fech.getMonth();
	var anio = fech.getFullYear();
	var fechaIngreso = String((dia += 1)+"/"+ (mes+=1)+"/"+anio);

	
	var txtMotivo = document.getElementById('inputext2');
	var txtMonto = document.getElementById('monto');
	
	var motivo = txtMotivo.value || '';
	var monto = txtMonto.value || '';

    if (!motivo || !motivo.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un motivo valido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
    }
        return;
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

    var userIn = {
        Fecha: fechaIngreso,
        Motivo: motivo,
        Monto: monto,
        LugarAbono: selectedOption,
        NumIngreso: tipoPago,
        Id: count
    };
    var userInguardado = JSON.stringify(userIn);
    localStorage.setItem("Ingreso # " + count,userInguardado);
    var userInString = localStorage.getItem("Ingreso # " + count);
    var userInString = JSON.parse(userInString);
    var pag = userInString.NumIngreso;
    count += 1;
    aggingreso(count);
    sumarIngreso(monto,count,selectedOption,pag);
    window.location = "ingresos.html";
}

function sumarIngreso(monto,id,sC_T,nC_T){
    console.log(monto);
    console.log(id);
    console.log(sC_T);
    console.log(nC_T);
    if (sC_T == "Cuenta de ahorro"){
        for (var i = 0; i <50 ; i++) {
            var ingreso = localStorage.getItem("Banco # " + i);
            var ingreso = JSON.parse(ingreso);
            var numCu = ingreso.NumCuenta;
            var suma = ingreso.SaldoCuenta;
            var banco = ingreso.Banco;
            var identi = ingreso.Id;
            if (numCu === nC_T){
                var nuevoSaldo = parseFloat(suma) + parseFloat(monto);
                var modificarB = {
                    Banco: banco,
                    NumCuenta: numCu,
                    SaldoCuenta: nuevoSaldo,
                    Id: identi
                    };
                var userBmodi = JSON.stringify(modificarB);
                localStorage.setItem("Banco # " + identi,userBmodi);
            }//fin IF
            window.location = 'ingresos.html'
        }
        window.location = 'ingresos.html'
    }else if(sC_T == "Tarjeta de crédito"){
        for (var i = 0; i <50 ; i++) {
            var ingreso = localStorage.getItem("Tarjeta # " + i);
            var ingreso = JSON.parse(ingreso);
            var numeroTarjeta = ingreso.NumTarjeta;
            var suma = ingreso.SaldoActual;
            var banco = ingreso.Banco;
            var identi = ingreso.Id;
            var interes = ingreso.InteresAnual;
            var fecha_pago = ingreso.FechaPago;
            if (numeroTarjeta === nC_T){
                var nuevoSaldo = parseFloat(suma) + parseFloat(monto);
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
            window.location = 'ingresos.html'
        }
        window.location = 'ingresos.html'
    }else if(sC_T == "Efectivo"){
            var ingreso = localStorage.getItem("Balance");
            var ingreso = JSON.parse(ingreso);
            var efectivo = ingreso.Efectivo_Balance;
            var efecUser = localStorage.getItem("UsuarioR");
            var efecUser = JSON.parse(efecUser);
            var NombreUsuario = efecUser.Usuario

                var nuevoSaldo = parseFloat(efectivo) + parseFloat(monto);
                var modificarE = {
                    Efectivo_Balance: nuevoSaldo,
                    User: NombreUsuario
                    };
                var userEmodi = JSON.stringify(modificarE);
                localStorage.setItem("Balance",userEmodi);
    window.location = 'ingresos.html'
    }
    window.location = 'ingresos.html'
}

function aggingreso(count){
		var efecUser = localStorage.getItem("UsuarioR");
	    var efecUser = JSON.parse(efecUser);
	    var NombreUsuario = efecUser.Usuario

		var CuentasCount = {
			NumIngresosGen: count,
	    	User: NombreUsuario
		}
		var Account = JSON.stringify(CuentasCount);
		localStorage.setItem("#IngresosGenerados", Account);
	}

})();
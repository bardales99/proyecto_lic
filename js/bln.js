(()=>{
	var saldo= document.getElementById('balance');
	var resul1 = 0;
	var resul2 = 0;
	var sumaT = 0;
	var efectivo = localStorage.getItem("Balance");
	var efectivo = JSON.parse(efectivo);
	var dinero = efectivo.Efectivo_Balance;
	var sum1= 0;
	var sum2 = 0;
	var suma_unida = 0;
	var ingreso_gastos = 0;
	var efecUser = localStorage.getItem("UsuarioR");
    var efecUser = JSON.parse(efecUser);
    var NombreUsuario = efecUser.Usuario
    /*Sacar valores de registros ingresados*/

    /*Ingresos*/
    var numI = localStorage.getItem("#IngresosGenerados");
    var numI = JSON.parse(numI);
    var tNumI = numI.NumIngresosGen;
    var suma_totalI = 0;
    /*Gastos*/
    var numG = localStorage.getItem("#GastosGenerados");
    var numG = JSON.parse(numG);
    var tNumG = numG.NumGastosGen;
    var suma_totalG = 0;
    /*Bancos*/
    var numC = localStorage.getItem("#CuentasGeneradas");
    var numC = JSON.parse(numC);
    var tNumC = numC.NumCuentaGen;
    var suma_totalC = 0;
    /*Tarjetas*/
    var numT = localStorage.getItem("#TarjetasGeneradas");
    var numT = JSON.parse(numT);
    var tNumT = numT.NumTarjetasGen;
    var suma_totalT = 0;

if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
function iniciar(){
	if (localStorage.getItem("Tarjeta # 0")) {
		/*For cuentas*/
		for (var i = 0; i < tNumC; i++) {
			var acc = localStorage.getItem("Banco # " + i);
			var acc = JSON.parse(acc);
			var bancos = acc.SaldoCuenta;
			var arrayC = [];
			arrayC[i] = parseFloat(bancos);
			var totalFinal = 0;
			totalFinal += arrayC[i];
			sum1 += totalFinal;
		}
		/*For tarjetas*/
		for (var i = 0; i < tNumT; i++) {
			var tarjetas = localStorage.getItem("Tarjeta # " + i);
			var tarjetas = JSON.parse(tarjetas);
			var tarjes = tarjetas.SaldoActual;
			var arrayT = [];
			arrayT[i] = parseFloat(tarjes);
			var totalFinal = 0;
			totalFinal += arrayT[i];
			sum2 += totalFinal;
		}
		suma_unida = parseFloat(sum1) + parseFloat(sum2) + parseFloat(dinero);
		saldo.innerHTML= "$ "+suma_unida;
	}else{
		/*For cuentas*/
		for (var i = 0; i < tNumC; i++) {
			var acc = localStorage.getItem("Banco # " + i);
			var acc = JSON.parse(acc);
			var bancos = acc.SaldoCuenta;
			var arrayC = [];
			arrayC[i] = parseFloat(bancos);
			var totalFinal = 0;
			totalFinal += arrayC[i];
			sum1 += totalFinal;
		}
		suma_unida = parseFloat(sum1) + parseFloat(dinero);
		saldo.innerHTML= "$ "+suma_unida;
	}
	//fin proceso de tarjetas y bancos

		//proceso para gastos y ingresos

	//for gastos
	if (localStorage.getItem("Gasto # 0") && localStorage.getItem("Ingreso # 0")) {

	for (var i = 0; i < tNumG; i++) {
		var gastos = localStorage.getItem("Gasto # " + i);
		var gastos = JSON.parse(gastos);
		var totalG = gastos.Monto;
		var totalGsumado; 
		totalGsumado = parseFloat(totalG);
		var arrayG = [];
		arrayG[i] = parseFloat(totalGsumado);
		var totalFinal = 0;
		totalFinal += arrayG[i];
		resul1 += totalFinal;
	}
	//for ingresos
	for (var i = 0; i < tNumI; i++) {
		var ingresos = localStorage.getItem("Ingreso # " + i);
		var ingresos = JSON.parse(ingresos);
		var totalI = ingresos.Monto;
		var totalIsumado;
		totalIsumado = parseFloat(totalI);
		var arrayI = [];
		arrayI[i] = parseFloat(totalIsumado);
		var totalFinal = 0;
		totalFinal += arrayI[i];
		resul2 += totalFinal;
		}	
	}else{
		resul1 = 0;
		resul2 = 0;
	}
	ingreso_gastos = parseFloat(resul2) - parseFloat(resul1);
	var verde = parseFloat(ingreso_gastos) * 0.50;
	var amari = parseFloat(ingreso_gastos) * 0.25;
	var rojo = parseFloat(ingreso_gastos) * 0.05;
	if (suma_unida > verde) {
			saldo.style.color = "#088C6F";
			saldo.innerHTML= "$ "+ suma_unida + " Se encuentra arriba del 50%";
			saldo.style.fontWeight = "bold";
		}else if(suma_unida >= amari && suma_unida <= verde){
			saldo.style.color = "#FFE037";
			saldo.innerHTML= "$ "+ suma_unida + " Se encuentra arriba del 25%";
			saldo.style.fontWeight = "bold";
		}else if(suma_unida < amari && suma_unida >= rojo){
			saldo.style.color = "#CF0A2C";
			saldo.innerHTML= "$ "+ suma_unida + " Se encuentra arriba del 5%";
			saldo.style.fontWeight = "bold";
		}else{
			saldo.style.color = "#CF0A2C";
			saldo.innerHTML= "$ "+ suma_unida + " Se encuentra por debajo del balance minimo";
			saldo.style.fontWeight = "bold";
		}
	var actu = {
		BalanceGeneral: suma_unida,
		User: NombreUsuario,
		BalanceMinimo: ingreso_gastos
	}
		var fin = JSON.stringify(actu);
		localStorage.setItem("BalanceIngresosGastos", fin);
}

})();
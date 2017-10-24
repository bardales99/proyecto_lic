(()=>{
	var saldo= document.getElementById('balance');
	var resul = 0;
	var sumaT = 0;
	var efectivo = localStorage.getItem("Balance");
	var efectivo = JSON.parse(efectivo);
	var dinero = efectivo.Efectivo_Balance;
	var sum = 0;
	var efecUser = localStorage.getItem("UsuarioR");
    var efecUser = JSON.parse(efecUser);
    var NombreUsuario = efecUser.Usuario

if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}

function iniciar(){

	for (var i = 0; i <= 1; i++) {
		if (localStorage.getItem("Tarjeta # 0")) {
		var acc = localStorage.getItem("Banco # " + i);
		var tarjetas = localStorage.getItem("Tarjeta # " + i);
		var acc = JSON.parse(acc);
		var tarjetas = JSON.parse(tarjetas);
		var bancos = acc.SaldoCuenta;
		var tarjes = tarjetas.SaldoActual;
		
			var arrayI = [];
			var arrayG = [];
			arrayI[i] = parseFloat(bancos);
			arrayG[i] = parseFloat(tarjes);
			var totalFinal = 0;
			totalFinal += arrayI[i] + arrayG[i];
			sum += totalFinal;
		}else{
		var acc = localStorage.getItem("Banco # " + i);
		var acc = JSON.parse(acc);
		var bancos = acc.SaldoCuenta;
		
			var arrayI = [];
			arrayI[i] = parseFloat(bancos);
			var totalFinal = 0;
			totalFinal += arrayI[i];
			sum += totalFinal;
		}
		
	}
	sum = parseFloat(sum) + parseFloat(dinero);

		for (var i = 0; i <= 50; i++) {
			var gastos = localStorage.getItem("Gasto # " + i);
			var ingresos = localStorage.getItem("Ingreso # " + i);
			var gastos = JSON.parse(gastos);
			var ingresos = JSON.parse(ingresos);
			var totalG = gastos.Monto;
			var totalI = ingresos.Monto;
			var totalGsumado; 
			totalGsumado = parseFloat(totalG);
			var totalIsumado;
			totalIsumado = parseFloat(totalI);
			var arrayI = [];
			var arrayG = [];
			arrayI[i] = parseFloat(totalIsumado);
			arrayG[i] = parseFloat(totalGsumado);
			var totalFinal = 0;
			totalFinal += arrayI[i] - arrayG[i];
			resul += totalFinal;
			saldo.innerHTML= "$ "+sum;
		var verde = parseFloat(resul) * 0.50;
		var amari = parseFloat(resul) * 0.25;
		var rojo = parseFloat(resul) * 0.05;
		if (sum > verde) {
			saldo.style.color = "#088C6F";
			saldo.innerHTML= "$ "+sum + " Se encuentra arriba del 50%";
			saldo.style.fontWeight = "bold";
		}else if(sum >= amari && sum <= verde){
			saldo.style.color = "#FFE037";
			saldo.innerHTML= "$ "+sum + " Se encuentra arriba del 25%";
			saldo.style.fontWeight = "bold";
		}else if(sum < amari && sum >= rojo){
			saldo.style.color = "#CF0A2C";
			saldo.innerHTML= "$ "+sum + " Se encuentra arriba del 5%";
			saldo.style.fontWeight = "bold";
		}else{
			saldo.style.color = "#CF0A2C";
			saldo.innerHTML= "$ "+sum + " Se encuentra por debajo del balance minimo";
			saldo.style.fontWeight = "bold";
		}
		var actu = {
		BalanceGeneral: sum,
		User: NombreUsuario,
		BalanceMinimo: resul
	}
		var fin = JSON.stringify(actu);
		localStorage.setItem("BalanceIngresosGastos", fin);
			//fin if
		}
	}

})();
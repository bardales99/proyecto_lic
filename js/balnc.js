(()=>{
	var saldo= document.getElementById('balance');
	var balanc= localStorage.getItem("BalanceIngresosGastos");
	var balanc = JSON.parse(balanc);
	var efectivo = balanc.BalanceGeneral;

if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}

	function iniciar(){
	saldo.innerHTML= "$ "+efectivo;
	}

})();
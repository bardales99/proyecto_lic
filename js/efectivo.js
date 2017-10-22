(()=>{

if(window.addEventListener){
 	window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", iniciar);
}
	var Balance_de_Efectivo= document.getElementById('efectivo');
	var balanc= localStorage.getItem("Balance");
	var balanc = JSON.parse(balanc);
	var efectivo = balanc.Efectivo_Balance;

function iniciar(){
	Balance_de_Efectivo.innerHTML= "$ "+efectivo;
}

})();
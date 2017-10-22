(()=>{
	var tabla = document.getElementById('tabla-cuents');
	var cuentasG = localStorage.getItem("#CuentasGeneradas");
	var cuentasG = JSON.parse(cuentasG);
	var count = cuentasG.NumCuentaGen;

	var btnAgregar = document.getElementById('agregar');
	
	var modal = document.getElementById('modal-show');
    var btncerrarmodal = document.getElementById('cerrar');
    var contSes = document.getElementById('form-se');
    var successM = document.getElementById('success-modal');
    var lblalert = document.getElementById('lblinner');
    var cerrar = false;
if(window.addEventListener){
 	window.addEventListener("load", generarCuentas, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", generarCuentas);
}

function generarCuentas(){
	while (tabla.childElementCount > 0) {
        tabla.removeChild(tabla.firstElementChild);
    }
    for (var i = 0; i < 50; i++) {
    	var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td1.className = "tdCuentas";
        td2.className = "tdCuentas";
        td3.className = "tdCuentas";
        //localStorage

        var obtCuentas = localStorage.getItem("Banco # " + i);
        var obtCuentas = JSON.parse(obtCuentas);

        //fin localStorage
        td1.textContent = obtCuentas.Banco;
        td2.textContent = obtCuentas.NumCuenta;
        td3.textContent = obtCuentas.SaldoCuenta;
        tabla.appendChild(tr);
    		}
		}//FIN function

	btnAgregar.onclick = function(){
	
	var txtbanco = document.getElementById('banco');
	var txtNcuenta = document.getElementById('Ncuenta');
	var txtSaldo = document.getElementById('saldo');
	var banco = txtbanco.value || '';
	var numcuenta = txtNcuenta.value || '';
	var saldo = txtSaldo.value || '';

	if (!banco || !banco.trim().length) {
    contSes.style.display = "none";
    modal.style.display = 'block';
    modal.style.marginTop = '-30%';
    modal.style.marginBottom = '14%';
    modal.style.marginLeft = '25%';
    modal.style.backgroundColor = 'white';
    successM.style.backgroundColor = 'white';
    lblalert.innerHTML = "Debe Ingresar un banco";
    btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
    }
        return;
    }
    
    if (!numcuenta || !numcuenta.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un # de Cuenta o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
    }
        return;
    }
    if (!saldo || !saldo.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un valor para el saldo o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        }
        return;
    }

    txtbanco.value = '';
    txtNcuenta.value = '';
    txtSaldo.value = '';
    txtbanco.focus();


	var userB = {
        Banco: banco,
        NumCuenta: numcuenta,
        SaldoCuenta: saldo,
        Id: count
    };
    var userBguardado = JSON.stringify(userB);
    localStorage.setItem("Banco # " + count,userBguardado);
    var userBString = localStorage.getItem("Banco # " + count);
    var userBString = JSON.parse(userBString);
    count += 1;
    aggcuentas(count);
    window.location = "cuentas.html";
}//fin function agregar

	function aggcuentas(count){
		var efecUser = localStorage.getItem("UsuarioR");
	    var efecUser = JSON.parse(efecUser);
	    var NombreUsuario = efecUser.Usuario

		var CuentasCount = {
			NumCuentaGen: count,
	    	User: NombreUsuario
		}
		var Account = JSON.stringify(CuentasCount);
		localStorage.setItem("#CuentasGeneradas", Account);
	}

})();
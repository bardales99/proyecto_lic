(()=>{
	var tabla = document.getElementById('tabla-tarje');
	
	var btnAgregar = document.getElementById('agregar');

	var modal = document.getElementById('modal-show');
    var btncerrarmodal = document.getElementById('cerrar');
    var contSes = document.getElementById('form-tar');
    var successM = document.getElementById('success-modal');
    var lblalert = document.getElementById('lblinner');
    var cerrar = false;

if(window.addEventListener){
 	window.addEventListener("load", generarTarjetas, false);
}
else if(window.attachEvent){
 	window.attachEvent("onload", generarTarjetas);
}
function generarTarjetas(){
	while (tabla.childElementCount > 0) {
        tabla.removeChild(tabla.firstElementChild);
    }

    for (var i = 0; i < 50; i++) {
    	var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        td1.className = "tdTarjetas";
        td2.className = "tdTarjetas";
        td3.className = "tdTarjetas";
        td4.className = "tdTarjetas";
        td5.className = "tdTarjetas";
        //localStorage

        var obtTarjetas = localStorage.getItem("Tarjeta # " + i);
        var obtTarjetas = JSON.parse(obtTarjetas);

        //fin localStorage
        td1.textContent = obtTarjetas.Banco;
        td2.textContent = obtTarjetas.NumTarjeta;
        td3.textContent = obtTarjetas.SaldoActual;
        td4.textContent = obtTarjetas.InteresAnual;
        td5.textContent = obtTarjetas.FechaPago;
        tabla.appendChild(tr);
    }
}
btnAgregar.onclick = function(){
	var tarjetasG = localStorage.getItem("#TarjetasGeneradas");
	var tarjetasG = JSON.parse(tarjetasG);
	var count = tarjetasG.NumTarjetasGen;

	var txtbanco = document.getElementById('inputext1');
	var txtNtarjeta = document.getElementById('inputext2');
	var txtSaldo = document.getElementById('saldo');
	var txtInteres = document.getElementById('interes');
	var txtFecha = document.getElementById('fecha');

	var banco = txtbanco.value || '';
	var numtarje = txtNtarjeta.value || '';
	var saldo = txtSaldo.value || '';
	var interes = txtInteres.value || '';
	var fecha = txtFecha.value || '';

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
    if (!numtarje || !numtarje.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un # de Tarjeta o el caracter es inválido";
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
    if (!interes || !interes.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Debe ingresar un valor para el interes o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        }
        return;
    }
    if (!fecha || !fecha.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        modal.style.marginTop = '-30%';
        modal.style.marginBottom = '14%';
        modal.style.marginLeft = '25%';
        modal.style.backgroundColor = 'white';
        successM.style.backgroundColor = 'white';
        lblalert.innerHTML = "Ingrese un dia correcto";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        }
        return;
    }
    txtbanco.value = '';
    txtNtarjeta.value = '';
    txtSaldo.value = '';
    txtInteres.value = '';
    txtFecha.value = '';
    txtbanco.focus();

    var userT = {
        Banco: banco,
        NumTarjeta: numtarje,
        SaldoActual: saldo,
        InteresAnual: interes,
        FechaPago: fecha,
        Id: count
    };
    var userTguardado = JSON.stringify(userT);
    localStorage.setItem("Tarjeta # " + count,userTguardado);
    var userTString = localStorage.getItem("Tarjeta # " + count);
    var userTString = JSON.parse(userTString);
    if (count === 0) {
    	var cero = 0;
    	aggtarjetas(cero);
    }
    count += 1;
    aggtarjetas(count);
    window.location = "tarjetascredito.html";
}

function aggtarjetas(count){
	var tarjeUser = localStorage.getItem("UsuarioR");
	    var tarjeUser = JSON.parse(tarjeUser);
	    var NombreUsuario = tarjeUser.Usuario

		var TarjetasCount = {
			NumTarjetasGen: count,
	    	User: NombreUsuario
		}
		var Account = JSON.stringify(TarjetasCount);
		localStorage.setItem("#TarjetasGeneradas", Account);
	}
})();
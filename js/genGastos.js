(()=>{
	var table = document.getElementById('tabla-gastos');
	window.onload  = function(){
		generarGastos();
	}
	function generarGastos(){
		while (table.childElementCount > 0) {
        table.removeChild(table.firstElementChild);
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
        
        td1.className = "tdGastos";
        td2.className = "tdGastos";
        td3.className = "tdGastos";
        td4.className = "tdGastos";
        td5.className = "tdGastos";
        //localStorage

        var obtGastos = localStorage.getItem("Gasto # " + i);
        var obtGastos = JSON.parse(obtGastos);

        //fin localStorage
        td1.textContent = obtGastos.Fecha;
        td2.textContent = obtGastos.Motivo;
        td3.textContent = obtGastos.Monto;
        td4.textContent = obtGastos.TipoPago;
        td5.textContent = obtGastos.LugarGasto;
        table.appendChild(tr);
    	}
	}//Fin function
})();
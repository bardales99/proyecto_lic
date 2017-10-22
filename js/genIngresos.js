(()=>{
	var table = document.getElementById('tabla-ingr');
	window.onload  = function(){
		generarIngresos();
	}
	function generarIngresos(){
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
        
        td1.className = "tdIngresos";
        td2.className = "tdIngresos";
        td3.className = "tdIngresos";
        td4.className = "tdIngresos";
        td5.className = "tdIngresos";
        //localStorage

        var obtIngreso = localStorage.getItem("Ingreso # " + i);
        var obtIngreso = JSON.parse(obtIngreso);

        //fin localStorage
        td1.textContent = obtIngreso.Fecha;
        td2.textContent = obtIngreso.Motivo;
        td3.textContent = obtIngreso.Monto;
        td4.textContent = obtIngreso.LugarAbono;
        td5.textContent = obtIngreso.NumIngreso;
        table.appendChild(tr);
        }
    }//Fin function
    
})();
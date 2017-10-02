(()=>{
    //Declaramos las variables de la ventana modal
var modal = document.getElementById('modal-show');
    var btnmodal = document.getElementById('modal');
    var btncerrarmodal = document.getElementById('cerrar');
    var contSes = document.getElementById('form-se');
    var capaN = document.getElementById('capa-negra');
    var menu =  document.getElementById('menu');
    var cont2= document.getElementById('con2');
    var successM = document.getElementById('success-modal');
    var lblalert = document.getElementById('lblinner');
    var cerrar = false;
//se inicializa el proceso al cargar la pagina
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
//se declaran las variables de input y la tabla
var tablaElementos = document.getElementById('tabla-elementos');

var txtbanco = document.getElementById('banco');
var txtNcuenta = document.getElementById('Ncuenta');
var txtSaldo = document.getElementById('saldo');

var btnAgregar = document.getElementById('agregar');

//variable para manejar las cuentas
var datos = [];
//funcion para modificar algo
var cambiar = function(banco,nucuenta,saldo){
    var banco_ant = banco;
    var nucuenta_ant = nucuenta;
    var saldo_ant = saldo;

    btnAgregar.textContent = 'Modificar';
//se verificica si el boton dice modificar se hace el proceso de cambiar si no no hace nada
    if (btnAgregar.textContent = "Modificar"){
        btnAgregar.onclick = function(){
    var Nbanco = document.getElementById('banco').value;
    var NNcuenta = document.getElementById('Ncuenta').value;
    var NSaldo = document.getElementById('saldo').value;
    // se declara el item para ingresarlo en el arreglo
    var Nitem = {
        banco: Nbanco.trim(),
        numcuenta: NNcuenta.trim(),
        saldo: NSaldo.trim(),
        fecha: new Date()
        }
//for para recorrer el arreglo
    for (var i = 0; i < datos.length; i++) {
        var elemento = datos[i];
        if (elemento.banco == banco_ant && elemento.numcuenta == nucuenta_ant && elemento.saldo == saldo_ant){
        var index = datos.indexOf(elemento);
        var elementoEliminado = datos.splice(index, 1);
        //funcion para remover la fila
        var remover = function(){
           if (tablaElementos.childElementCount > 0){
            tablaElementos.removeChild(tablaElementos.firstElementChild);
           }
        }
        remover();
        //si todo esta bien se modifica el nuevo elemento
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        td1.textContent = elemento.banco;
        td2.textContent = elemento.numcuenta;
        td3.textContent = elemento.saldo;
        }
        btnAgregar.textContent = ' + Agregar  cuenta';
    }//fin for

            }//fin function btn
        }//fin if
    }//fin function

//funcion para posicionar los datos en input
function btnEditar_Click(event) {

    txtbanco.value = this.elemento.banco;
    txtNcuenta.value = this.elemento.numcuenta;
    txtSaldo.value = this.elemento.saldo;
    cambiar(this.elemento.banco,this.elemento.numcuenta,this.elemento.saldo);
}
//funcion para el sessionStorage
function iniciar(){
    var ingresar= document.getElementById('btn-enviar');
    if(ingresar.addEventListener){
        ingresar.addEventListener("click",function(){
            for (var i = 0; i < datos.length; i++) {
        var elemento = datos[i];
   sessionStorage.setItem('Banco',elemento.banco);
    sessionStorage.setItem('#Cuenta',elemento.numcuenta);
    sessionStorage.setItem('Saldo',elemento.saldo);
}
window.location = 'menusesion.html';
        },false);
}
}
//funcion para agregar las filas
function btnAgregar_Click(event) {
//se validan los input si esta mal se muestra una alerta
    var banco = txtbanco.value || '';
    var numcuenta = txtNcuenta.value || '';
    var saldo = txtSaldo.value || '';

    if (!banco || !banco.trim().length) {
        contSes.style.display = "none";
    modal.style.display = 'block';
    cont2.style.marginTop = '9.5%';
    capaN.style.opacity = '0';
    lblalert.innerHTML = "Debe Ingresar un banco";
    btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        cont2.style.marginTop = '-5%';
        capaN.style.opacity = '1';
    }
        return;
    }
    
    if (!numcuenta || !numcuenta.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        cont2.style.marginTop = '9.5%';
        capaN.style.opacity = '0';
        lblalert.innerHTML = "Debe ingresar un # de Cuenta o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        cont2.style.marginTop = '-5%';
        capaN.style.opacity = '1';
    }
        return;
    }
    if (!saldo || !saldo.trim().length) {
        contSes.style.display = "none";
        modal.style.display = 'block';
        cont2.style.marginTop = '9.5%';
        capaN.style.opacity = '0';
        lblalert.innerHTML = "Debe ingresar un valor para el saldo o el caracter es inválido";
        btncerrarmodal.onclick = function(){
        modal.style.display = 'none';
        contSes.style.display = "block";
        cont2.style.marginTop = '-5%';
        capaN.style.opacity = '1';
        }
        return;
    }

    txtbanco.value = '';
    txtNcuenta.value = '';
    txtSaldo.value = '';
    txtbanco.focus();

    var item = {
        banco: banco.trim(),
        numcuenta: numcuenta.trim(),
        saldo: saldo.trim(),
        fecha: new Date()
    };
//se coloca el item al principio del arreglo
    datos.push(item);

    while (tablaElementos.childElementCount > 0) {
        tablaElementos.removeChild(tablaElementos.firstElementChild);
    }
//se adhiere la fila nueva
    for (var i = 0; i < datos.length; i++) {

        var elemento = datos[i];

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        td1.textContent = elemento.banco;
        td2.textContent = elemento.numcuenta;
        td3.textContent = elemento.saldo;

        tablaElementos.appendChild(tr);
        //se crea el boton de modificar los datos
        var nuevoBtn = document.createElement('button');
        nuevoBtn.type = 'button';
        nuevoBtn.textContent = 'Editar';
        nuevoBtn.style.border = '1px solid black';
        nuevoBtn.style.padding = '15px';
        
        nuevoBtn.addEventListener('click',btnEditar_Click);
        nuevoBtn.elemento = elemento;
        td4.appendChild(nuevoBtn);
        }
    }
//se llama a la funcion de agregar
btnAgregar.addEventListener('click', btnAgregar_Click);

})();
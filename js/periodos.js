(()=>{
  //script para mostrar los select segun su opcion
	var anual = document.getElementById('anual');
	var mensual = document.getElementById('mensual');
  var period = document.getElementById('periodo');
	var select = document.getElementById('inputbox');
  //se captura el evento del select con el addEventListener
  window.onload = function(){
    period.style.display = 'none';
    mensual.style.display = 'none';
    anual.style.display = 'none';
  }
select.addEventListener('change',
  function(){
    //se declara la variable que debe tomar el valor del select
    var selectedOption = this.options[select.selectedIndex];
    //se muestra algo si una opcion es seleccionada
    if(selectedOption.text == "Mensuales"){
    	anual.style.display = 'none';
      period.style.display = 'none';
      mensual.style.display = 'block';
      document.getElementById('fot').style.marginTop = "8%";
    }else if(selectedOption.text == "Anuales"){
    	anual.style.display = 'block';
      period.style.display = 'none';
      mensual.style.display = 'none';
      document.getElementById('fot').style.marginTop = "8%";
    }else if(selectedOption.text == "Periodo"){
      anual.style.display = 'none';
      period.style.display = 'block';
      mensual.style.display = 'none';
      document.getElementById('fot').style.marginTop = "18%";
    }
  });

})();
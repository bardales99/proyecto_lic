var op1=prompt('Introduzca el primer numero:','');
var op2=prompt('Introduzca el segundo numero:','');
if(!isNaN(op1) && !isNaN(op2)){
	var sum=parseInt(op1) + parseInt(op2);
	var res=parseInt(op1) - parseInt(op2);
	var mult=parseInt(op1) * parseInt(op2);
	var residuo=parseInt(op1) % parseInt(op2);
	//se valida el segundo numero por la division entre 0
	if(op2!=0)
		var div=parseInt(op1)/parseInt(op2);

	else
		var div=0;
	document.write("<h1>Operaciones Basicas</h1><hr/>");
	document.write("<div class='menu'>");
	document.write("<ul>");
	document.write("<li><a href='javascript:void(0)' onclick=\"alert('"+parseInt(op1) + " + " + parseInt(op2)+ " = "+ sum+"\')\"><span>Sumar</span></a></li>");
	document.write("<li><a href='javascript:void(0)' onclick=\"alert('"+parseInt(op1) + " - " + parseInt(op2)+ " = "+ res+"\')\"><span>Restar</span></a></li>");
	document.write("<li><a href='javascript:void(0)' onclick=\"alert('"+parseInt(op1) + " * " + parseInt(op2)+ " = "+ mult+"\')\"><span>Multiplicar</span></a></li>");
	document.write("<li><a href='javascript:void(0)' onclick=\"alert('"+parseInt(op1) + " / " + parseInt(op2)+ " = "+ div.toFixed(2)+"\')\"><span>Dividir</span></a></li>");
	document.write("<li><a href='javascript:void(0)' onclick=\"alert('"+parseInt(op1) + " Mod " + parseInt(op2)+ " = "+ residuo+"\')\"><span>Residuo</span></a></li>");
	document.write("</ul>");
	document.write("</div>");
}else
	alert("Debe introducir numeros");
	

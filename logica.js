function calculaIMC() 
{
	//passar o peso e altura digitados na interface
	var peso = parseInt(document.getElementById("peso").value);
	var altura = parseFloat(document.getElementById("altura").value.replace(',','.'));	
	var sexo = document.getElementsByName("sexo");
	var imc = peso/Math.pow(altura,2);
	
  for (var i = 0; i < sexo.length; i++) 
  {
  	 console.log(sexo[i].value);
  }


/*
	if (imc < 19.9) 
	{
		window.alert("Resultado: MAGRO\nIMC: "+imc.toFixed(1));
	} 
	else if(imc > 24.9) 
	{
		window.alert("Resultado: GORDO\nIMC: "+imc.toFixed(1));
	}
	else if(imc < 18.9)
	{	
		window.alert("Resultado: MAGRA\nIMC: "+imc.toFixed(1));
	}
	else if (imc > 23.9)
	{
		window.alert("Resultado: GORDA\nIMC: "+imc.toFixed(1))
	}	
	else
	{
		window.alert("Resultado: PESO IDEAL\nIMC: "+imc.toFixed(1));
	}


	*/	
}


function CalcularIMC(){
    var formulario = document.getElementById("formularioIMC");	
    
    var peso  		= +formulario.peso.value;
    var metros 		= +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    var altura = (metros * 100 + centimetros) / 100;

    var imc = peso / (altura * altura);

    formulario.imc.value = imc.toFixed(2);
    
    if(imc < 18.5)
    {
        formulario.resultado.value = 'Magreza';
    } 
    else if(imc >18.5 && imc <= 24.9)
    {
        formulario.resultado.value = "Normal";
    }
    else if(imc >24.9 && imc <= 30)
    {
        formulario.resultado.value = "Sobrepeso";
    }
    else if(imc >30)
    {
        formulario.resultado.value = "Obesidade";
    }
}

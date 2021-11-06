function limpiar(){
    document.getElementById('Formulario').reset();
}

function sumar(){
    var x= parseInt(document.getElementById('valor1').value);
    var y= parseInt(document.getElementById('valor2').value);
    document.getElementById('Resultado').innerHTML = x + y;
}

function restar(){
    var x= parseInt(document.getElementById('valor1').value);
    var y= parseInt(document.getElementById('valor2').value);
    document.getElementById('Resultado').innerHTML = x - y;
}
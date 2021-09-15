document.write("<h1>Serie de fibonacci</>")
   
function fibonacci(numero)
{
    if(numero==1){
        var numeros = 0;
    }
    else{
    var numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    }
    return numeros;
}

function calcular(){
    if (document.getElementById("cantidad").value=="" || document.getElementById("cantidad").value==0){
        alert("Introduce un valor correcto")
    }
    else{
   var nString = document.getElementById("cantidad").value;
   
   var n = Number(nString);
    if( isNaN(n)){
        alert("Introduce un valor numerico")
    }
    else{
    var cadena = fibonacci(n)

   document.getElementById("resultados").innerHTML= cadena
    }
    }
}
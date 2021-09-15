document.write("<h1>Formula general</>")

function calcular(){

    if (document.getElementById("a").value=="" || document.getElementById("b").value=="" || document.getElementById("c").value==""){
        alert("Introduce un valor correcto")
    }
    else{
        var a=document.getElementById("a").value;
        var b= document.getElementById("b").value;
        var c= document.getElementById("c").value;
   
   var an = Number(a);
   var bn = Number(b);
   var cn = Number(c);
    if( isNaN(an) || isNaN(bn) || isNaN(cn)){
        alert("Introduce un valor numerico")
    }
    else{
        var x1 = (((-1)*bn)-(Math.sqrt(Math.pow(bn,2)-(4*an*cn))))/(2*an);
        var x2 = (((-1)*bn)+(Math.sqrt(Math.pow(bn,2)-(4*an*cn))))/(2*an);
        document.getElementById("X1").innerHTML= x1
        document.getElementById("X2").innerHTML= x2
    }
    
}
}

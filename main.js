var operandoA;
var operandoB;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    // var n1 = document.getElementsByClassName("calculadora_pantalla_adentro");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var n6 = document.getElementById("n6");
    var n7 = document.getElementById("n7");
    var n8 = document.getElementById("n8");
    var n9 = document.getElementById("n9");
    var n0 = document.getElementById("n0");
   

    //eventos

    n1.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    n2.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    n3.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    n4.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    n5.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    n6.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    n7.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    n8.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    n9.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    n0.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    div.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multi.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
    }
}
function limpiar(){
    resultado.textContent="";
}
function resetear(){
    resultado.textContent="";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
         case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    resultado.textContent = res;
}
(function (){

// create variables for standard buttons

    var btnClear = document.getElementById("btnClear");
    var btnSign = document.getElementById("btnSign");
    var btnFloat = document.getElementById("btnFloat");
    var btnEquals = document.getElementById("btnEquals");
    var btnAdd = document.getElementById("btnAdd");
    var btnSubtract = document.getElementById("btnSubtract");
    var btnDivide = document.getElementById("btnDivide");
    var btnMultipy = document.getElementById("btnMultiply");

    var outputWindow = document.getElementById("outputWindow");



//numbers -add listner

    var btnNum0 = document.getElementById("btnNum0");
    var btnNum1 = document.getElementById("btnNum1");
    var btnNum2 = document.getElementById("btnNum2");
    var btnNum3 = document.getElementById("btnNum3");
    var btnNum4 = document.getElementById("btnNum4");
    var btnNum5 = document.getElementById("btnNum5");
    var btnNum6 = document.getElementById("btnNum6");
    var btnNum7 = document.getElementById("btnNum7");
    var btnNum8 = document.getElementById("btnNum8");
    var btnNum9 = document.getElementById("btnNum9");

    var num1;
    var num2;

//where all my math happens -- output goes
    outputWindow.innerHTML = 0.0;



//rest of code goes in middle
    var handleNum = function(event) {
        if (outputWindow.innerHTML == 0.0) {
            outputWindow.innerHTML = this.innerHTML;
        } else {
            outputWindow.innerHTML += this.innerHTML;
        }
    }

    var clear = function(event) {
        outputWindow.innerHTML= 0.0
    }


//create button listerners
    btnClear.addEventListener("click", clear);


//numbers
    btnNum0.addEventListener("click", handleNum);
    btnNum1.addEventListener("click", handleNum);
    btnNum2.addEventListener("click", handleNum);
    btnNum3.addEventListener("click", handleNum);
    btnNum4.addEventListener("click", handleNum);
    btnNum5.addEventListener("click", handleNum);
    btnNum6.addEventListener("click", handleNum);
    btnNum7.addEventListener("click", handleNum);
    btnNum8.addEventListener("click", handleNum);
    btnNum9.addEventListener("click", handleNum);


})();
(function (){

// create variables for standard buttons

    const btnClear = document.getElementById("btnClear");
    const btnSign = document.getElementById("btnSign");
    const btnFloat = document.getElementById("btnFloat");
    const btnEquals = document.getElementById("btnEquals");
    const btnAdd = document.getElementById("btnAdd");
    const btnSubtract = document.getElementById("btnSubtract");
    const btnDivide = document.getElementById("btnDivide");
    const btnMultiply = document.getElementById("btnMultiply");

    //where we will see the output
    const outputWindow = document.getElementById("outputWindow");

//numbers -add listener

    const btnNum0 = document.getElementById("btnNum0");
    const btnNum1 = document.getElementById("btnNum1");
    const btnNum2 = document.getElementById("btnNum2");
    const btnNum3 = document.getElementById("btnNum3");
    const btnNum4 = document.getElementById("btnNum4");
    const btnNum5 = document.getElementById("btnNum5");
    const btnNum6 = document.getElementById("btnNum6");
    const btnNum7 = document.getElementById("btnNum7");
    const btnNum8 = document.getElementById("btnNum8");
    const btnNum9 = document.getElementById("btnNum9");

    // const num1;
    // const num2;

//where all my math happens -- output goes
    outputWindow.innerHTML = 0.0;



//rest of code goes in middle
    const handleNum = function(event) {
        if (outputWindow.innerHTML == 0.0) {
            outputWindow.innerHTML = this.innerHTML;
        } else {
            outputWindow.innerHTML += this.innerHTML;
        }
    };

    const clear = function (event) {
        outputWindow.innerHTML = 0.0;
    };

//create button listeners
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
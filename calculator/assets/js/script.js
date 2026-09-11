const screenShow = document.querySelector("#topScreen input")
const valueNumber = document.querySelectorAll("#flexGrid #numberBox button");
const operators = document.querySelectorAll("#operatorsBox button:not(#calculationEqual)");
const finalEqual = document.querySelector("#calculationEqual")
const clearScreen = document.querySelector("#clrScr")
const delElem = document.querySelector("#removeLastElement");

let firstValue = "";
let operatorElemets = "";
let resetScreen = false;

// button to show the number
valueNumber.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        if(resetScreen) {
            screenShow.value = "";
            resetScreen = false;
        };
        screenShow.value += e.target.value;
    });
});


// adding the value in operators  
operators.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        if(screenShow.value === "") return;
        firstValue = screenShow.value;
        operatorElemets = e.target.textContent;
        screenShow.value = "";
    })
});


finalEqual.addEventListener("click", () =>{
    if(firstValue === "" || operatorElemets === "" || screenShow.value === "") return;

    let a = Number(firstValue);
    let b = Number(screenShow.value);
    let calculationResult;

    if(operatorElemets === "+"){
        result = a + b;
    }else if(operatorElemets === "-"){
        result = a - b;
    }else if(operatorElemets === "*"){
        result = a * b;
    }else if(operatorElemets === "/"){
        if(b === 0){
            alert("Please add second value for Divion");
        }else{
            result = a / b;
        }
    }else if(operatorElemets === "%"){
        result = a % b;
    }

    screenShow.value = result;
    firstValue = "";
    operatorElemets = "";
    resetScreen = true;

});

clearScreen.addEventListener("click" , ()=>{
    screenShow.value = "";
    firstValue = "";
    operatorElemets = "";
});

delElem.addEventListener("click", ()=>{
    if (screenShow.value === "") return;
    screenShow.value = screenShow.value.slice(0, -1);
})

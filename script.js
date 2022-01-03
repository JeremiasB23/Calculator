function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function pressedElement(){
    const buttons = document.getElementsByClassName("calculatorOrderChild");

    buttons[0].addEventListener('click', function(){
    
       buttons[0].style.backgroundColor = "blue";
       return "1";
    });
}


console.log(pressedElement());






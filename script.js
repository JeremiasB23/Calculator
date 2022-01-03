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

function operate(a, operator, b){

  if(operator == "+"){
     return add(a, b);
  }else if(operator == "-"){
     return subtract(a, b);
  }else if(operator == "*"){
     return multiply(a, b);
  }else if(operator == "/"){
      return divide(a,b);
  }
    
}

let x = operate(4, "/", 4);
console.log(x);

// function pressedElement(){
//     const buttons = document.getElementsByClassName("calculatorOrderChild");

//     buttons[0].addEventListener('click', function(){
    
//        buttons[0].style.backgroundColor = "blue";
//        return "1";
//     });
// }


// console.log(pressedElement());






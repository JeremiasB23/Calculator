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



function pressedElement(){
    
    const buttons = document.getElementsByTagName("button");
    const screenDisplay = document.querySelector(".screenDisplay");
    const Txt = document.createTextNode("1");
    const ShowNumber = document.createElement("LI");
  
    buttons[0].addEventListener('click', function(){
    
       //buttons[0].style.backgroundColor = "blue";
       ShowNumber.appendChild(Txt);
       screenDisplay.appendChild(ShowNumber);     
    });

    buttons[0].addEventListener('mouseover',function(){//Change it for a keyboard press
    
        //buttons[0].style.backgroundColor = "blue";
        ShowNumber.appendChild(Txt);
        screenDisplay.appendChild(ShowNumber);     
     });

     buttons[1].addEventListener('click', function(){
    
        //buttons[0].style.backgroundColor = "blue";
        ShowNumber.appendChild(Txt);
        screenDisplay.appendChild(ShowNumber);     
     });
}

pressedElement();







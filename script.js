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

let value1 = 0;
let value2 = 0;

function storeValueFirstLine(value){//*Toma el primer valor 

  value1 = value;
  console.log("Value1: " +value1);
  return value1;
}

function storeValueSecondLine(value){//*Toma el segundo valor
    value2 = value;
    console.log("Value2: " +value2);
    return value2;
  }

  let secondNum = false;

function actualOperatorDetector(operator){
    if(operator == "+"){
        return "+";
     }else if(operator == "-"){
        return "-";
     }else if(operator == "*"){
        return "*";
     }else if(operator == "/"){
         return "/";
     }
}

function detectOperator(value){//*Detecta si el elemento que recive es un numero o un operador, cuand recive el operador
                               //*comienza a guardar los nuevos elementos en una nueva linea


    if(actualOperatorDetector(value) == "*"){//!Si el elemento introducido no es un operador agregamos numeros a la primera linea
                     //!Si el elemento introducido es un operador secondNum = true y todos los elementos nuevos se suman a la
                    //!segunda linea y tambien se displayean en la segunda linea de la pantalla
        secondNum = true;
    }else if(value != "=" && secondNum == false){
        storeValueFirstLine(value);
    }

    if(secondNum == true && value != "=" && value != "*"){
        storeValueSecondLine(value);
    }


    if(value == "="){
        console.log(operate(value1, "*", value2));
    }

console.log(secondNum);

    //*If "=" is pressed function susbract(storeValueFirstLine()-storeValueSecondLine());
}

function pressedElement(){

    //!ELEMENTOS COMPARTIDOS
    const buttons = document.getElementsByTagName("button");

    //!FIRST LINE ELEMENTS
    const screenDisplay = document.querySelector(".screenFirstNumbers");
  
    //!SECOND LINE ELEMENTS
    const screenDisplaySecond = document.querySelector(".screenSecondNumbers");


    buttons[0].addEventListener('click', function(){//![1]
    
            const Txt = document.createTextNode("1");
            const ShowNumber = document.createElement("h1");
            ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(1);
        }else{
            screenDisplaySecond.appendChild(ShowNumber);
            detectOperator(1);
        }
       
    });

     buttons[1].addEventListener('click', function(){//![2]
    
        const Txt = document.createTextNode("2");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(2);
        }else{
            screenDisplaySecond.appendChild(ShowNumber);
            detectOperator(2);
        }

     });

     buttons[2].addEventListener('click', function(){//![3]
    
        //buttons[0].style.backgroundColor = "blue";
        const Txt = document.createTextNode("3");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(3);
        }else{
            screenDisplaySecond.appendChild(ShowNumber);
            detectOperator(3);
        }

     });


     buttons[3].addEventListener('click', function(){//![/]
         
        if(secondNum != true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS
  
          const Txt = document.createTextNode("/");
          const ShowNumber = document.createElement("h1");
          ShowNumber.appendChild(Txt);
          screenDisplay.appendChild(ShowNumber);     
          secondNum = true;
          detectOperator("/");
          }
       });  

     buttons[7].addEventListener('click', function(){//![*]
         
      if(secondNum != true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS

        const Txt = document.createTextNode("*");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);
        screenDisplay.appendChild(ShowNumber);     
        secondNum = true;
        detectOperator("*");
        }
     });     

     buttons[11].addEventListener('click', function(){//![-]
         
        if(secondNum != true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS
  
          const Txt = document.createTextNode("-");
          const ShowNumber = document.createElement("h1");
          ShowNumber.appendChild(Txt);
          screenDisplay.appendChild(ShowNumber);     
          secondNum = true;
          detectOperator("-");
          }
       });   
     
     buttons[14].addEventListener('click', function(){
         
        if(secondNum == true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS
          detectOperator("=");
          }

       });     
      
        buttons[15].addEventListener('click', function(){//![+]
            
        if(secondNum != true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS

            const Txt = document.createTextNode("+");
            const ShowNumber = document.createElement("h1");
            ShowNumber.appendChild(Txt);
            screenDisplay.appendChild(ShowNumber);     
            secondNum = true;
            detectOperator("+");
            }
        });   

}

pressedElement();







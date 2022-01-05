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

let value1 = "";
let value2 = "";
let arr = [];
let arr2 = [];

function storeValueFirstLine(value){//*Toma el primer valor 

  arr.push(value);//!Agrega los valores recividos a un array
  //console.log(arr);
  let str = arr.join("");//!Convierte el array en una string
  //console.log(str);

  value1 = str;
  return str;
}

function storeValueSecondLine(value){//*Toma el segundo valor

 if(value != "*" && value != "-" && value != "+" && value != "/"){
    arr2.push(value);//!Agrega los valores recividos a un array
    //console.log(arr2);
 }
  
  let str = arr2.join("");//!Convierte el array en una string
  //console.log(str);
  value2 = str;
  return str;
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


let operatorValue = "";

function detectOperator(value){//*Detecta si el elemento que recive es un numero o un operador, cuand recive el operador
                               //*comienza a guardar los nuevos elementos en una nueva linea

    
    if(actualOperatorDetector(value)){//!Si el elemento introducido no es un operador agregamos numeros a la primera linea
                     //!Si el elemento introducido es un operador secondNum = true y todos los elementos nuevos se suman a la
                    //!segunda linea y tambien se displayean en la segunda linea de la pantalla
        secondNum = true;
        operatorValue = actualOperatorDetector(value);
                    
    }else if(value != "=" && secondNum == false){
        storeValueFirstLine(value);
    }

    if(secondNum == true && value != "=" && value != "*"){
        storeValueSecondLine(value);
    }

    if(value == "="){
        console.log(operate(+value1, operatorValue, +value2));//!The (+)unary plus operator to convert them to numbers first.
        const screenDisplaySecond = document.querySelector(".screenSecondNumbers");
        const Txt = document.createTextNode(operate(+value1, operatorValue, +value2));
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);
        screenDisplaySecond.appendChild(ShowNumber);     
    }

    //*If "=" is pressed function susbract(storeValueFirstLine()-storeValueSecondLine());
}

function pressedElement(){//TODO FIXEAR-> LAS DEMAS OPERACIONES FUNCIONAN PERO LA SUMA PEGA UNA STRING A LA OTRA, FIXEAR!

    //!ELEMENTOS COMPARTIDOS
    const buttons = document.getElementsByTagName("button");

    //!FIRST LINE ELEMENTS
    const screenDisplay = document.querySelector(".screenFirstNumbers");
  
    //!SECOND LINE ELEMENTS
    const screenDisplaySecond = document.querySelector(".screenSecondNumbers");

    //TODO MEJORAR CODIGO: TODOS ESTOS ELEMENOS HACERLOS UNA FUNCTION QUE SEGUN EL NUMERO QUE APRETE DETECTE EL NUMERO DE BOTON 
    //TODO QUE ES Y LOS ELEMENTOS EJ: button[0], createTextNode("1"); detectOperator(1); USEN EL NUMERO DEL BOTON PRESIONADO
    //TODO Y NO TENER UNA DETECCION DE BOTON POR CADA ELEMENTO

    buttons[0].addEventListener('click', function(){//![1]
    
            const Txt = document.createTextNode("1");
            const ShowNumber = document.createElement("h1");
            ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(1);
        }else{
            screenDisplay.appendChild(ShowNumber);
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
            screenDisplay.appendChild(ShowNumber);
            detectOperator(2);
        }

     });

     buttons[2].addEventListener('click', function(){//![3]
    
        
        const Txt = document.createTextNode("3");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(3);
        }else{
            screenDisplay.appendChild(ShowNumber);
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

    buttons[4].addEventListener('click', function(){//![4]
    
        
        const Txt = document.createTextNode("4");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(4);
        }else{
            screenDisplay.appendChild(ShowNumber);
            detectOperator(4);
        }

     }); 

     buttons[5].addEventListener('click', function(){//![5]
    
        
        const Txt = document.createTextNode("5");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(5);
        }else{
            screenDisplay.appendChild(ShowNumber);
            detectOperator(5);
        }

     }); 

     buttons[6].addEventListener('click', function(){//![6]
    
        
        const Txt = document.createTextNode("6");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

        if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
            
            screenDisplay.appendChild(ShowNumber);     
            detectOperator(6);
        }else{
            screenDisplay.appendChild(ShowNumber);
            detectOperator(6);
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

     buttons[8].addEventListener('click', function(){//![7]
    
        const Txt = document.createTextNode("7");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

    if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
        
        screenDisplay.appendChild(ShowNumber);     
        detectOperator(7);
    }else{
        screenDisplay.appendChild(ShowNumber);
        detectOperator(7);
    }
   
    });

    buttons[9].addEventListener('click', function(){//![8]
    
        const Txt = document.createTextNode("8");
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);

    if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
        
        screenDisplay.appendChild(ShowNumber);     
        detectOperator(8);
    }else{
        screenDisplay.appendChild(ShowNumber);
        detectOperator(8);
    }
   
   });

   buttons[10].addEventListener('click', function(){//![9]
    
    const Txt = document.createTextNode("9");
    const ShowNumber = document.createElement("h1");
    ShowNumber.appendChild(Txt);

    if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
        
        screenDisplay.appendChild(ShowNumber);     
        detectOperator(9);
    }else{
        screenDisplay.appendChild(ShowNumber);
        detectOperator(9);
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

    buttons[13].addEventListener('click', function(){//![0]

    const Txt = document.createTextNode("0");
    const ShowNumber = document.createElement("h1");
    ShowNumber.appendChild(Txt);

    if(secondNum != true){//*SI TODAVIA NO APRETE * SUMA A LOS NUMEROS DE ARRIBA, SI LO APRETE SUMA(PRINTEA) LOS NUMEROs ABAJO.
        
        screenDisplay.appendChild(ShowNumber);     
        detectOperator(0);
    }else{
        screenDisplay.appendChild(ShowNumber);
        detectOperator(0);
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

    buttons[17].addEventListener('click', function(){//![DEL]
    
            arr.pop();//TODO VER COMO HACER PARA QUE CUANDO LE MANDE EL POP AL ELEMENTO DEL ARRAY SE BORRE DE PANTALLA
    });   
}

pressedElement();







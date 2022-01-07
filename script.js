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
let operatorValue = "";
let secondNum = false;
let result = 0;
let arrOperators = [];

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

function storeOperator(value){
   arrOperators.push(value);//!Guarda cada array en una posicion
}

let j = 0;

function calculate(){

    //console.log("v1:" + value1);
    //console.log("v2:" +value2);
    result = operate(+value1, arrOperators[j], +value2);//*FIXEAR: CUANDO PASO EL NUEVO OPERATOR ME HACE ESE CALCULO Y NO EL QUE TENDRIA EJ: EN 2+2*3 me multiplica 2y2
    value1 = result;
    value2 = "";//!Reseteo el valor de la segunda variable
    arr2 = [];//!Reseteo el valor de la segunda variable
    //console.log("This is result: "+result);
    //console.log("v1:" + value1);
    //console.log("v2:" +value2);
    j++;//!Cuando ya se uso el operador en el calculo, salto al elemento que sigue
    return result;
}

let i = 0;

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

    
    if(actualOperatorDetector(value)){

        secondNum = true;
        storeOperator(value);
        operatorValue = actualOperatorDetector(value);
        i++;

    }else if(value != "=" && secondNum == false){
        storeValueFirstLine(value);
    }else if(secondNum == true && value != "=" && value != actualOperatorDetector(value)){
        storeValueSecondLine(value);
    }

    
    if(value == "="){
        calculate();
        const screenDisplaySecond = document.querySelector(".screenSecondNumbers");
        const Txt = document.createTextNode(result);
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);
        screenDisplaySecond.appendChild(ShowNumber);     
    }

}

function pressedElement(){//TODO FIXEAR-> LAS DEMAS OPERACIONES FUNCIONAN PERO LA SUMA PEGA UNA STRING A LA OTRA, FIXEAR!

    //!ELEMENTOS COMPARTIDOS
    const buttons = document.getElementsByTagName("button");

    //!FIRST LINE ELEMENTS
    const screenDisplay = document.querySelector(".screenFirstNumbers");

    //TODO MEJORAR CODIGO: TODOS ESTOS ELEMENOS HACERLOS UNA FUNCTION QUE SEGUN EL NUMERO QUE APRETE DETECTE EL NUMERO DE BOTON 
    //TODO QUE ES Y LOS ELEMENTOS EJ: button[0], createTextNode("1"); detectOperator(1); USEN EL NUMERO DEL BOTON PRESIONADO
    //TODO Y NO TENER UNA DETECCION DE BOTON POR CADA ELEMENTO

   function buttonsDetections(){
        buttons[0].addEventListener('click', function(){execute(1)});
        buttons[1].addEventListener('click', function(){execute(2)});
        buttons[2].addEventListener('click', function(){execute(3)});
        buttons[3].addEventListener('click', function(){executeOperators("/")});
        buttons[4].addEventListener('click', function(){execute(4)});
        buttons[5].addEventListener('click', function(){execute(5)});
        buttons[6].addEventListener('click', function(){execute(6)});
        buttons[7].addEventListener('click', function(){executeOperators("*")});
        buttons[8].addEventListener('click', function(){execute(7)});
        buttons[9].addEventListener('click', function(){execute(8)});
        buttons[10].addEventListener('click', function(){execute(9)});
        buttons[11].addEventListener('click', function(){executeOperators("-")});
        buttons[13].addEventListener('click', function(){execute(0)});
        buttons[15].addEventListener('click', function(){executeOperators("+")});
   }

   function keyboardDetections(){
    document.addEventListener('keydown', function(event){

     switch (event.key) {
        case "1":
            execute(1);
        break;
        case "2":
            execute(2);
        break;
        case "3":
            execute(3);
        break;
        case "/":
            executeOperators("/");
        break;
        case "4":
            execute(4);
        break;
        case "5":
            execute(5);
        break;
        case "6":
            execute(6);
        break;
        case "*":
            executeOperators("*");
        break;
        case "7":
            execute(7);
            break;
        case "8":
            execute(8);
            break;
        case "9":
            execute(9);
            break;
        case "-":
            executeOperators("-");
        break;
        case ".":
            execute(".");
            break;
        case "0":
            execute(0);
            break;
        case "Enter":
            detectOperator("=");//!Funciona pero cambiar esto
            calculate();
            break;
        case "+":
            executeOperators("+");
        break;
         default:
           return; // Quit when this doesn't handle the key event.
       }

    });
}

   buttonsDetections();
   keyboardDetections(); 
    

    function execute(value){

        const Txt = document.createTextNode(value);
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);
        screenDisplay.appendChild(ShowNumber);     
        detectOperator(value);
      
    }

    function executeOperators(value){
        
        const Txt = document.createTextNode(value);
        const ShowNumber = document.createElement("h1");
        ShowNumber.appendChild(Txt);
        screenDisplay.appendChild(ShowNumber);     
        
        detectOperator(value);
        if(i>=2){
            calculate();
        }
        
    }
     
    buttons[14].addEventListener('click', function(){
        
    if(secondNum == true){//*SI YA APRETE EL * UNA VEZ YA NO PUEDO APRETARLO MÁS
        detectOperator("=");
        calculate();
        }

    });      

    buttons[17].addEventListener('click', function(){//![DEL]
    
            arr.pop();//TODO VER COMO HACER PARA QUE CUANDO LE MANDE EL POP AL ELEMENTO DEL ARRAY SE BORRE DE PANTALLA
    });   
}

pressedElement();







// checking text-area value
const textArea = document.querySelector("textarea");

//operators array
const operatorsList = ["+","-","/","%","*","."];


//adding a number to input
const addNumber = (text) => {
    let {value} = textArea;
   
    //we can add number in any order but there should be condition for adding a dot
    const rule1 = value.length === 0 && text === ".";
    
    if(!rule1){
        textArea.value += text;
    }
}


//adding a operator to input
const addOperator = (text) => {
    let {value} = textArea;
    if(value.length === 0){
        return;
    }
    const lastCharacter = value[value.length - 1];
    console.log("Harsh :", value.length,value[value.length - 1])

    if(lastCharacter !== text){
        textArea.value += text;
    }

   if(operatorsList.includes(lastCharacter)){
       textArea.value = value.substring(0, (value.length - 1) ) + text;
   }

}

// deleting the input
const deleteVal = () => {
    let  {value} = textArea;
    if(value.length > 0){
        textArea.value = value.substring(0, value.length -1);
    }
}


//clearing the whole input
const clearInput = () => {
    textArea.value = "";
}


//Perform calculation
const calc = () => {
    const { value } = calcArea;
    const result = eval(value);
  
    if (!isNaN(result)) {
      calcArea.value = result;
    } else {
      alert("Wrong expression, Please check your input");
    }
  };

  
//add eventlisteners to calculator buttons
document.querySelectorAll(".button-group > span").forEach(e => {
    
    e.addEventListener("click", f => {
        
        const {classList, innerText} = f.target;
        console.log(classList,innerText)
        if(classList.contains("num")){
            console.log("running");
            addNumber(innerText);
        } else if(classList.contains("opr")){
            addOperator(innerText);
        }else if(classList.contains("clear")){
            clearInput();
        }else if(classList.contains("delete")){
            deleteVal();
        }else if(classList.contains("calc")){
            
        }
    })
})



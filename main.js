//constants
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const lowDisp = document.querySelector('.input');
const manipulations = document.querySelectorAll('.manipulation');
const decimal = document.querySelector('#decimal');




let output = 0;
let operation = [null,null,null];
let inputAr = [];
let inputOut = 0;
let memo2 = 0;
let toggle = 0;


//event listeners

numbers.forEach(number => number.addEventListener('click', input));
operators.forEach(operator => operator.addEventListener('click', transition));
manipulations.forEach(manipulation => manipulation.addEventListener('click',manips));



//functions


function manips(){
    if (this.dataset.set == '.'){
        inputAr.push(this.dataset.set);
        inputOut = inputAr.join("");
        lowDisp.innerHTML = (`${inputOut}`);
        decimal.disabled = true;

    } else if(this.dataset.set == 'AC'){
        operation = [null,null,null];
        inputAr= [];
        lowDisp.innerHTML = ('');
        toggle = 0;

    } else if(this.dataset.set == 'DEL'){
        inputAr.pop();
        inputOut = inputAr.join("");
        lowDisp.innerHTML = (`${inputOut}`);
    }



}

function input (){
    inputAr.push(this.dataset.set);
    inputOut = inputAr.join("");
    lowDisp.innerHTML = (`${inputOut}`);
}

function transition(){
    if (toggle == 0){

        operation[1] = this.dataset.set;
        operation[0] = inputOut;
        inputAr= [];
        toggle ++;
    } else if(toggle == 1){
        operation[2] = inputOut;
        inputAr= [];
        toggle ++;
    } else if(toggle == 2){
        if (operation [1] == "+"){
            output = parseFloat(operation[0]) + parseFloat(operation[2]);
        } else if (operation [1] == "-"){
            output = parseFloat(operation[0]) - parseFloat(operation[2]);
        } else if (operation [1] == "/"){
            output = parseFloat(operation[0]) / parseFloat(operation[2]);
        } else if (operation [1] == "*"){
            output = parseFloat(operation[0]) * parseFloat(operation[2]);
        }
        operation[0] = output;
        operation[2] =  "";
        lowDisp.innerHTML = (`${output}`);
        inputAr= [];
        if (this.dataset.set == "="){
            toggle = 1;
        } else {
            operation [1] = this.dataset.set;
            toggle = 1;
        }
    }

    // if (operation[1] == null){  
    // operation[1] = this.dataset.set;
    // operation[0] = inputOut;
    // inputAr= [];
    // } else if(this.dataset.set== "="){
        
    //     if (operation[2] == ''){

    //         operation[2] = memo2;

    //     }else{
    //     operation[2] = inputOut;
    //     }
 

    //     if (operation [1] == "+"){
    //         output = parseFloat(operation[0]) + parseFloat(operation[2]);
    //     } else if (operation [1] == "-"){
    //         output = parseFloat(operation[0]) - parseFloat(operation[2]);
    //     } else if (operation [1] == "/"){
    //         output = parseFloat(operation[0]) / parseFloat(operation[2]);
    //     } else if (operation [1] == "*"){
    //         output = parseFloat(operation[0]) * parseFloat(operation[2]);
    //     }
    //     operation[0] = output;
    //     memo2 = operation[2];
    //     operation[2] =  "";
    //     lowDisp.innerHTML = (`${output}`);
    //     inputAr= [];

    // }else{
    //     operation[2] = inputOut;
    //     operation[1] = this.dataset.set;
    //     if (operation [1] == "+"){
    //         output = parseInt(operation[0]) + parseInt(operation[2]);
    //     } else if (operation [1] == "-"){
    //         output = parseInt(operation[0]) - parseInt(operation[2]);
    //     } else if (operation [1] == "/"){
    //         output = parseInt(operation[0]) / parseInt(operation[2]);
    //     } else if (operation [1] == "*"){
    //         output = parseInt(operation[0]) * parseInt(operation[2]);
    //     }
    //     operation[0] = output;
    //     operation[2] =  "";
    //     lowDisp.innerHTML = (`${output}`);
    //     inputAr= [];
    // }
    decimal.disabled = false;
}


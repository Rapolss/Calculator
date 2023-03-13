//constants
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const lowDisp = document.querySelector('.input');
const manipulations = document.querySelectorAll('.manipulation');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('#decimal');




let output = 0;
let operation = [null,null,null];
let inputAr = [];
let inputOut = 0;
let memo2 = 0;
let toggle = 0;


//event listeners

numbers.forEach(number => number.addEventListener('click', Input));
operators.forEach(operator => operator.addEventListener('click', Operation));
manipulations.forEach(manipulation => manipulation.addEventListener('click',Manips));
equal.addEventListener ('click',Equal);

numbers.forEach(number => number.addEventListener('transitionend', removeTransition));
operators.forEach(operator => operator.addEventListener('transitionend', removeTransition));
manipulations.forEach(manipulation => manipulation.addEventListener('transitionend',removeTransition));
equal.addEventListener ('transitionend',removeTransition);



//functions
function removeTransition(e){ //functions that calls e
    if(e.propertyName !== 'transform') return; //does not continue function if the property name isnt transform
    this.classList.remove('playing'); // removes the transition and resets it
}

function Manips(){
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
    } else if(this.dataset.set == "sign"){
        if (inputAr[0] != "-"){
            inputAr.unshift("-");
        } else if (inputAr[0] == "-"){
            inputAr.shift();
        }
        inputOut = inputAr.join("");
    lowDisp.innerHTML = (`${inputOut}`);
    }
    this.classList.add('playing');

}

function Input (){
    inputAr.push(this.dataset.set);
    inputOut = inputAr.join("");
    lowDisp.innerHTML = (`${inputOut}`);
    this.classList.add('playing');
}

function Operation(){
    operation [1] = this.dataset.set;
    if (operation [2] == ''){
        operation[0] = output;
    } else {
        operation[0] = inputOut;
    }
    inputAr= [];
    decimal.disabled = false;
    this.classList.add('playing');
}

function Equal(){
    operation[2] = inputOut;
    
   
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
    // memo2 = operation[2];
    operation[2] =  "";
    lowDisp.innerHTML = (`${output}`);
    inputAr= [];
    this.classList.add('playing');
    decimal.disabled = false;
}


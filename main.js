console.log('bom dia');

let operation = '';
let last_previous = undefined;

const previous = window.document.getElementsByClassName('previous')[0];
const current = window.document.getElementsByClassName('current')[0];

const numbers = window.document.getElementsByClassName('number');
const operands = window.document.getElementsByClassName('operand');

const clear_button = window.document.getElementById('clear-button');
const delete_button = window.document.getElementById('delete-button');
const equals_button = window.document.getElementById('equals-button');

clear_button.addEventListener('click', () => {
  current.innerHTML = '0';
  previous.innerHTML = '0';
})

delete_button.addEventListener('click', () => {
  current.innerHTML = current.innerHTML.slice(0, -1);
  if(current.innerHTML == '') current.innerHTML = '0';
})

equals_button.addEventListener('click', () => {
  if(operation && operation != '') {
    const n_current = Number(current.innerHTML);
    const n_previous = Number(previous.innerHTML);
    switch(operation){
      case '+':
        previous.innerHTML = 0;
        if(!last_previous){
          current.innerHTML = (n_previous + n_current).toString();
        }
        else{
          current.innerHTML = (n_current + last_previous).toString();
        }

        break;

      case '-':
        previous.innerHTML = 0;
        if(!last_previous){
          current.innerHTML = (n_previous - n_current).toString();
        }
        else{
          current.innerHTML = (n_current - last_previous).toString();
        }

        break;
      
      case '*':
        previous.innerHTML = 0;
        if(!last_previous){
          current.innerHTML = (n_previous * n_current).toString();
        }
        else{
          current.innerHTML = (n_current * last_previous).toString();
        }
        break;

      case '/':
        previous.innerHTML = 0;
        if(!last_previous){
          current.innerHTML = (n_previous / n_current).toString();
        }
        else{
          current.innerHTML = (n_current / last_previous).toString();
        }
        break;
    }
    
    if(!last_previous) {
      last_previous = n_current;
    }
  }

})

for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
    if(current.innerHTML == '0') current.innerHTML = '';
    current.innerHTML += numbers[i].innerHTML;
  })
}

for(let i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', () => {
    last_previous = undefined;
    operation = operands[i].innerHTML;
    previous.innerHTML = current.innerHTML;
    current.innerHTML = '0';

  })
}
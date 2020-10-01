//Get the two <button> Elements
const btnF = document.getElementById('focus');
const btnB = document.getElementById('blur');
const inpt = document.getElementById('userName');
const div = document.getElementById('status');

//Adding the Event Listeners
btnF.addEventListener('click',do_Focus);
btnB.addEventListener('click',do_Blur);
inpt.addEventListener('focus',logf);
inpt.addEventListener('blur',logb);


//Defining the Event Handlers
function do_Focus(){
    inpt.focus();  //HTML Method
}
function do_Blur(){
    inpt.blur();
}

function logf(){
    div.innerHTML = 'on Focus'
}
function logb(){
    div.innerHTML = 'on Blur'
}
//form Blur Event Listeners
document.getElementById('name').addEventListener('blur',validateName);  //addEventListener is a method of the element from getelementbyid
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

//Implementing the validators
function validateName(){
    const name = document.getElementById('name');   
    const re = /^[A-Za-z][a-z]*\s*(?:[A-Za-z][a-z]*\s*){*}$/;
    if(!re.test(name.value)){                // name.value = value of document.getElementById('name') // interpreter checks form top to botton so take this in mind when writing if statements and take the most likely outcome first in your condition
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }  
}

function validateZip(){
    const name = document.getElementById('zip');   
    const re = /^\d[1-9]\d{3}$/i;
    if(!re.test(name.value)){                
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }  
}

function validateEmail(){
    const name = document.getElementById('email');   
    const re = /^([a-z]*\.*\-*)*[a-z]*@[a-z]*\.[a-z]*$/i;
    if(!re.test(name.value)){                
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }  
}

function validatePhone(){
    const name = document.getElementById('phone');   
    const re = /^\d{3,6}\s*\-*\d{2,4}\s*\-*\d{4}$/i;
    if(!re.test(name.value)){                
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }  
}
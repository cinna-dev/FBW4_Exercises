// getting my target 
let table = document.getElementById('bagua-table');
// for saving my original td
let editingTd;

table.addEventListener('click',function (event){
//3 possible targets
    let target = event.target.closest('.edit-cancel,.edit-ok,td')
    if(target.className == 'edit-cancel'){
        finishTdEdit(target);
    }else if(target.className == 'edit-ok'){
        edtingTdFunction(target);
    }else if(target.nodeName == 'TD'){
        makeTdEditable(target);
    }
});
// Event Handler : currently the real event target is the td
function makeTdEditable(td){   //"event" is global // using a different parameter name woudl be local??
    // {} create new reference for the value // saves in different object therefor new reference
    editingTd = {     
        elem : td, 
        data : td.innerHTML
    }
    // td is in edit state, css also styles the area inside
    td.classList.add('edit-td')         //ClassList = Token List
    // creating my TextArea
    let textArea = document.createElement('textarea')
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd","<div class='edit-controls'><button class='edit-ok'>OK</button><button class='edit-cancel'>CANCEL</button></div>")

    }                   

///////////////////////////////////////////////
function finishTdEdit(event){
     event.closest('td').innerHTML = editingTd.data
};

function edtingTdFunction(event){
    let td = event.closest('td')
    let textArea = td.firstElementChild;
    td.innerHTML  = textArea.value
    textArea.remove()
}; 
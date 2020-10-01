// getting my target 
let table = document.getElementById('bagua-table')
// for saving my original td
let editingTd;

table.addEventListener('click',makeTdEditable);


// Event Handler : currently the real event target is the td
function makeTdEditable(event){   //name woudl be local??
    // {} create new reference for the value // saves in different object therefor new reference
    let td = event.target
    // {} create new reference for the value
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

    td.insertAdjacentHTML("beforeEnd","<div class='edit-controls'><button class='edit-ok '>OK</button><button class='edit-cancel'>CANCEL</button></div>")

    }                   



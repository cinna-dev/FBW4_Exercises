// getting my target 
let table = document.getElementById('bagua-table');
// for saving my original td
let editingTd;

table.addEventListener('click',function (event){
//3 possible targets
    let target = event.target.closest('.edit-cancel,.edit-ok,td')// multiple classes in one string
    if(!table.contains(target)){return}
        if(target.className == 'edit-cancel'){
            finishTdEdit(editingTd.elem , false);
        }else if(target.className == 'edit-ok'){
            finishTdEdit(editingTd.elem , true);
        }else if(target.nodeName == 'TD'){ // returns nodeName in Capital Letters
            makeTdEditable(target);
        }
      
});
function finishTdEdit(td, isOK){
    if(isOK){
        td.innerHTML = td.firstChild.value
    }else{
        td.innerHTML = editingTd.data
    }
    td.classList.remove('edit-td');
    editingTd = null;
};

function makeTdEditable(td){  
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
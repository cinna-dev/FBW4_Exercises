let area = null;
let view = document.getElementById('view');
view.addEventListener('click', editStart)

function editStart(){
    area = document.createElement('textarea');
    area.className = 'edit';           // avoid inline style // use classes for styling instead
    area.value = view.innerHTML;
    area.addEventListener('keydown', function(){ // annonymus function part of area // so you can use "this"
       if(event.key == 'Enter'){   
           this.blur()
       } 
    })
    area.addEventListener('blur',function(){
        editDone();
    })
    view.replaceWith(area);
    area.focus(); // the focus should come at the end
}

function editDone(){  // seperated function no reference to "this" 
    view.innerHTML = area.value;
    area.replaceWith(view)
}


















/* let area = null;
let view = document.getElementById('view');
view.addEventListener('click', editStart)

function editStart(){
    area = document.createElement('textarea');
    area.className = 'edit';           // avoid inline style // use classes for styling instead
    area.value = view.innerHTML;
    area.addEventListener('blur',editDone)
       
    view.replaceWith(area);
    area.focus(); // the focus should come at the end
}

function editDone(){
    view.innerHTML = area.value;
    area.replaceWith(view)
} */




document.getElementById('form').addEventListener('click', eventHandler)
const input = document.getElementById('input')

function eventHandler(e) {
    //console.log(input.value)
    //console.log(e.target)
    if(e.target.id === 'submitBtn'){
        if (input.value) {
            let todo;
            if (localStorage.getItem('todo') == null) {
                todo = [];
            } else {
                todo = JSON.parse(localStorage.getItem('todo'));
            }
            todo.push(input.value);
            localStorage.setItem('todo', JSON.stringify(todo));
        }
    }
    input.value = '';
    UI.buildList()
    e.preventDefault()

    if(e.target.id === 'undo'){
        if (localStorage.getItem('todo') !== null) {
            let todo = JSON.parse(localStorage.getItem('todo'));
            todo.pop()
            localStorage.setItem('todo', JSON.stringify(todo));
            UI.buildList()  
        }
       
    }
}
class UI {

   static buildList() {
        const list = document.getElementById('list');
        list.innerHTML = ''
        if (localStorage.getItem('todo') !== null) {
            let storage = JSON.parse(localStorage.getItem('todo'));
            storage.forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-group-item'
                li.appendChild(document.createTextNode(item))
                list.appendChild(li)
            });
        }
    }
    static undo(){

    }
}

document.addEventListener('DOMContentLoad', UI.buildList())
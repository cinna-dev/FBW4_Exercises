class UI {
    constructor(array) {
        this.array = array;
    }
    createUl() {
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        return ul;
    }
    createLi() {
        const ul = this.createUl();
        this.array.forEach(item => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        })
    }
}

const listItems = ['item1', 'item2', 'item3']
const ui = new UI(listItems);
ui.createLi();
console.log(ui);
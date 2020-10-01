//Object.prototype.hasOwnProperty

let animal = {
    type: 'Chicken',
    color: 'white'
}

let bool;

bool = animal.hasOwnProperty('type') //true
bool = animal.hasOwnProperty('white') //false 

console.log(bool)
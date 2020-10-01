function calculateAge(name, birthdate){
    const currentDate = new Date();
    birthdate = new Date(birthdate);
    birthdate = currentDate-birthdate;
    birthdate = birthdate/1000;
    birthdate = birthdate/60;
    birthdate = birthdate/60;
    birthdate = birthdate/24;
    birthdate = birthdate/365;
    birthdate = Math.floor(birthdate);
    return `${name} is ${birthdate} years old`;
}
//console.log(calculateAge('peter', '06-12-1999'))




function Greeting(x){
    return `Hello ${(x.age > 18 ? (x.gender == 'female' ? 'Miss' : 'Mr') : '')} ${x.name}`
}

const guest = {
    name:'clare',
    age:21,
    gender:'male'
}
//console.log(Greeting(guest));





function compareDishes(guests, dishes){
    let result = [];
guests.forEach(function(item){
    let boolean = false;
    dishes.forEach(function(item2){
        if(item.dish.includes(item2)){
            boolean = true;
        } 
    })
    if(!boolean){
        const li = document.createElement('li');
        li.className = 'list-group-item bg-danger text-warning';
        li.appendChild(document.createTextNode(`Sorry ${item.name}. We don't have ${item.dish} in the menu. `));
        result.push(li)
    }else{
        const li = document.createElement('li');
        li.className = 'list-group-item bg-success text-primary';
        li.appendChild(document.createTextNode(`${item.name}. We do have ${item.dish} in the menu. `));
        result.push(li)
    }
})
return result;
}

const listOfguests = [{name:'Mike', dish:'Hamburger'},{name:'Clare', dish:'Steak'},{name:'Peter', dish:'Potatoes'},{name:'Anna', dish:'Taco'}];
const listOfDishes = ['Hamburger', 'Salad' , 'Pizza', 'Taco']

const ul = document.createElement('ul');
ul.className = 'list-group list-group-flush text-center';

const output = compareDishes(listOfguests, listOfDishes);
console.log(output)
 output.forEach(function(item){
    ul.appendChild(item)
}) 
document.body.appendChild(ul);
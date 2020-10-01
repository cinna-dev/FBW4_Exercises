// recursive function 
/* function returnEvenNumbers(arr){
    const ul = document.createElement('ul');
    ul.className = 'list-group  list-group-flush';
    arr.forEach(function(item){
        if(typeof item == 'number'){
        if(item % 2 == 0){
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(item))
            li.className = 'list-group-item'
            ul.appendChild(li);
        }
    }else{
        const li = document.createElement('li')
        li.appendChild(returnEvenNumbers(item))
        ul.appendChild(li) 
    }
    })
    return ul
}
numberArray = [1,2,3,4,5, [4,8,9,1,[1,3,4,5,9,12],7,5,3,10],6,7,8];
document.body.appendChild(returnEvenNumbers(numberArray));
console.log(returnEvenNumbers(numberArray)); */


//////////////////  append bootstrap to html head  //////////////////////// 
const link = document.head.innerHTML +=' <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';


// recursive function 
function returnEvenNumbers(arr){
    const ul = document.createElement('ul');
    ul.className = 'list-group';
    arr.forEach(function(item){
        if(typeof item == 'number'){
        if(item % 2 == 0){
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(item))
            li.className = 'list-group-item'
            ul.appendChild(li);
        }
    }else{
        const li = document.createElement('li')
        li.className = 'list-group-item'
        li.appendChild(returnEvenNumbers(item))
        ul.appendChild(li) 
    }
    })
    return ul
}
numberArray = [1,2,3,4,5, [4,8,9,1,[1,3,4,5,9,12],7,5,3,10],6,7,8];
document.body.appendChild(returnEvenNumbers(numberArray));
console.log(returnEvenNumbers(numberArray));
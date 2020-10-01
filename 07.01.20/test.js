function invitedGuest(guest){
    guest.sort(function(x,y){
        return (x.age >= y.age ? 1 : -1)
    })
const oldEnough = [];
const notOldEnough = [];
for(property of guest){
    const li = document.createElement('li')
    if(property.age >= 18){
        li.appendChild(document.createTextNode(`Hello ${property.name} you are ${property.age} and therefore old enough`))
        li.className ='list-group-item bg-success text-primary';
        oldEnough.push(li)
    }else{
        li.appendChild(document.createTextNode(`Hello ${property.name} you are ${property.age} and therefore not old enough`))
        li.className = 'list-group-item bg-danger text-warning';
        notOldEnough.push(li)
    }
}
if(oldEnough.length > 0){
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.appendChild(document.createElement('h3')).appendChild(document.createTextNode('Invited Guest'))
    oldEnough.forEach(function(item){
        ul.appendChild(item)
    })
}
if(notOldEnough.length > 0){
    const ul2 = document.createElement('ul')
    document.body.appendChild(ul2)
    ul2.appendChild(document.createElement('h3')).appendChild(document.createTextNode('uninvited Guests'))
    notOldEnough.forEach(function(item){
        ul2.appendChild(item)
    })
}
}
 

const listOfguests = [{name:'Mike', age:33},{name:'Clare', age:23},{name:'Peter', age:12},{name:'Anna', age:14},{name:'Morgan', age:19},{name:'Jay', age:11}];

//invitedGuest(listOfguests)



function passingCourse(student){
    const passed = [];
    const failed = [];
for(property of student){
    const li = document.createElement('li')
    if(property.HTML >= 50 && property.JavaScript >= 50 && property.CSS >= 50 || property.HTML >= 50 && property.JavaScript >= 50 || property.JavaScript >= 50 && property.CSS >= 50 || property.HTML >= 50 && property.CSS >= 50 ){
        li.appendChild(document.createTextNode(`${property.name} passed`))
        li.className ='list-group-item bg-success text-primary';
        passed.push(li)
    }else{
        li.appendChild(document.createTextNode(`${property.name} failed`))
        li.className ='list-group-item bg-danger text-warning';
        failed.push(li)
    }
}
if(passed.length > 0){
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.appendChild(document.createElement('h3')).appendChild(document.createTextNode('passed'))
    passed.forEach(function(item){
        ul.appendChild(item)
    })
}
if(failed.length > 0){
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.appendChild(document.createElement('h3')).appendChild(document.createTextNode('failed'))
    failed.forEach(function(item){
        ul.appendChild(item)
    })
}
}

const listOfStudents= [{name:'Mike', HTML:30, JavaScript:100, CSS:50},{name:'Clare',  HTML:30, JavaScript:100, CSS:50},{name:'Peter',  HTML:30, JavaScript:100, CSS:50},{name:'Anna',  HTML:30, JavaScript:10, CSS:50},{name:'Morgan',  HTML:30, JavaScript:100, CSS:50},{name:'Jay', HTML:30, JavaScript:100, CSS:40},{name:'Mike', HTML:30, JavaScript:100, CSS:40},{name:'Jerry', HTML:30, JavaScript:100, CSS:470},{name:'Luise', HTML:60, JavaScript:100, CSS:40},{name:'Luna', HTML:30, JavaScript:100, CSS:40}];
passingCourse(listOfStudents)
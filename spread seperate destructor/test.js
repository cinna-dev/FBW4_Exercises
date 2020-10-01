/////////////////////////////////////// Spread ////////////////////////////////////////////////
a = [1,2,3,4]
console.log(...a)

b = 'DCI'
console.log(...b)

c = [...a , ...b, "coding"]
console.log(c)

var fruits = {
    orange : 'Orange',
    apple : 'red'
}

var o = {...fruits} // creates a copy of an Object
console.log(o)

var d = [...a] // creates a copy of an Array
d.push(5)
console.log(d,a)


function sum (a,b,c){   // takes in the first 3 indexes of the array in
   return a+b+c
     
}
console.log(sum(...a))  // takes in the first 3 indexes of the array in


////////////////////////// Rest //////////////////////////////////
function arraylength (...a){    // puts all the arguments in an array
    return "The length of the array is " + a.length;
}
console.log(arraylength(2,3,4,5,6,7))  


//////////////////////////////// Destructuring ///////////////////////////////////////

var e = [3,4,5]
var [f,g,h] = e       // unpacks array and asigns each item to  prdefined variable f g and h
console.log(f,g,h)          // e will not be mutated
var [j, ...rest] = e   // unpacks array and asings 4 5 to an rest operator so it will be an array
console.log(j, rest)

////////////////////// Destructureing with objects ///////////////////////////////////////

var webdevelopment = {
    frontend : "HTML",
    backend : "Js",
    data : "SQL",
    server : "aws"
}

var {frontend, ...l} = webdevelopment  // needs to use the keys of the object to and saves it outsider the Object
console.log(frontend , l)
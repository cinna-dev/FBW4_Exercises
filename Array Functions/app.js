let array = [3,6,9,1,4,8]

///////////// Filter /////////////
let newArray = array.filter(item => item < 6)//callback is a predicate, to test each element of the array. Return true to keep the element, false otherwise. // return of callback predefined // can  execute other code thoough.

console.log(newArray)

let testCallback = array.filter(item => {if(item < 6)return 1})

console.log(testCallback)

///////////////// Map /////////////////
let newArray2 = array.map(item => {if(item < 6) return item})  //retruns "undefined" when no match / return of callback predefined // can  execute other code thoough.

console.log(newArray2)

// alternative Way for Map //same like forEach
let newArray2b = [];
array.map(item => {if(item < 6) newArray2b.push(item)})

console.log(newArray2b)

///////////////// forEach /////////////
let newArray3=[]
array.forEach(item => {if(item < 6) newArray3.push(item)})  // filer result with map // callback has no return // mutates array

console.log(newArray3)

/////////////////// find ///////////////
let newArray4 = array.find(item => {if(item < 6) return item})  //finds only the first item that fits condition
 
console.log(newArray4)

const obj = {firstname: 'perter', lastName : 'pertsen' }
let newArray5 = Array.from(obj)
console.log(newArray5)
let x = 1;
console.log(x+1,x, x-- +1,x)
if(x+1===x-- +1){
    console.log(1)
}else{
    console.log(2)
}

///////////////Spread Operator///////////////
let arr1 = [1,3,5,7,9];
let arr2 = [...arr1];
let arr3 = [];
arr3.push(...arr1);
console.log(arr2,arr3,arr1);

//////////////Destructuring Object///////////////////
const obj = {
    name:'blubb',
    age:32
}
const {name:deconName,age:deconAge} = obj;

console.log(deconName,deconAge)

////////////Boolean//////////////
let boolean = true;
console.log(boolean);

console.log(boolean);
console.log(boolean);
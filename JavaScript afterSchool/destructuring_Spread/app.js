//copy arrays 

let arr = [1, 2, 3];

let newArr = [...arr];

console.log(arr, newArr)

//copy  object
let obj = {
    firstName: 'hans',
    lastName: 'meiser'
}

let newObj = {
    ...obj
}

console.log(obj, newObj)

//combine arrays
let arrA = [1, 2, 3];

let arrB = [4, 5, 6];

let newArrC = [...arrA, ...arrB, 7, 8]

console.log(newArrC)

//combine objects
let objA = {
    firstName: 'hans',
    lastName: 'meiser'
}

let objB = {
    city: "hamburg",
    biz: "22001"
}

let newObjC = {
    ...objA,
    ...objB,
    age: 60
}

console.log(newObjC)

//Rest with Array
let arr6 = [1, 2, 3, 4, 5, 6]

let [fistNumber, someNumber, ...RestofArr6] = arr6

console.log(fistNumber, someNumber, RestofArr6)


//Rest with Object

let obj6 = {
    firstName: 'hans',
    lastName: 'meiser',
    city: "hamburg",
    biz: "22001",
    age: 60
}

let {
    city,
    age,
    ...RestofObj6
} = obj6;

console.log(city, age, RestofObj6)
//Object.keys()  //Object.values()  //Object.entries()

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
}

//Object.keys()
const keys = Object.keys(fruits)
console.log(keys) // [apple, orange, pear]

//Object.values()
const values = Object.values(fruits)
console.log(values) // [28, 17, 54]

//Object.entries()
const entries = Object.entries(fruits)
console.log(entries)
//creates an array of arrays // [key, value]
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]


//then looping through the array with "for of"
for (const key of Object.values(fruits)) {
    console.log(key)
}

//looping with destructure

for (const [key, value] of Object.entries(fruits)) {
    if (key === 'orange') console.log(`There are ${value} ${key}s`)
}
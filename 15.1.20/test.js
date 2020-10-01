const fruits = ['berry','banana','apple','orange','kiwi','avocado']

console.log(fruits.map(item => item =='banana' ? item : ''))  // single expression will also return 
console.log(fruits.map(item => item.length))
console.log(fruits.map(item => {if(item=='banana')return item ;else return ''}))

let people = ['Kumar','Harris','Asmari','Navide','Jijish','Julian']

console.log(people.map(person => person == 'Julian' ? 'German Name' : 'Indian Name' ))

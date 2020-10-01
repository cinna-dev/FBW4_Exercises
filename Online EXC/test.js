/* var str = "https://www.reddit.com/r/relationships/";
function subReddit(link) {
    let sections = link.split('/');
    console.log(sections);
    console.log(sections.length);
    let name = sections.slice(sections.length-2,sections.length-1);
    console.log(name);
    let result = name.toString();
	return result ;
}
document.write(subReddit(str)); */


/* function matchEvenNum(numStr){
    //let re =/\d*[02468]/;
    return  numStr.match(re);
}
document.write(matchEvenNum('aaa14793213aaa')); */







/* let profit1 = {
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}
function profit(info) {
    let temp =(info.sellPrice - info.costPrice) * info.inventory;
    return Math.round(temp);
} 
document.write(profit(profit1)); */





/* let myObject = {name:'dsf'};

function isEmpty(obj) {
	let temp = Object.keys(obj);
	return (temp.length === 0);
}
document.write(isEmpty(myObject)); */







/* function hashPlusCount(str) {
	let temp2 = 0;
	let temp3 = 0;
	let temp =[] ;
	for(i=0; i<str.length; i++){
		if(str[i].includes('#') && !str[i].includes('+')){
		temp2 = ++temp2;	
	}else if(str[i].includes('+') && !str[i].includes('#')){
		temp3 = ++temp3;
	}else if(!str[i].includes('+') && !str[i].includes('#')){
		temp2 = 0;
		temp3 = 0;
	}
}
	temp.push(temp2);
	temp.push(temp3);
	return temp;
} */













//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


/* function lookUpProfile(name, prop){
// Only change code below this line

for(i=0;i<contacts.length;i++){
    if(contacts[i].firstName.includes(name) && contacts[i][prop]){
        console.log((contacts[i][prop]))
        return contacts[i][prop];
    }
}
 for(i=0;i<contacts.length;i++){       
   if(!contacts[i].firstName.includes(name)&& contacts[i][prop]){
return "No such contact"
   }  
 }
   for(i=0;i<contacts.length;i++){         
    if(contacts[i].firstName.includes(name)&& !contacts[i][prop]){
        return "No such property";
    }
}
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Sherlock", "likes")); */
 




function lookUpProfile(name, prop){
    // Only change code below this line
    //console.log(contacts[1][prop])
    console.log(Object.keys(contacts[1]))
    console.log(contacts[1]['lastName'])
    for(i=0;i<contacts.length;i++){
        if(contacts[i].firstName == name){
                if(contacts[i][prop]){
                     return contacts[i][prop];
                    }else{return "No such property"; }
        }

    }
    return ";No such contact"
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "lastName"));











/* function canForm(arr){
//console.log(arr)
    temp = arr[0];
    let count = 0
	for(i=0;i<arr.length;i++){
        
		if(arr[i].length > temp.length){
            temp = arr[i];
            count = i;
        }
        arr[i] = arr[i].split('')
    }
        arr.splice(count,1)
    console.log(arr)
    //console.log(temp)
        for(i=0;i<temp.length;i++){
            for(j=0;j<arr.length;j++){
                for(k=0;k<arr[j].length;){
                    if(arr[j][k] == temp[i]){
                        //console.log(arr[j][k])
                        console.log(arr)
                        arr[j].splice(k,1);
                        }else{k++}
                        }
        }
    }
for(l=0;l<arr.length;)
        if(arr[l].length === 0){
                    arr.splice(l,1)
                }else{l++}
        return arr.length === 0;
}


let array1 = ["mast", "manifest", "met", "fan"];
array1 = ["monument", "momento", "moment", "tome"]
console.log(canForm(array1));
 */
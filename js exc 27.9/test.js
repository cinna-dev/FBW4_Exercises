/*function tripAdviser(city){
    city1.advice = 'Negative'  /*   adding property to object */
/*    if(city.population < 8000){
        city1.advice = 'Positive'
    }
    return `${city.name}   has a population of   ${city.population}   and is situated in  ${city.continent} and our advice is ${city.advice}` ;
}

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}

     
document.write(tripAdviser(city1));
*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* function tripAdviser(arr){
    
    let temp = prompt('What City do you want to visit');
    for(i=0; i< arr.length; i++){
        if(arr[i].name == temp){
            if(arr[i].population < 8000){
                arr[i].advice = 'Positive';    
            }
            else{arr[i].advice = 'Negative';}
            return `${arr[i].name}   has a population of   ${arr[i].population}   and is situated in  ${arr[i].continent} and our advice is ${arr[i].advice}`;
    }
    
    }
    
}

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8.136,000',
    continent:'Europe'
}
cityArray =[city1, city2, city3];

document.write(tripAdviser(cityArray));

 */




/* 
function tripAdviser(arr){
    let temp = arr[0].population;
     for(i=0; i< arr.length; i++){
        if(arr[i].population < temp && arr[i].continent == 'Europe'){
            temp = arr[i].population ;
        }      
            }
            for(j=0; j< arr.length; j++){
               if(arr[j].population == temp){
                arr[j].advice = 'Positive';
                return  arr[j];
               } 
        }
           
    }
    
   

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8.136,000',
    continent:'Europe'
}
arrayOfCitys =[city1, city2, city3];

console.log(tripAdviser(arrayOfCitys));  */










function tripAdviser(arrC, arrP){
    let temp = [];
    for(i=0; i< arrC.length; i++){
        for(j=0; j< arrP.length; j++){
    if(arrC[i].name.includes(arrP[j]) ||arrC[i].population.includes(arrP[j]) || arrC[i].continent.includes(arrP[j])){
        temp.push(arrC[i]);
        break;
    }
}
    }
    return temp
    }
   

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8,136,000',
    continent:'Europe'
}
arrayOfCitys =[city1, city2, city3];
arrayOFPreferences = ['Europe']
console.log(tripAdviser(arrayOfCitys, arrayOFPreferences));
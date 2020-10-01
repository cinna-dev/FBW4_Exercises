/* function visitedCity(city){
    if(city === 'Hamburg'){
return `<h1>I visited ${city}</h1>`
}
    else{return `<h1>Sorry I didn't visited ${city}</h1>`}
}
document.write(visitedCity('Hamburg')); */


/* function visitedCity(city, cityArr){
    for(i=0; i<cityArr.length; i++){
          if(city == cityArr[i]){
        return `<h1>I visited ${city}</h1>`
        }
}
return `<h1>Sorry I didn't visit${city}</h1>`
}

let ArrayOfCities = ['Hamburg', 'Dubai', 'Istanbul'];
let CityToSearch = 'Dubai';
document.write(visitedCity(CityToSearch, ArrayOfCities));  */


/* function visitedCity(cityArrVisited, cityArrSearch){
    let temp =[];
    for(i=0; i<cityArrSearch.length; i++){
        for(j=0; j<cityArrVisited.length;j++){
          if(cityArrSearch[i].includes(cityArrVisited[j])){
            temp.push(cityArrSearch[i]);
            cityArrSearch.splice(i,1);    
            }
        }
    }
    if(temp.length > 0 && cityArrSearch.length == 0){
        return `I have visited ${temp}`;
    }
    else if(temp.length > 0 && cityArrSearch.length > 0){
        return `I have visited ${temp} and I haven't visited cities like ${cityArrSearch}`;
    }
    else{
        return `I haven't visited any of those cities like ${cityArrSearch}`;
    }
}
let ArrayOfCitiesVisited = ['Hamburg', 'Dubai', 'Istanbul'];
let ArrayOfCitiesSearch = ['Berlin','Dubai', 'Istanbul'];
let output =visitedCity(ArrayOfCitiesVisited, ArrayOfCitiesSearch); 
document.write(`<h1>${output}</h1>`); */




/* function isTheWordPlural(word){
    if(word[word.length-1].includes('s')){
        return `the word "${word}" is plural!`
    }
        return `the word "${word}" is singular!`
}
let output = (isTheWordPlural('apples'));
document.write(`<h1>${output}</h1>`);  */



/* access object porperties (keys) */
array = {name: 'adsf',
lName:"hhh"
};
//document.write(array.keys())
console.log(Object.keys(array))
let x =typeof Object.keys(array)[1]
console.log(array[Object.keys(array)[1]])
console.log(array["lName"])
console.log(x)





/* function birthdayInvite(name, guest){
    if(name.length == guest.length){
        return `${guest} is invited`
    }
return `${guest} is not invited`
}
let invitedGuest = 'harry';
let myName = 'marry';
let output = (birthdayInvite(myName,invitedGuest));
document.write(`<h1>${output}</h1>`);  */


function birthdayInvite2(name, guestArr){
    temp = [];
    temp2 = [];
    for(i=0; i<guestArr.length; i++){
        if(name.length == guestArr[i].length){
            temp.push(guestArr[i])
        }
        else{temp2.push(guestArr[i])
        }
    }
if(temp.length >0 && temp2.length == 0){
return `${temp} is invited`
}
else if(temp.length > 0 && temp2.length > 0){
    return `${temp} is  invited and ${temp2} is not invited`
}
else{ 
    return `${temp2} is not invited`}
}
let invitedGuestArray = ['Harry', 'Marc', 'Sally', 'John'];
let myName = 'Marry';
let output = birthdayInvite2(myName, invitedGuestArray);
document.write(`<h1>${output}</h1>`); 
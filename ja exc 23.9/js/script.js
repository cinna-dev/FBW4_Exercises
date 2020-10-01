//*///////////////////////////// Litrals dollar braces>> String with operation //////////////////////////////////////////


/* function greetingAtTime(name){
    return 'Hello '+name;
    }
    
    let str = `Philipp ${2+4} AM`;
    document.write( greetingAtTime(str));
  
    let num = str.length;
    console.log(num);
 */




//*/////////////////////////////////// Password length //////////////////////////////////////////////////////////


/* function checkPassWordLength(pass){
    if(pass.length <= 8){
        return 'Invalid'
    }else{
        return 'valid'
    }
}
 let passWord = 'omegalul';
document.write(checkPassWordLength(passWord));
 */


//*//////////////////////////////////////// STring.match////////////////////////////////////////////////


/* function checkPassWordForIndex(pass){
    if(pass.length < 8){
        return 'invalid';
    }
   for(i=0; i<pass.length; i++){
       if(pass[i] == '$'){
           return 'valid';
       }    
      
   }
   return 'invalid'
}


 let passWord = 'secret$2020';
document.write(checkPassWordForIndex(passWord));
 */


//*///////////////////////////////// Boolean check Password for index string //////////////////////////////////


/* function checkPassWordBoolean(pass){
    let temp = false;
    if(pass.length > 8){
     for(i=0; i<pass.length; i++){
        if(pass[i] == '$'){
           return temp = true;   
        }  
    }
}
return temp;
}
let passWord = 'secret$2020';
if(checkPassWordBoolean(passWord) == true){
    document.write('valid'); 
}else{document.write('invalid'); }
     
 */

//*///////////////////////////////////// includes string (check for string return boolean) /////////////////////////////////////////////
/* et str1 = 'The quick brown fox jumps over the lazy dog';
console.log(str1.includes('dog'))
 */



/* function checkForInclude(str){
    if(str.length > 8 && str.includes('$')){
       return 'valid';
   }
return 'invalid';
}
let string = 'secret$2020';
document.write(checkForInclude(string));
 */



//*//////////////////////// Replace /////////////////////////////////////


/* let str1 = 'The quick brown fox jumps over the lazy dog';
let searchTerm = 'brown';
let replaceBy = 'blue';
document.write(str1.replace(searchTerm, replaceBy)); */






/*function includesReplace(str){
    if(str.includes('lazy')){
        str = str.replace('lazy', 'smart')  /* .replace will not change the original parameter if it is not reasigned  or do it while return*/
  /* }else{return 'not included'}
   return str
}

let string = 'The quick brown fox jumps over the lazy dog';
document.write(includesReplace(string));
*/


/* function passWordCondition(pass, name){
    let t1,t2,t3;
    t1 = pass.length < 8;
    t2 = (!pass.includes('$'));
    t3 = (pass.includes(name));
    console.log(t1,t2,t3)
    if( pass.length < 8 || !pass.includes('$') || pass.includes(name) ){
        return 'invalid'
    }
    return 'valid'
}

let nameString = 'philipp'
let passWord = 'ph$'
document.write(passWordCondition(passWord, nameString)); */



                      /*   litrals for combining strings and variables of operators */
                      
function cityfacts(city){
    return `${city.name}   has a population of   ${city.population}   and is situated in  ${city.continent}` ;
}



let city1 = {
    name:'Paris' ,
    population:'2,140,526' ,
    continent:'Europe'
}
let city2 = {
    name:'Tokyo' ,
    population:'13,929,286' ,
    continent:'Asia'
}
document.write(cityfacts(city1));
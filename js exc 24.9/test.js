 /* function greeting(){
let name = prompt('Please enter your name:'); /* input of prompt will be asigned to let name */
/* txt =`hello ${name}`
document.write(txt)
}
greeting(); */






/* prompt : first entrance is message   secont entrance : box  */
/* let person = prompt('Please enter your name:','Harry Potter');
document.write(person) */






/* unction greeting(){
    let name = prompt('Please enter your name:');
    if(name =='' || name == null){
        txt = 'No Input';
    } else{
    txt =`Hello ${name}`}
    document.write(txt)
}
    greeting(); */







/* ////////////////////////////////////////////////  square number with promp input  /////////////////////////////////////// */





/* unction calcSquareNum(){
    let num = prompt('Write a Number:');
    if(num =='' || num == null || num == 'NaN'){
        num = 'No Input';
    } else{
        num = num * num;
    }
    document.write(num);
}
calcSquareNum(); */

/* function Square(num){
    return num*num;
    
}
function showResult(){
    let num = prompt('Please enter a number');
    if(num != Number){
        txt = 'No Input';
    }
    else{txt = `The Result is ${Square(num)}` }
   document.write(txt)
}
showResult(); */




/* /////////////////////////////////////////////// Password with promp /////////////////////////////////////////// */



/* function passWordCondition(pass){
    if( pass.length < 8 || !pass.includes('$') ){
        return 'invalid';
    }else{
        return 'valid';
}
}

let PassWord = prompt('Please enter your password:')
let result = passWordCondition(PassWord);
document.write(result)
 */






/* ///////////////////////////////////////////concatinate to variable (burt rather use //////////////////////////////////////////// */
 /* let str1 = 'Hello';
 let str2 = 'Planet';

 let txt = str1.concat(' ',prompt('insert noun:'))   
 document.write(txt) */





///////////////////////////////////////////////////////////////////indexOf/////////////////////////////////////////////////////
 /* let paragraph = 'The quick brown fox jumps over the layz dog'+
 'if the dog barked, was it really lazy?';
 let str = prompt('search for index of :');

 let result = `Yes it is found in the positon : ${paragraph.indexOf(str)}`
 document.write(result)
 */





/* ///////////////////////////////////// find index Numbe of Letter in Password ///////////////////////////// */




 /* function searchForLetter(letter, password){
     if(password.indexOf(letter)< 0){
         return `You're Letter in on Index Number: ${password.indexOf(letter)}`
     }else{
         return `Can\'t find the Letter "${letter}"  in your Password`
        }
 }
 let passWord = '$dahfsek'
 let letterString = prompt('insert search Letter: ')
 document.write(searchForLetter(letterString, passWord)) */













 /* function priceCurrency(prize, currency){
     return `${prize} ${currency}`
 }
let prizeVar = 500;
let currencyVar = prompt('enter currency:')
document.write(priceCurrency(prizeVar, currencyVar))
 */

function currencyPrize(prize, currency){
    return `${prize} ${currency}`
}
let currencyVar = '$';
let prizeVar = prompt('enter prize:');
document.write(currencyPrize(prizeVar, currencyVar))
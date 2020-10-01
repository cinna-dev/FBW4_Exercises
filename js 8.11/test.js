/* function findMissing(arr){
    let temp1 = arr[arr.length-1] - (arr[0]);
    temp2 = temp1 / (arr.length);
    
    for(i=0;i<arr.length-1;i++){
        if(arr[i]+temp2 !== arr[i+1]){
         return   arr[i]+temp2 ;
        }
    }
} */
//let numberSeries = [1,4,7,13];
///numberSeries =[1, 3, 5, 9, 11]
//numberSeries =[-9, -13, -21];
//numberSeries =[17, 24, 31, 45, 52, 59, 66, 73, 80, 87, 94, 101]
//console.log(findMissing(numberSeries))




/* function sortByLength (array){
    array.sort(function(string1,string2){
            return string1.length - string2.length
        }
    )
    return array
}
let arrayOfStrings = ["Telescopes", "Glasses", "Eyes", "Monocles"];
arrayOfStrings = ["blubb", "bl", "blubbbblubbb", "blu"];
console.log(sortByLength(arrayOfStrings)) */





/* function toWeirdCase(string){
    string = string.split(' ')
    let mainArray = []
    for(i=0;i<string.length;i++){
        let subArray = [];
    for(j=0;j<string[i].length;j++){
        if(j%2==0){
            console.log(string[i][j].toUpperCase())
            subArray.push(string[i][j].toUpperCase())
        }else{
            console.log(string[i][j].toLowerCase())
            subArray.push(string[i][j].toLowerCase())
        }
    }subSting = subArray.join("")
    mainArray.push(subSting)
}
    let newString = mainArray.join(" ");
    return newString;
}
let someCase = 'This is a test';
//someCase = "Weird string case";
console.log(toWeirdCase(someCase)) */



function isPangram(string){
    let alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(i=0;i<string.length;i++){
        for(j=0;j<alphabet.length;j++){
        if(string[i] == alphabet[j]){
            alphabet.splice(j,1);
        }

        }
    }
return alphabet.length === 0 ? `This Sentence is a ${alphabet.length === 0} Pangram` : `This Sentence is a ${alphabet.length === 0} Pangram because these Characters are still missing ${alphabet}` 
}
let myString = "The quick brown fox jumps over the lazy dog.";
myString = "The quick rown fox umps over the lazy dog.";
console.log(isPangram(myString));
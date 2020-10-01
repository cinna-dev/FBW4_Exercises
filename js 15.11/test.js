/* function pigIt(str){
   str = str.split(' ');
   console.log(str[0])
   for(i=0;i<str.length;i++){
       if(!str[i].match(/!/gi)){
       str[i]+=str[i][0]+'ay';
       str[i] = str[i].slice(1,str[i].lenght);
       }
   
   }
   return str;
    }

    
let $1 = 'Pig latin is cool'//igPay atinlay siay oolcay

let $2 ='This is my string'//hisTay siay ymay tringsay
$2 = 'Hello world !'
console.log(pigIt($2)); */






/* function firstNonRepeatingLetter(s) {
   for(i=0;i<s.length;i++){
    for(j=i;j<s.length;j++){
        if(s[j] === s[i]){
        let re = new RegExp(s[i],'gi');
          s = s.replace(re,'');
          console.log( re)
        }
    }
   }
   return s[0];
    }



let sentence = 'a' //a

sentence = 'stress'// t

//sentence = 'moonmen'// e
//console.log(sentence = sentence.replace(''));    
console.log(firstNonRepeatingLetter(sentence)); */

 







/* function anagrams(word, words) {
    for(i=0;i<words.length;i++){
        for(j=0;j<words[i].length;j++){
            for(k=0;k<word.length; k++){
                console.log('words '+words[i][j], 'word '+word[k])
                if(words[i][j] == word[k]){
                    console.log(words[i] = words[i].slice(j,words[i].length));
                    console.log(words)
                    console.log(word)
                }else if(words[i][j].includes(word[k])){
                    console.log(words[i][j], word[k]) 
                    words.splice(i,1);
                    
                
                    console.log('asdfa')
                    console.log(words)
                }
            }
        }
    }
    return words;
    }


let myWord = 'abba'; 
let array =['aabb', 'abcd', 'bbaa', 'dada'];
//array[1] =array[1].slice(1,array.length)
//array[1] = 'asdfcsdf'
console.log(array)
console.log(anagrams(myWord, array)); */








/* function anagrams(word, words) {
    let words2 = words.slice();
    console.log(words2);
    let re;
    
    for(i=0;i<word.length;i++){
        re = new RegExp(word[i]);
        console.log(re)
            for(j=0;j<words.length;j++){
                console.log(re.test(words[j]))
                if(re.test(words[j])){
                    console.log(words[j].search(re))
                  // words[j] = words[j].slice(words[j].search(re),words[j].search(re)+1)
                     words.splice(j,1, words[j].replace(words[j].charAt(words[j].search(re)),''))
                    console.log(words[j])
            }
        }
    }
    return words; 
} */
    

/* function anagrams(word, words){
    let words2 = words.slice();
    words2.forEach(function(item,i,){
        words2[i] = Array.from(words2[i])
    });
    let restultArray = [];
   
    for(i=0;i<words2.length;i++){
         let word2 = Array.from(word);
        word2 = word2.sort();
       for(j=0;j<word2.length;j++){
            for(k=0;k<words2[i].length;){
                if(word2[j] === words2[i][k]){
                    words2[i].splice(k,1)

                    console.log(word2 ,words2)
                }else[j++]
            }
        }
        if(words2[k].length === 0){
            restultArray.push(words[k])
            }
    }
    return restultArray;
}
 */

function anagrams(word, words) {
    let words2 = words.slice();
    console.log(words2);
    let re;

    for(i=0;i<word.length;i++){
        re = new RegExp(word[i]);   
            for(j=0;j<words.length;j++){
                if(re.test(words[j])){
                     //words2[j] = words[j].slice(words[j].search(re),words[j].search(re)+1)
                     words.splice(j,1, words[j].replace(words[j].charAt(words[j].search(re)),''))
                    console.log(words,re)
            }
        }
    }
    for(k=0;k<words.length;){
       if(words[k].length > 0){
        words2.splice(k,1)
        words.splice(k,1)
       }else{k++}
    }
    
    return words2; 

}




//let myWord = 'abba'; 
//let array =['aabb', 'abcd', 'bbaa', 'dada'];
myWord = 'racer';
array = ['crazer', 'carer', 'racar', 'caers', 'racer']
//myWord = 'laser'
//array = ['lazing', 'lazy',  'lacer'];
//myWord = 'last'
//array = ['slat', 'salt', 'lamts','stall'];
console.log(anagrams(myWord, array));



/* console.log(/^[^ha]/.test('fah'))

let array = [1,2,3,4,5,6];

array2 = array.map(function(item){
   return  array[i] * array[i] == (item * item)
});
 */

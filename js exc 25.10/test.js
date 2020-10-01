//console.log(MORSE_CODE[Object.keys(MORSE_CODE)[2]])
//console.log(Object.keys(MORSE_CODE)[2]])



const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9"
};
function morseDecoder(text){
    let arr1  ;
    let arr2 = [];
    let arr3;
    let re = /[.-]*/ig;
    arr1 = text.match(re);
  //  console.log(Object.keys(MORSE_CODE));
   // console.log(MORSE_CODE[Object.keys(MORSE_CODE)[2]]);
    /* arr1 =text.toString();
    for(i=0;i<arr1.length;i++){
      re = new RegExp(Object.keys(MORSE_CODE)[i],"g");
      console.log(re)
     console.log(arr3 = arr1.replace(re, MORSE_CODE[Object.keys(MORSE_CODE)[i]]));
     console.log(arr1[i])
} */
for(n=0;n<text.length;n++){
 if(text==("...___...")){ 
     return 'SOS';} 
}
    for(k=0;k<arr1.length;k++){
        if(arr1[k] ==""){
             arr1.splice(k,1);
        }
    }  
    for(i=0;i<arr1.length;i++){
       arr2.push(MORSE_CODE[arr1[i]])
}
for(l=0;l<arr2.length;l++){
        if(arr2[l] ==undefined){
        arr2[l] =" ";
        }
    }
    arr2 = arr2.toString()
    arr3 = arr2.replace(/,/g,''); 
    console.log(arr3)
return arr3 ;
}


let encryptedText ='.... . -.--   .--- ..- -.. .' ;
encryptedText ="...___..." ;
encryptedText ='-.-. .... .- .-.. .-.. . -. --. .. -. --.';
document.write(morseDecoder(encryptedText, MORSE_CODE)); 

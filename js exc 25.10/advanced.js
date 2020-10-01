//console.log(code[Object.keys(code)[2]])
//console.log(Object.keys(code)[2]])



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

function advancedDecode(code){
    code = code.split('   ');
    let cl = code.length;
    let result ='';
    let segCode='';
    console.log(code.length)
    for(i=0;i<code.length;i++){
       segCode = subSegments(code[i]);
       
       result += segCode +' ';
    }
    
    function subSegments(code2){
        let codeOutput ='';
        code2 = code2.split(' ');
        for(i=0;i<code2.length;i++){
          if(code2[i] in MORSE_CODE){
            codeOutput += MORSE_CODE[code2[i]]
              console.log(codeOutput)
          }
        }
        return codeOutput;    
    }

    return result.trim();
    console.log(result);
}























fdecodeMorse = function(morseCode) {

    decodeWord = function(morseWord) {
        var morseSegments = morseWord.split(" ");
        var decodedSegments = [];
        var sLength = morseSegments.length;

        for (var i = 0; i < sLength; i++) {
            if (morseSegments[i] in MORSE_CODE) {
                decodedSegments += MORSE_CODE[morseSegments[i]];
            } else if (morseSegments[i] === "...---...") {
                decodedSegments += " SOS ";
            }
        }
        return decodedSegments;
    };
    
    var morseWords = morseCode.split("   ");
    var mLength = morseWords.length;
    var decodedMessage = "";
    for (var i = 0; i < mLength; i++) {
        var decodedWord = decodeWord(morseWords[i]);
        decodedMessage += decodedWord + " ";
    }
    return decodedMessage.trim();
};

  
let encryptedText ='.... . -.--   .--- ..- -.. .' ;
//encryptedText ="...___..." ;
//encryptedText ='-.-. .... .- .-.. .-.. . -. --. .. -. --.';
document.write(advancedDecode(encryptedText)); 

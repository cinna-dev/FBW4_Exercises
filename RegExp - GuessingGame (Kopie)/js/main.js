let GameData = {
    arrayWords: ['Javascript','Array','DigitalCareerInstitute','fbw4','Schokoladenhase', 'Mittelfinger'],
    word: '',       // variable for the one word to discover
    arrayOfLetters:[], //array for the hidden letters of the word
    numberOfTries: 8
    //If you think is needed add more Key:values to the object, Also Feel free to add your own words to the array :)
};

//SHOW FUNCTIONS -- NO NEED TO CHANGE ANYTHING HERE

txtField = document.getElementById('field');    //Inputfield
letterCont = document.getElementById('letters');    //Hidden letters
message = document.getElementById('message');       //Response message to the User
used = document.getElementById('used');     //Used letters
txtField.addEventListener('input',getWord);
regExLetter = /[A-Za-z]/;                       //Regex for the Word, just letters
regExWord = "";


function showWord() {
    let output = '';
    GameData.arrayOfLetters.map(element => {
        output += `
        <div class = "letter">
        <span>${element}</span>
        </div>
        `
    });
    letterCont.innerHTML = output;
}

function showMessages(param) {
    if (param) {
        showWord()
        message.innerHTML = "This letter is in the Word";
    } else {
        message.innerHTML = "Try again! you have still "+ GameData.numberOfTries+" Tries";
    }
}

function showUsed(param) {
    if (param) {
        used.innerHTML = "This letter is in the Word";
    } else {
        message.innerHTML = "Try again! you have still "+ GameData.numberOfTries+" Tries";
    }
}

function showResult(param) {

    if (param) {
        showWord()
        message.innerHTML = "You Won! :)";
    } else {
        message.innerHTML = "You lost :( The word was "+ GameData.word;
    }
    
}

function getWord(e) {
    if (e.keyCode != 13 ) {
        Game(e.target.value)
    }else{
        console.log('This is not a valid Letter')
    }
}


//BEGIN CODING AFTER THIS----------

function startGame(){
    GameData.word = GameData.arrayWords[Math.floor(Math.random()*GameData.arrayWords.length)];
    for(i=0;i<GameData.word.length;i++){
        GameData.arrayOfLetters.push('_')  
    }
    showWord()
}

function Game(input){
    console.log(input)
    if(input.length < 0){return;}

    let re = new RegExp(input,'gi')
    let boolean = re.test(GameData.word);
    if(boolean){
        for(i=0;i<GameData.word.length;i++){
            if(re.test(GameData.word[i])){
                GameData.arrayOfLetters.splice(i,1,GameData.word[i])
            }
        }
        
    }else{
        GameData.numberOfTries-- ;
    }
    showMessages(boolean);
    if(!/_/g.test(GameData.arrayOfLetters)){
        showResult(true)
    }
    if(GameData.numberOfTries == 0){
        showResult(false)
    }
    
}

startGame()
//Game('a')
console.log(GameData.arrayOfLetters)
//console.log(/_/g.test(GameData.arrayOfLetters))

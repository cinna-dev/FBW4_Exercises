let GameData = {
    arrayWords: ['Javascript','DigitalCareerInstitute','fbw4','array'],
    word: '',
    arrayOfLetters:[],
    numberOfTries: 8
    //If you think is needed add more Key:values to the object
};

txtField = document.getElementById('field');
letterCont = document.getElementById('letters');
message = document.getElementById('message');
txtField.addEventListener('keydown',getWord)


function showWord() {
    let output = '';
    GameData.arrayOfLetters.forEach(element => {
        output += `
        <div class = "letter">
            <span>${element}</span>
        </div>
        `
    });
    letters.innerHTML = output;

}

function showMessages(param) {
    if (param) {
        showWord()
        message.innerHTML = "This letter is in the Word";
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
    if (e.keyCode == 13) {
        Game(e.target.value)
    }
}

//FOR STUDENTS

let winRegex= new RegExp('[_]','g')

function startGame() {
    lengthArray = GameData.arrayWords.length;
    let randomNumber = Math.floor(Math.random()*lengthArray);

    GameData.indexNumber = randomNumber;
    GameData.word = GameData.arrayWords[randomNumber];
    let wordAsArray = GameData.word.split('');
    GameData.arrayOfLetters = wordAsArray.map(() => '_');
    GameData.numberOfTries = 8;
    showWord()
}

function Game(input) {
    //Check no more than one Letter or at least a letter
    if (input.length > 1 || input.length < 1 ){
        alert("Please write a valid input")
    }else{
    //Check how many times the letter is in the word
        let inputreg = "["+input+"]";
        let Regex = new RegExp(inputreg,'gi');
        let wordAsArray = GameData.word.split('');
        let word = wordAsArray.join('');
        let matched = word.match(Regex);
        let found = false;
        let letters = GameData.arrayOfLetters.join('')
        let usedLetter = letters.match(Regex);
        if(usedLetter){
            alert("You already used this letter! Try a different one")
            GameData.numberOfTries--;
        }else{
            if (!matched) {
                alert("This letter is not in the word! Try a different one")
                GameData.numberOfTries--;
            } else {
                for (let index = 0; index < matched.length; index++) {
                    wordIndex = word.search(Regex);
                    wordAsArray.splice(wordIndex,1)
                    GameData.arrayOfLetters[wordIndex+index] = input
                    word = wordAsArray.join('');
                }
                
                found = true;
            }
        }

        showMessages(found)

        if(!(GameData.arrayOfLetters.join('').match(winRegex))){
            showResult(true)
            startGame()
        }
        if(GameData.numberOfTries == 0){
            showResult(false)
            startGame()
        }
        
        
        
    }
}




startGame()
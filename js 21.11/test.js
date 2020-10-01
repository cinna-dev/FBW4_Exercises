function createNumber (){
    return Math.floor(Math.random()*(10-1)+1);
}

function guessingNumber(){    
let guessedNumber = prompt('Guess a Number between 1-10');
for(count = 1;count <= 3;count++){
if(guessedNumber == randomNumber && count < 3){
    alert(`Success, the Number was ${randomNumber} Attempts ${count}`);
    createNumber();
    return
}else if(guessedNumber != randomNumber && count < 3){
    guessedNumber = prompt('Nope, sorry! Try again!');
}else if(guessedNumber != randomNumber && count >= 3){
    alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
    return
        }
    }
    return
}

let boolean = true;
let randomNumber = createNumber();

do{
randomNumber = createNumber();
console.log(randomNumber)  
guessingNumber();
boolean = confirm('Do You want a next Round?')
}while(boolean);

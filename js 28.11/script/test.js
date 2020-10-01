const card = document.querySelector('.card');
const heading = document.querySelector('h1');
const title = document.createTextNode('Multiple Choice')
heading.appendChild(title)
let answerBool;
let index;
let qBI= 0;


// create tableRow
function tableRow(){
    return document.createElement('tr');
  }

// create tableData
function tableData(){
  return document.createElement('td');
}


//inputs
function createInput(value){
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'question';
    if(value >= 0){
        input.value = value 
    }
    if(questionBasket[qBI].answerBool != undefined && questionBasket[qBI].answerBool == index  && value == index){
          input.checked = true;
        input.disabled = true; 
        input.className ='checked';
        } else if(questionBasket[qBI].answerBool != undefined && questionBasket[qBI].answerBool != index  && value == index){
            input.disabled = true;
           input.className ='unValid';
        } else if(questionBasket[qBI].answerBool != undefined && questionBasket[qBI].answerBool != index && questionBasket[qBI].answerBool == value ){
            input.disabled = true;
           input.className ='valid';
        }else if(questionBasket[qBI].answerBool != undefined ){
            input.disabled = true; }
    return input
}


//////////////////// Questions Array ////////////////////

let questionBasket = [
    {questionInput : 'Which City is the most populated',
    choices : ['Tokyo','Delhi','Shanghai','Sao Paulo'],
    rightAnswer : 'Tokyo'
    },
    {questionInput : 'Which Animal is the largest',
    choices : ['Blue Whale','Colossal Squid','African Elephant','Giraffe','Brown Bear.'],
    rightAnswer : 'Blue Whale'
    },
    {questionInput : 'Which is the highest Mountain',
    choices : ['K2 ','Lhotse','Everest','Makalu','Kangchenjunga','Cho Oyu'],
    rightAnswer : 'Everest'
    },
    {questionInput : 'Which is the largest Country',
    choices : ['Russia ','Canada','United State','China','Brazil','Australia'],
    rightAnswer : 'Russia'
    },
    {questionInput : 'Which Companie is the largest (in Market cap, 2019)',
    choices : ['Apple','Alphabet (Google)','Microsoft','Amazon','Tencent','Facebook','Alibaba'],
    rightAnswer : 'Apple'
    },
    {questionInput : 'Which is the longest River',
    choices : ['Nile','Amazon ','Yangtze','Yellow River','Paraná','Congo','Alibaba'],
    rightAnswer : 'Nile'
    }
]

/////////////////// Randomize /////////////////////
function compare(){
        let temp = Math.floor(Math.random()*3);
        return (temp == 0 ? -1 : temp == 1 ? 0 : 1);
    }
function randomizer(arr){
    arr.sort(compare)
    arr.forEach(function(item){
        item.choices.sort(compare)
    })
} 

randomizer(questionBasket)


 ///////////////// Remove Content ///////////////////
    function removeQuestion(){
        const cardBody = document.querySelector('.card-body');
       if(cardBody.children.length <= 1){
           return
       }else{
        cardBody.children[cardBody.children.length-1].remove() 
        removeQuestion()
       }
    }

////////////////////////////////////////////////
////////////////  Question /////////////////////

function question(qbasket,a,trigger=false){
   
    const cardBody = document.querySelector('.card-body');
   
   if(!trigger && cardBody.children.length >1){
    removeQuestion()
   
   }else if(trigger ){heading.firstChild.replaceWith('Resolution')}
   const questionTitel = document.createElement('h4');  
    
    //establish new ones
    cardBody.appendChild(questionTitel).appendChild(document.createTextNode(qbasket[a].questionInput))

    let table = document.createElement('table')
    table.className = 'table table-striped table-responsive-sm' 
    cardBody.appendChild(table)
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    
    thead.appendChild(tableRow());
    tbody.appendChild(tableRow());
    
    thead.className = 'text-center'
    tbody.className = 'multipleChoice text-center'
    tbody.addEventListener('change',eventListener)
    qbasket[a].choices.forEach(function(item,i){
       
        thead.firstElementChild.appendChild(tableData()).appendChild(document.createTextNode(item))
        let td = tableData()
        td.appendChild(createInput(i))
        td.style.backgroundColor = (td.firstElementChild.checked ? 'green' :td.firstElementChild.className == 'unValid' ? 'PaleGreen' : td.firstElementChild.className == 'valid' ? 'red' : ''  )
        tbody.firstElementChild.appendChild(td)
    })
    table.appendChild(thead)
    table.appendChild(tbody)
   
} 
//////////////////////////////////////////////////////////////////////////
//////////////////////////////// Score ///////////////////////////////////

function getScore(){
    let score = 0;
    const inputs =Array.from(document.querySelectorAll('input')) ;
    inputs.forEach(function(item){
       if(item.className.includes('checked')){
        score++;
       }
})
    const cardBody = document.querySelector('.card-body');
    const h3 = cardBody.appendChild(document.createElement('h3'))
    h3.className = 'text-center ';
    h3.style.backgroundColor = 'rgba(0,0,0,0.04)'
    if(score < questionBasket.length && score > 0){
    h3.innerHTML = `You got <span style = "color: green"> ${score} </span> out of <span style = "color: blue">${questionBasket.length}</span> correct answers`
    }else if(score == 0){
        h3.innerHTML = `You got <span style = "color: red"> ${score} </span> out of <span style = "color: blue">${questionBasket.length}</span> correct answers`
    }else{
        h3.innerHTML = `Congratulation!!! You got all <span style = "color: green"> ${score} </span> answers correct `
        h3.style.font = 'bold';
    }
} 


checkCorrectAnswer()

question(questionBasket,qBI)

////////////////////////// Button //////////////////////////////////

//Next
function createNextButton(){
    switch(card.querySelectorAll('.btn').length > 0){
    case true: card.querySelector('.btn').remove()
    default:const button = document.createElement('button');
        button.type='submit';
        button.className = "btn btn-lg btn-light ";
        button.disabled = true;
        button.addEventListener('click',nextButton);
        button.appendChild(document.createTextNode('Next'));
        card.appendChild(button)
    }
}
createNextButton()

//Submit
function createSubmitButton(){
    switch(card.querySelectorAll('.btn').length > 0){
        case true: card.querySelector('.btn').remove()
        default:const button = document.createElement('button');
        button.type='submit';
        button.className = "btn btn-lg btn-light ";
        button.disabled = true;
        button.addEventListener('click',submitButton);

        button.appendChild(document.createTextNode('Submit'));
        card.appendChild(document.createElement('div').appendChild(button))
    }
}

//Try Again
function createAgainButton(){
    switch(card.querySelectorAll('.btn').length > 0){
        case true: card.querySelector('.btn').remove()
        default:const button = document.createElement('button');
        button.type='submit';
        button.className = "btn btn-lg btn-light btn-outline-info";
        button.addEventListener('click',tryAgainButton);

        button.appendChild(document.createTextNode('Try Again'));
        card.appendChild(document.createElement('div').appendChild(button))
    }
}

////////////////////////////////////////////////////////////////
////////////////////// Check Correct Answer /////////////////////

function checkCorrectAnswer(){
questionBasket[qBI].choices.forEach(function(item,i){
        if(item.includes(questionBasket[qBI].rightAnswer)){
            index = i
            
        }   
    })  
   
}
// Button enabler
    function eventListener(event){
       answerBool = event.target.value;
      let btn = card.querySelector('.btn')
      btn.disabled = false; 
      btn.classList.add("btn-outline-secondary")
    }

////////////////////////////// Next Button //////////////////////////

function nextButton(event){
    questionBasket[qBI].answerBool = answerBool;
    qBI++;
    if(qBI < questionBasket.length-1){
        answerBool = undefined;
        createNextButton()
        question(questionBasket,qBI);
        checkCorrectAnswer()
    }else{
        answerBool = undefined;
        createSubmitButton()
        question(questionBasket,qBI);
        checkCorrectAnswer()
        }
}
////////////////////////////// Submit Button //////////////////////////

function submitButton(){
    if(answerBool != undefined){
    card.querySelector('.btn').remove()    
    questionBasket[qBI].answerBool = answerBool;
    qBI =0
    removeQuestion()      
    for(i=0;i<questionBasket.length;i++){
        qBI = i
        n = checkCorrectAnswer()
        question(questionBasket,i,true)
    } 
    getScore()
    createAgainButton();
    }
}
////////////////////////////// try Again Button //////////////////////////

function tryAgainButton(){
    questionBasket.forEach(function(item){
        
        delete item.answerBool
    }) 
    qBI=0;
    randomizer(questionBasket);
    question(questionBasket,qBI);
    checkCorrectAnswer();
    createNextButton();
}
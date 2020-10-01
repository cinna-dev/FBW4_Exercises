/////////////// mousedown mouesup ////////////////////
/* const img = document.querySelector('img');
img.addEventListener('mousedown', downHandler);
img.addEventListener('mouseup', downHandler);

function downHandler(e){
    if(e.type == 'mousedown'){
        img.setAttribute('src',"./img/bulbon.gif");
    }else{
        img.setAttribute('src',"./img/bulboff.gif");
    }
} */

//////////////////// mouseenter mouseleave ////////////////
/* const img = document.querySelector('img');
img.addEventListener('mouseenter', enterHandler);
img.addEventListener('mouseleave', enterHandler);

function enterHandler(e){
    if(e.type == 'mouseenter'){
        img.setAttribute('src',"./img/bulbon.gif");
    }else{
        img.setAttribute('src',"./img/bulboff.gif");
    }
} */
//mouseover fires when the pointer moves into the child element as well, while mouseenter fires only when the pointer moves into the bound element.



////////////////////// mouseover mouesout /////////////////////////
document.images[0].addEventListener('mouseover', enterHandler);
document.images[0].addEventListener('mouseout', enterHandler);

function enterHandler(e){
    if(e.type == 'mouseover'){
        this.setAttribute('src',"./img/bulbon.gif");       
        //this.src = "./img/bulbon.gif"                   //use pre defined Method instead // like setAttribute
    }else{
        this.setAttribute('src',"./img/bulboff.gif");
        //this.src = "./img/bulboff.gif"
    }
}



console.log(document.images)
console.log(document.input)
console.log(document.scripts)
console.log(document.all)
console.log(document.meta)

textInput.addEventListener('focus',function(){
    this.style.backgroundColor = 'yellow';
})
textInput.addEventListener('blur',function(){    // textInput is ID op HTML element input // can use ID instead of any queryselector
    this.style.backgroundColor = '';
})

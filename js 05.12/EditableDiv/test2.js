/* document.body.addEventListener('click', editAble);

function editAble(event){
    console.log(event.target)
     if(event.target.id != 'textArea' && event.target.id != 'div'){
    textArea.blur();
    const div = document.createElement('div')
    div.id = 'div'
    div.innerHTML = textArea.value
    textArea.replaceWith(div)
    div.addEventListener('click',divEvent)
    }
    else{
    const textArea = document.createElement('textarea')
    textArea.id = 'textArea';
    textArea.style.width = div.clientWidth +'px';
    textArea.style.height = div.clientHeight +'px';
    textArea.innerHTML = div.innerHTML
    div.replaceWith(textArea)
    textArea.focus()
    }
}
 */


const div = document.getElementById('div')
div.addEventListener('click', editAble);
const textArea = document.createElement('textarea')
document.getElementsByTagName('li')[0].blur()
function editAble(event){
    textArea.style.width = div.clientWidth +'px';
    textArea.style.height = div.clientHeight +'px';
    textArea.innerHTML = div.innerHTML
    div.replaceWith(textArea)
    textArea.focus()
    textArea.addEventListener('keydown', function(event){
        if(event.key == 'Enter'){
            event.target.blur()
        }
    });
    textArea.addEventListener('blur', nonEditAble);
    
}
function nonEditAble(event){      
    div.innerHTML = textArea.value
    textArea.replaceWith(div);
}
 
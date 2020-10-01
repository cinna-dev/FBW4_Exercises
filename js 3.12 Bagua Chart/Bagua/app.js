//foo(true)
//function foo(once){
    const baguaTable = document.getElementById('bagua-table');
baguaTable.addEventListener('click',eventHandler, {
    once: true,
     passive: true,
    capture: true 
  });
//}
function eventHandler(event){
    console.log(event.target)
   
    console.log(event.target.querySelector('textarea'))
    let allTextArea = document.querySelectorAll('textarea');
    /* if(allTextArea.length > 0){
        allTextArea = document.querySelectorAll('textarea');
        console.log(allTextArea[0])
       let innerHTML2 = allTextArea[0].innerHTML
            console.log(innerHTML2)
          let parent =  allTextArea[0].parentElement
          console.log(parent)
        allTextArea[0].remove();
        //allTextArea[0].parentElement.className
        //parent.innerHTML = innerHTML2
    } */
    let td =  event.target
        td.className='';
    let innerHTML = event.target.innerHTML;
    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.appendChild(document.createTextNode(innerHTML));
    //td.replaceWith(textArea)
    event.target.innerHTML = '';
    console.log(event.target.closest('td'))
    event.target.closest('td').appendChild(textArea);
    let allButtons = document.querySelectorAll('button');
    
    /* if(allButtons.length > 0){
        for(i=0;i<2;i++){
            allButtons = document.querySelectorAll('button');
            allButtons[0].remove();
        }
    } */
    event.target.insertAdjacentHTML("beforeend",'<div class="edit-controls"><button class="edit-ok ">OK</button><button class="edit-cancel">CANCEL</button></div>');
   // foo(false)

}
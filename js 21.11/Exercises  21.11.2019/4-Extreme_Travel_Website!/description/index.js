const header = document.querySelector('.heading').parentElement;
header.style.border ='solid 5px'

const info = document.querySelector('.info')

 for(i=0;i<info.children.length;i++){
    if(info.children[i].className.includes('info-package')){
        info.children[i].querySelector('p').previousElementSibling.style.border='solid 5px';
    }
    if(info.children[i].querySelector('label').className.includes('mild')){
        info.children[i].querySelector('label').style.textDecoration = 'underline  yellow';
    }else if(info.children[i].querySelector('label').className.includes('intense')){
        info.children[i].querySelector('label').style.textDecoration = 'underline  orange';
    }else{
        info.children[i].querySelector('label').style.textDecoration = 'underline  red';
    }  
} 

////////////////////// copy and append nav list to footer  //////////////////////
const navList = document.querySelector('.nav-list').children;
const footerList = document.querySelector('footer').children[0].children;  

 for(i=0;i<navList.length;i++){
    let temp = navList[i].cloneNode(true)//cloning HTML Collection Item
    footerList[footerList.length-1].appendChild(temp);
} 


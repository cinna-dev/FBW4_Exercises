const body = document.querySelector('body');
body.style.fontSize = '20px';
document.querySelector('h1').style ='text-align: center;'
const category = document.getElementsByClassName('category')
for(i=0;i<category.length;i++){
    category[i].style = 'font-style: italic; text-decoration: underline';
    
}
/////////////////////////////   color generator  ////////////////////////////////
function colorGenerator(){
    let color = [] ;
    
    for(i=0;i<3;i++){
        color.push(Math.floor(Math.random()*255)); 
    }
    let alpha = Math.random().toFixed(1);
    return `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
}
/////////////////////////   ul/li color   ///////////////////////////
let ul = Array.from(document.querySelectorAll('ul.food-category'));
    ul.forEach(function(item){
        item.style.background =colorGenerator();
        item.style.paddingRight = '200px'
        item.style.margin = '30px';
    })


  ///////////////// warning  /////////////
  const warning = document.getElementById('warning');
  
  warning.style.font = 'Sans-serif'
  warning.style.fontSize = '26px'
  warning.style.fontWeight = 'bold'

  ////////////////////// allergy even /////////////////////////////
  const info = document.querySelectorAll('li.allergy-info:nth-child(even)')
  let temp = colorGenerator();
  Array.from(info).forEach(function(item){
      item.style.background = temp;
  });
  
///////////////////////  allergie warning collumn  /////////////////
const collumn = document.querySelector('.allergy-warning')
console.log(collumn)
collumn.style = 'margin-left:30%; margin-right:30%';

 document.getElementsByClassName('footer')[0].style.marginLeft = '25%';
 document.getElementsByClassName('footer')[0].style.marginRight = '25%';
const footer = document.getElementsByClassName('footer')[0].children
console.log(footer)
 Array.from(footer).forEach(function(item){
    console.log(item)
    //item.style.background = 'yellow'
    item.style = "background:white; border-radius:50%;border-style: solid; border-color: yellow; border-width: 5px; padding-top:60px; text-align: justify; display: inline-block; width:160px; height:160px ; margin:20px";
}); 


console.log(footer)
  ///////////responsive///////////////
if(window.matchMedia("(max-width: 600px)").matches) {
    ul.forEach(function(item){
        item.style.textAlign = 'none';
        item.style.display = 'list-item';
    })
    Array.from(footer).forEach(function(item){
        item.style.textAlign = 'none';
        item.style.display = 'list-item';
    })
  }else{
    ul.forEach(function(item){
        item.style.textAlign = 'center';
        item.style.display = 'inline-block';
     })   
    Array.from(footer).forEach(function(item){
        item.style.textAlign = 'center';
        item.style.display = 'inline-block';
    })
}

/* function logIn(userName, passWord, data){
    if(userName === data.username && passWord === data.password){
        document.write('SUCCESS...   ' + 'USERNAME: ' + userName +' PASSWORD: '+ passWord)
    }
    else if(userName === data.username && passWord !== data.password ){
        document.write('DENIED... ' + 'USERNAME: ' + ' \" CORRECT \" ' +' PASSWORD: '+ ' \" WRONG PASSWORD \" ')
    }
    else if(userName !== data.username && passWord === data.password ){
        document.write('DENIED...   ' + 'USERNAME: ' + ' \" WRONG USERNAME \" ' +' PASSWORD: '+' \" CORRECT \" ')
    }
    else{document.write('DENIED...   ' + 'USERNAME: ' + ' \" WRONG USERNAME \" ' +' PASSWORD: '+ ' \" WRONG PASSWORD \" ')}
}


Username = 'dave';
Password = 'hAL9000';

Data = {
    username :'dave',
    password : 'HAL9000'
}
logIn(Username, Password, Data);


 */






/* function logIn(userName, passWord, data){ 
    for(i=0; i<data.length; i++){
    if(userName === data[i].username && passWord === data[i].password){
        document.write('SUCCESS...   ' + 'USERNAME: ' + userName +' PASSWORD: '+ passWord +'<br>')
    }
    else{
        document.write('DENIED...   ' +'<br>')
    }
}
}

let Username = 'dave';
let Password = 'HAL9000';



let Data1 = {
    username :'dave',
    password : 'HAL9000'
}
let Data2 = {
    username :'mike',
    password : '33K3'
}
let Data3 = {
    username :'clara',
    password : '4455'
}
let dataArray = [Data1, Data2, Data3]


logIn(Username, Password, dataArray); */

/* function canIBuyItandReturn(pocketbudget, itemprize){
    let temp = [];
    if(itemprize <= pocketbudget && itemprize <= pocketbudget /100 *60 ){
        temp.push('You can buy this item ')
        pocketbudget = 'money left ' + (pocketbudget - itemprize);
        temp.push(pocketbudget)
    }else if(itemprize <= pocketbudget  ){
        temp.push('You can\'t buy this item because it exceeds your 60% the prize is ' + -(pocketbudget /100 *60- itemprize)+' to high')
    }
    else{temp.push('You can\'t buy the item ,you need '+ -(pocketbudget - itemprize)) 
}
    return temp;
}


let pocketMoney = 100 ;
let itemCosts = 61 ;
document.write(canIBuyItandReturn(pocketMoney, itemCosts )) */






function compare(pocketbudget,item, arr){
    let temp ;
    if(item.prize <= pocketbudget){
    temp = 'You can buy this item'
    }
else if(item.prize >= pocketbudget){
    for(j=0; j<arr.length; j++){
      if(arr[j].prize <= pocketbudget && item.type === arr[j].type){
        temp = 'You can\'t buy this item, you need '+ -(pocketbudget - item.prize) + ' but you can buy this item: '+ arr[j].name
      }
    }
} 
return temp;
    }
   


    
let pocketMoney = 70;

let item1 = {
    name : 'Carrot',
    type : 'vegtable'  ,
    prize : 50
}
let item2 = {
    name : 'Potato',
    type : 'vegtable'  ,
    prize : 100
}
let item3 = {
    name : 'Steak',
    type : 'meat'  ,
    prize : 40
}
let item4 = {
    name : 'Burger',
    type : 'meat'  ,
    prize : 120
}

let itemArray = [item1, item2, item3, item4] ;


document.write(compare(pocketMoney,item4, itemArray ))



















/* function everyElement(name){
    let temp =[];
    for(i=0; i<name.length; i++){
    temp.push(name[i])
}
for(name.length; j=0; j++){
    temp.push(name[j])

}
return temp
}
let itemName ='dog'
document.write(everyElement(itemName )) */
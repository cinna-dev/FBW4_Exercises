/* function weekendOrNot(date){
    let day = date.getDay();
    return(day == 0 || day == 6)?'it is a Weekend':
    'it is not weekend'
}
let choosenDate = new Date('11-05-2019');
console.log(weekendOrNot(choosenDate));
*/


//////////////////////////Switch/////////////////////////////////////

function dayColor(color){
    switch(color){
        case 'blue':return 'Sunday'
        case 'red':return 'Monday'
        case 'yellow':return 'Tuesday'
        case 'green':return 'Wednesday'
        case 'orange':return 'Thursday'
        case 'purple':return 'Friday'
        case 'brown':return 'Saturday'
        default: return 'This Color is not included'
    }

}
let choosenColor = 'yellow';
console.log(dayColor(choosenColor));


// Self invoking anonymous funciton // for each an array param // using of reference type of the array
const arrayOfNumbers = [1,2,3,4];
 (function (arr){
    arr.forEach(function(item,i){
        arr[i] = item*item;
     });
   
 })(arrayOfNumbers);
console.log(arrayOfNumbers);


//////////////////////////L-4 The container problem/////////////////////////////////
/* function containerProblem(compasity, arr){
    let container = 0;
    let leftWeight = compasity;
    for(i=0;i<arr.length;i++){
        let count = 0;
        let remainingContainer =0;
        for(j=arr[i].amount;j>0;j--){
            if(leftWeight > 0 && leftWeight >=arr[i].kg){
            container++;
            leftWeight -= arr[i].kg
            count++;   
        }else{
            remainingContainer++;
        }
    }
    console.log(`amount ${count} with ${arr[i].kg} kg and ${remainingContainer} are remaining`)
}
return `the rest Compasity of the Ship is ${leftWeight} with ${container} Containers`    
}

const shipcompasity = 10000;
const shipContainers =[{amount:100,kg:10},
{amount:100,kg:20},
{amount:50,kg:50},
{amount:50,kg:100},
{amount:100,kg:200}]
console.log(containerProblem(shipcompasity, shipContainers)) */







/* function containerProblem(compasity, arr){
    let containers =[];
    let remaining =[];
    let leftWeight = compasity;
    for(i=0;i<arr.length;i++){
        containers.push({})
        containers[i].amount=0;
        containers[i].kg= arr[i].kg
        if(leftWeight > 0 && leftWeight >=arr[i].kg){
        for(j=arr[i].amount;j>0;arr[i].amount--){
            if(leftWeight > 0 && leftWeight >=arr[i].kg){
            leftWeight -= arr[i].kg
            containers[i].amount+=1;
            }
        }
    }else{
        containers.push({});
        containers[i].amount=0;
        containers[i].kg= arr[i].kg}
}

return containers    
}

const shipcompasity = 10000;
const shipContainers =[{amount:100,kg:10},
{amount:100,kg:20},
{amount:50,kg:50},
{amount:50,kg:100},
{amount:100,kg:200}]
console.log(containerProblem(shipcompasity, shipContainers))
console.log(shipContainers) */


let numberArray = [1,2,3,4,5,6];
(function(){
    numberArray=numberArray.map(function(item){
        return item*item
    })
})()
console.log(numberArray);

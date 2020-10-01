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
    console.log(`${count} Containers are on board with ${arr[i].kg} kg and ${remainingContainer} are remaining`)
}
return `the rest Compasity of the Ship is ${leftWeight} with ${container} Containers`    
}

const shipcompasity = 10000;
const shipContainers =[
{amount:100,kg:10},
{amount:100,kg:20},
{amount:50,kg:50},
{amount:50,kg:100},
{amount:100,kg:200}
]
console.log(containerProblem(shipcompasity, shipContainers))
 */

const numberArray = [1,2,3,4,5,6];
(function(arr){
    arr.map(function(item){
        return item*item
    })
})(numberArray);
console.log(numberArray);
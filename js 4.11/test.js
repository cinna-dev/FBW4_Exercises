/* function findRoute(arr){
    let optimalRoute = arr[0];
    for(i=0;i<arr.length;i++){
       if(optimalRoute.time > arr[i].time){
        optimalRoute = arr[i];
        }else if(optimalRoute.time === arr[i].time){
            for(j=0;j<arr.length;j++){
                if(optimalRoute.stops > arr[j].stops && optimalRoute.time >= arr[j].time){
                    optimalRoute = arr[j];
                    }else if(optimalRoute.stops  === arr[j].stops){
                        for(k=0;k<arr.length;k++){
                            if(optimalRoute.km > arr[k].km && optimalRoute.stops >= arr[k].stops && optimalRoute.time >= arr[k].time){
                                optimalRoute = arr[k];   
                        }
                    }
                }
            }
        }
    }
    return optimalRoute;
}

const arrayOfRoutes=[{name:'route1', km:16, time:30, stops:2},
                    {name:'route2', km:40, time:20, stops:3},
                    {name:'route3', km:10, time:20, stops:2},
                    {name:'route4', km:10, time:30, stops:2}];

console.log(findRoute(arrayOfRoutes)); */





/* function findRoute(arr){
    let optimalRoute = arr[0];
    for(i=0;i<arr.length;i++){
       if(optimalRoute.time > arr[i].time){
        optimalRoute = arr[i];
        }if(optimalRoute.stops > arr[i].stops && optimalRoute.time >= arr[i].time){
            optimalRoute = arr[i];
            }if(optimalRoute.km > arr[i].km && optimalRoute.stops >= arr[i].stops && optimalRoute.time >= arr[i].time){
                    optimalRoute = arr[i];   
        }
    }
    return optimalRoute;
}
        
    


const arrayOfRoutes=[{name:'route1', km:16, time:30, stops:2},
                    {name:'route2', km:40, time:20, stops:3},
                    {name:'route3', km:10, time:20, stops:2},
                    {name:'route4', km:10, time:30, stops:2}];

console.log(findRoute(arrayOfRoutes)); */

//(conditio1)?{statments} : (condition2)?{statments2}:{last statments}
////////////////D4 - Selling smartphones exercise//////////////////

function sellingSmartphones(cost){
    let cashier = 0;
    (cost.smartphone ? cashier += 300 : cashier+= 0);
    ((cost.smartphone && cost.headphones && !cost.cover)? (function(){cashier += 50 ; cashier -= cashier*0.1})(): cashier+= 0);
    ((cost.smartphone && cost.headphones && cost.cover)? (function(){cashier += 50;cashier += 20; cashier -= cashier*0.15}()): cashier+= 0);
    ((cost.smartphone && !cost.headphones && cost.cover === 'green')? (function(){cashier = 20 + cashier ; cashier = cashier - cashier*0.05})() :(cost.smartphone && !cost.headphones &&  cost.cover === 'pink')? (function(){cashier = 20 + cashier ; cashier = cashier - cashier*0.12})() : (cost.smartphone && !cost.headphones &&  cost.cover === 'orange')? (function(){cashier = 20 + cashier ; cashier = cashier - cashier*0.15})():cashier+= 0)
    
    return cashier;
}
const costumer = {smartphone: true, headphones:false, cover:"orange"};
console.log(sellingSmartphones(costumer));




function sellingSmartphones(cost){
    let cashier = 0;
    ((cost.smartphone && !cost.headphones && !cost.cover)? cashier = 300 :(cost.smartphone && cost.headphones && !cost.cover)? (function(){cashier += 300; cashier += 50 ; cashier -= cashier*0.1})():(cost.smartphone && cost.headphones && cost.cover)? (function(){cashier += 300; cashier += 50;cashier += 20; cashier -= cashier*0.15}()):(cost.smartphone && !cost.headphones && cost.cover === 'green')? (function(){cashier += 300; cashier = 20 + cashier ; cashier = cashier - cashier*0.05})():(cost.smartphone && !cost.headphones &&  cost.cover === 'pink')? (function(){cashier += 300; cashier = 20 + cashier ; cashier = cashier - cashier*0.12})(): (cost.smartphone && !cost.headphones &&  cost.cover === 'orange')? (function(){cashier += 300; cashier = 20 + cashier ; cashier = cashier - cashier*0.15})():cashier = 0)
    
    return cashier; 
}
const costumer = {smartphone: true, headphones:false, cover:"orange"};
console.log(sellingSmartphones(costumer));
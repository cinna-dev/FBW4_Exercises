////////////////////////////////DHL///////////////////////////////////
/* function dhl(kg){
    let $2kg = 0;
    let $5kg = 0;
if(kg <= 7){
    return `The weight must be higher than 7kg!`;
}else
    {if(kg%5 === 0){
        $5kg = kg/5;
        return `the Weight ${weight}Kg will be devided in ${$5kg}*5Kg package and ${$2kg}*2Kg package`;
    }else if(kg%5 !== 0 && kg%5 === 2){
        kg = kg -2;
        $5kg = kg/5;
        $2kg++;
        return `the Weight ${weight}Kg will be devided in ${$5kg}*5Kg package and ${$2kg}*2Kg package`;  
    }else if(kg > 8 && kg%5 !== 0 && kg%5 !== 2){
            for(i=1;i<4;i++){
                kg = kg - 2*i;
                for(j=1;j<4;j++){  
                if(kg%5 === 2*j){
                    kg = kg - 2*j;
                    $5kg = kg/5;
                    $2kg = j + i;
                        return `the Weight ${weight}Kg will be devided in ${$5kg}*5Kg package and ${$2kg}*2Kg package`;
                        }
                    }
                }
            }else if(kg <=8 &&  kg%5 !== 0 && kg%2 === 0){
                $2kg = kg/2;
                return `the Weight ${weight}Kg will be devided in ${$5kg}*5Kg package and ${$2kg}*2Kg package`;
        }
    }
}    
const weight = 11;
console.log(dhl(weight)) */



/////////////////////////A-6 Test Results revisit///////////////////////////


/* function testResult(result1, result2){
   let results  = result1.concat(result2)
   let totalNum = 0;
   let bestScore = results[0];
  for(i=0;i<results.length;i++){
  totalNum = totalNum + results[i]
  }
  const average = totalNum / results.length;
  for(i=0;i<results.length;i++){
   if(bestScore < results[i]){
    bestScore = results[i];
    }
}
results.push(average);
console.log(results);
return bestScore;
}
const goodResults = [67, 82, 91, 96, 54];
const badResults = [46, 48, 24, 33, 30];
console.log(testResult(goodResults, badResults)); */







/////////////////////Airline Tickets////////////////////////


/* function cheapTickets(airArr){
   let airlineNames = [];
    for(i=0;i<airArr.length;i++){
  switch (airArr[i].avgPriceTicket < 100){
    case true: airlineNames.push(airArr[i].airlinesName);
    break;
    case false: break;
        }
    }
    return airlineNames;
}
const airlinePrices = [
    {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
    {airlinesName: 'Aegean', avgPriceTicket: 65.8},
    {airlinesName: 'KLM', avgPriceTicket: 102.82},
    {airlinesName: 'British Airways', avgPriceTicket: 114.9},
    {airlinesName: 'Iberia', avgPriceTicket: 77.2},
    {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
    {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
    {airlinesName: 'Air France', avgPriceTicket: 105.6},
    {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
    {airlinesName: 'Emirates', avgPriceTicket: 135.4},
  ]
console.log(cheapTickets(airlinePrices));
 */




////////////////////////4 Calculate saved money till pension//////////////////////////////////
/* function savedMoneyTillPension(curentAge, pensionsAge, monthlyWage, percent){
    if(curentAge >= pensionsAge){
        return 'Calculate your past memories mate!';
    }else{
     const tillRetire = pensionsAge - curentAge;
      
     return `You will have saved up ${(tillRetire*12)*(monthlyWage/100*percent)}$ until your retirement`;
    }
}
const personsAge = 40;
const pensionAge = 65;
const wageMonthly = 2000;
const percentage = 5;
console.log(savedMoneyTillPension(personsAge, pensionAge, wageMonthly, percentage)) */







////////////////////////////////F-8 Money until the rest of the week calculator//////////////////////////////

/* function calculateRestOfWeekMoney(day){
    let earnings = 0;
    switch(true){
        case 1==day:earnings = earnings + 4 * 10;
        case 2==day:earnings = earnings + 6 * 10;
        case 3==day:earnings = earnings + 8 * 10;
        case 4==day:earnings = earnings + 10 * 10;
        case 5==day:earnings = earnings + 2 * 10;
        case 6==day:earnings = earnings + 0;
        case 7==day:earnings = earnings + 0;
        return earnings;
    }
}
console.log(calculateRestOfWeekMoney(1)); */







//////////////////////////////////////A-10 Aggregate Basket/////////////////////////////////////////
function basket(arr){
    let myBasket = {};
    for(i=0;i<arr.length;i++){
        if(!myBasket.hasOwnProperty(arr[i])){
        myBasket[arr[i]]=1;}
    else if(myBasket.hasOwnProperty(arr[i])){
        myBasket[arr[i]]+=1;
    }
} 
return myBasket;
}
const sales = [
    'smartphone',
    'smartphone',
    'laptop',
    'smartphone',
    'laptop',
    'air_cooler',
    'smartphone',
    'smartphone',
    'laptop',
    'smartphone',
    'smart_watch'
  ];

console.log(basket(sales));
/* const timeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
(function(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>6 && arr[i]<=12){
            console.log('Good Morning')
        }else if(arr[i]>12 && arr[i]<=18){
            console.log('Good Afternoon')
        }else if(arr[i]>18 && arr[i]<=24){
            console.log('Good Evening')
        }else{
            console.log('Good Night')
        }
    }
})(timeArray); */



/* function selectPerson(arr){
  const arr2 = arr.map(function(item, index, arr){
        return item.id%2===0? item :  new Object;
    })
    return arr2;
} */
/* let temp = [];
function selectPerson(arr){
    arr.map(function(item){
          if(item.id%2===0){temp.push(item)}
      });
      
  }
const arrayOfPersons =[
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'},
    {id:4,name:'d'},
    {id:5,name:'e'},
    {id:6,name:'f'},
    {id:7,name:'g'},
    {id:8,name:'h'}
]
console.table(selectPerson(arrayOfPersons))
console.table(arrayOfPersons);
console.table(temp); */





/* function selectPerson(arr){
    const arr2 = arr.map(function(item, index, arr){
          if(item.id%2===0){
              return item;
          }else{
             return null;
          }
      })
      return arr2
  }
  
  console.table(selectPerson(arrayOfPersons)) */



  function payEmployees(arr, balance){
      let employeesId = arr[0].id;
      arr.forEach(function(item, index, arr){
          if(employeesId>item.id){
                
          } employeesId = item.id;
      })
      for(i=0;i<arr.length;i++){
      arr.forEach(function(item, index, arr){
        if(employeesId==item.id ){
              for(i=item.amount;i>0;i--){
                  if(balance >= item.earnings){
                    balance -= item.earnings
                  }
              }
        }
    })
    employeesId++;
    }
return balance;
}
    
  const Employees =[
      {label:'general',amount:50, earnings:1000 ,id:5},
      {label:'Frontend',amount:4, earnings:1500 ,id:4},
      {label:'Backend',amount:4, earnings:2000 ,id:3},
      {label:'FullStack',amount:2, earnings:3000 ,id:2},
      {label:'Project managers',amount:1, earnings:4000 ,id:7},
      {label:'DevOps Engineers',amount:5, earnings:5000,id:6},
      {label:'Data Analys',amount:1, earnings:7500 ,id:1},
      {label:'Machine Learning Engineer',amount:1, earnings:10000 ,id:1},
  ];
const Cashier = 100000;
console.log(payEmployees(Employees, Cashier));






/* function mobileNumberPrice(num, bDay){
    let numS = num.toString();
    bDay = bDay.toString();
    let price = 39;
    bDay = bDay.replace(/-/g,'')
    console.log(bDay)
    let condition = 'standart';
    
    if(numS.length < 8){
        return `this is not a phone number`
    }else{
        let numArray =[];
        for(j=0;j<numS.length;j++){
        let temp = 0;
        for(i=j;i<numS.length;i++){
            if(temp ==  7 ){
            price += 100;
            condition = 'Gold';
            }else if(numS[j] === numS[i] && temp === 0){
                temp++;
            }else if(numS[j] === numS[i] && temp === 1){
                numArray.push(numS[j])
                temp = temp +1;
                
            }else if(numS[j] === numS[i] && temp > 1){
                
                temp = temp +1;

            }  console.log(temp)
        }
    }
    if(numArray.length == 4){
        price += 50;
        condition = 'Silver';
    }else if(numS.includes(bDay)){
    price += 200;
    condition = 'Platin';
    }
      console.log(numArray) 
    }
    
   return `you have a ${condition} phone number is and cost ${price} `
}

let phoneNumber = 22334457;
phoneNumber = 24031987;
phoneNumber = 52325434;
phoneNumber = 44444444;
const costumerBirthday = '24-03-1987'
console.log(mobileNumberPrice(phoneNumber, costumerBirthday)) */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* function getPrice(initPrice, mobileNumber, userBirthDate){                       //Prototype // head of function
    let result = 'Please enter a Valid Mobile Number';                           // 0 in a number will be ignore when beeing left
    if(mobileNumber.length != 8){
        return result;
    }
    else if(mobileNumber.includes(userBirthDate)){
        result = `Platinium Number: ${initPrice + 200}`
        return result;
    }

    let test = Array.from(mobileNumber);

    let counter =[0,0,0,0,0,0,0,0,0];
    for(i=0;i<test.length;i++){
        if(test[i]){
            if (test[i]== 0){
                counter[0]=counter[0]+1;
                }
            else if (test[i]== 1){      
                counter[1]=counter[1]+1;
            }
            else if (test[i]== 2){
                counter[2]=counter[2]+1;
            }
            else if (test[i]== 3){
                counter[3]=counter[3]+1;
            }
            else if (test[i]== 4){
                counter[4]=counter[4]+1;
            }
            else if (test[i]== 5){
                counter[5]=counter[5]+1;
            }
            else if (test[i]== 6){
                counter[6]=counter[6]+1;
            }
            else if (test[i]== 7){
                counter[7]=counter[7]+1;
            }
            else if (test[i]== 8){
                counter[8]=counter[8]+1;
            }
            else if (test[i]== 9){
               counter[9]=counter[9]+1;
            }
        }
    }
    for(j=0;j<counter.length;j++){
        if(counter[j] == 8){
            result =`Golden Number Price : ${initPrice + 100}`
            return result;
        }else if(counter[j] >= 2 && counter[j]  <= 4){
            result =`Silver Number Price : ${initPrice + 50}`
            return result;
        }
    }
     result =`Normal Number Price : ${initPrice}`
            return result;
}          

let n1 = '51456485';
let n2 = '88888888';
let n3 = '24031987';
let bd = '24031987';
let n4 = '12345678';
let n5 = '1234';


let t1 = getPrice(39, n1, bd);
let t2 = getPrice(39, n2, bd);
let t3 = getPrice(39, n3, bd);
let t4 = getPrice(39, n4, bd);
let t5 = getPrice(39, n5, bd); 

console.log(t1)
console.log(t2)
console.log(t3)
console.log(t4)
console.log(t5) 

 */


///////////////////////////////////////////////         Sasha's code           ///////////////////////////////////////////


function getPrice(initPrice, mobileNumber, userBirthDate){
    let result = 'Please enter a valid Mobile Number'
    if(mobileNumber.length != 8){
      return result
    }
    else if(mobileNumber.includes(userBirthDate)){
      result = `Platinium Number : ${initPrice + 200}`
      return result
    }
    let test = Array.from(mobileNumber)
    let counter = [0,0,0,0,0,0,0,0,0,0]
    for(i=0; i<test.length;i++){
      if(test[i] == 0){
            counter[0] = counter[0]+1
          }
          else  if(test[i] == 1){
            counter[1] = counter[1]+1
          }
          else  if(test[i] == 2){
            counter[2] = counter[2]+1
          }
          else  if(test[i] == 3){
            counter[3] = counter[3]+1
          }
          else  if(test[i] == 4){
            counter[4] = counter[4]+1
          }
          else  if(test[i] == 5){
            counter[5] = counter[5]+1
          }
          else  if(test[i] == 6){
            counter[6] = counter[6]+1
          }
          else  if(test[i] == 7){
            counter[7] = counter[7]+1
          }
          else  if(test[i] == 8){
            counter[8] = counter[8]+1
          }
          else  if(test[i] == 9){
            counter[9] = counter[9]+1
          }
    }
     console.log(counter)
    for (j=0; j<=counter.length; ){
            if(counter[j]==0){
            counter.splice(j,1);
            //console.log(counter)
            } else{j++}
        }
        console.log(counter)
        if(counter.length ==1){
        return result = `Golden Number Price :${initPrice + 100}`
        }
        else if(counter.length >=2 && counter.length<= 4){
            result = `Silver Number Price :${initPrice + 50}`
            return result
        }
    else{
        result = `Normal Number Price :${initPrice }`
        return result
    }
  }
  let n1 = '11115555'
  let n2 = '22345678'
  let n3 = '51456485'
  let n4 = '12345678'
  let n5 = '1254'
  let bd = '24031987'
  let t1 = getPrice(39, n1, bd)
  let t2 = getPrice(39, n2, bd)
  let t3 = getPrice(39, n3, bd)
  let t4 = getPrice(39, n4, bd)
  let t5 = getPrice(39, n5, bd)
  let t6 = getPrice(39, bd, bd)
  console.log(t1)
  console.log(t2)
  console.log(t3)
  console.log(t4)
  console.log(t5)
  console.log(t6)

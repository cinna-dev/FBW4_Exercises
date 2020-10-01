function calculateYears(principal, interest, tax, desired){
    let InterestGain;
    years=0;
if(principal === desired){
    return `${0}Years`;
}else{ 
do{
   InterestGain = principal * interest;
   InterestGain = InterestGain - InterestGain * tax;
   principal = principal + InterestGain;
   years++
 }while(principal <= desired)
} 
return `${years}Years`;
}
   console.log(calculateYears(1000, 0.05, 0.18, 1100))
      /*testing(calculateYears(1000,0.01625,0.18,1200), 14)
        testing(calculateYears(1000,0.05,0.18,1000), 0)*/
function describer(array){
    for(i=0; i<array.length; i++){
        if(array[i]%2 === 0){
        array[i] = '<br/> '+'This is Number ' + array[i] +' it is even'; 
        }
        else if(array[i]%3 === 0)
            {array[i] = '<br/> '+'This is Number ' + array[i] +' it is odd '+'and divedeable by 3'; }
        else if(array[i]%5 === 0)
            {array[i] = '<br/> '+'This is Number ' + array[i] +' it is odd '+'and divedeable by 5'; }
        else if(array[i]%7 === 0)
            {array[i] = '<br/> '+'This is Number ' + array[i] +' it is odd '+'and divedeable by 7'; }
        else{
            {array[i] = '<br/> '+'This is Number ' + array[i] +' it is odd '; }
        }    
}
}

let demo = [1,55,6,7,8,9,10,11,12,13,14,15];

describer(demo);

document.write(demo);

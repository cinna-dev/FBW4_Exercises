let food = ['Pizza','Kebab','Doener','Falafel','Kartoffelsalad','Briani']

for(let counter = 0; counter < food.length; counter++){
    console.log(food[counter])
    document.write(food[counter]+'<br>')     /* document.write = write in html */
}

/////////////////////////////////////////////////////////
let colors = ['red','blue','green','yellow','black']
let item = '#cc00ee'
colors.push(item)
document.write('<hr>')
for(i=0; i < colors.length; i++){
    document.write(colors[i]+ '<br>')
}

document.write('<hr>'); let div;
for(i=0; i<colors.length; i++){
    div="<div style='text-align:center;margin:0 auto;height:40px;color:white;width:"+i+5+"%;background:"+colors[i]+"'>" + colors[i]+ "</div>";
    document.write(div);

}

let car = {
    maximumSpeed : '220 km/h',
    color : 'blue',
    seatNumber : 2,
  
    carProperties : function(){
      console.log('this car is '+ this.color + ' and has ' + this.seatNumber + ' Seats and it has a maximum Speed of ' + this.maximumSpeed + '.')
    }
  }
  document.write(car.carProperties())
  
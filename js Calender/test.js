const daysOfMonth = ['So','Mo','Tu','We','Th','Fri','Sa'];
const ListOfMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']
let today = new Date()
//today = new Date('5.5.2020')
const daysInput = document.getElementById('days')
const monthInput = document.getElementById('month')
const yearsInput = document.getElementById('years')
const form = document.getElementById('form')
const button = document.querySelector('#btn')
const calender = document.getElementById('calender')
const reserved = document.getElementById('reserved')
const unorderdList = document.getElementById('unorderdList')
let days = 0;

reserved.addEventListener('click',reservedEvent)
calender.addEventListener('click', reserving)
function setDaySelector(currentday){
    while(daysInput.lastElementChild){
        daysInput.lastElementChild.remove()
    }
    let x = new Date(`${monthInput.value}-1-${yearsInput.value}`)
    let z = 0
     while (x.getMonth() === monthInput.value-1) {
        z++;
        x.setDate(x.getDate() + 1);
        const option = document.createElement('option');
          option.appendChild(document.createTextNode(z))
          option.value = z;
         if(currentday == z){
             option.setAttribute('selected', '')
         }
          daysInput.appendChild(option)
      } 
}
setDaySelector()

form.addEventListener('change',eventListener);
function eventListener(e){
    let daysInputVal = daysInput.value
    let monthInputVal = monthInput.value
    let yearsInputVal = yearsInput.value
    console.log(e.target)

     /* if(daysInput.value == z){
            const daysInput = document.getElementById('days')
            option.setAttribute('selected','')
          } */
    /* if(daysInputVal < 0 || daysInputVal> 31 || monthInputVal < 0 || monthInputVal> 12){

    } */
    
    today = new Date(`${monthInputVal}-${daysInputVal}-${yearsInputVal}`)
    document.querySelector('table').remove()
    if(e.target != daysInput){
      setDaySelector(daysInputVal)    
    }
    
    Calender()
    //e.preventDefault()
}
function Calender(){
    const table = document.createElement('table');
    table.className = 'table table-bordered  text-center'
    const tBody = document.createElement('tbody');
    table.appendChild(tBody)
    const tHead = document.createElement('thead');
    table.appendChild(tHead);
    table.appendChild(tBody);
    calender.appendChild(table);
    const trhead1 = document.createElement('tr')
    tHead.appendChild(trhead1)
    const trhead2 = document.createElement('tr')
    tHead.appendChild(trhead2)
    trhead1.appendChild(document.createElement('th')).appendChild(document.createTextNode(ListOfMonth[today.getMonth()] +' '+ today.getFullYear()))
    trhead1.firstElementChild.setAttribute('colspan',"7")
    for(val of daysOfMonth){
        const th = document.createElement('th')
        th.appendChild(document.createTextNode(val))
        trhead2.appendChild(th)
    }
    
    let firtsDayOfMonth = new Date(`${today.getMonth()+1}-1-${today.getFullYear()}`).getDay()
    firstDateOfMonth = new Date(`${today.getMonth()+1}-1-${today.getFullYear()}`)
    //console.log(firtsDayOfMonth ,firstDateOfMonth)
    days = 0;
    while (firstDateOfMonth.getMonth() === today.getMonth()) {
        days++;
        firstDateOfMonth.setDate(firstDateOfMonth.getDate() + 1);
      }

      const daysOfMonthCount = days + firtsDayOfMonth
      
      let firstoday = firtsDayOfMonth;
      weekcount = 0
      dayCountOfMonth = 0 ;
      let days2 = days + firtsDayOfMonth;
      for(weekcount; dayCountOfMonth<days2; ){
        dayCountOfWeek = 0;
        const tr = document.createElement('tr')
        tBody.appendChild(tr)
        for(dayCountOfWeek; dayCountOfWeek< 7;){
        const td = document.createElement('td')
        if(dayCountOfMonth >=  firstoday && dayCountOfMonth < daysOfMonthCount){
        td.appendChild(document.createTextNode(dayCountOfMonth - firstoday+1))
        td.value = dayCountOfMonth - firstoday+1;
        if(dayCountOfMonth - firstoday+1== today.getDate()){
            td.className = 'bg-success'
        }
        }else{
            td.appendChild(document.createTextNode(''))
        }
        tr.appendChild(td)
        dayCountOfWeek++ ;
        dayCountOfMonth++
        }
        weekcount++
    } 
      
}
Calender()

function reserving(e){
    const td = document.querySelectorAll('td')
    for(x of td){
        if(x == e.target && x.className != 'bg-danger' && e.target.value){
            x.className = 'bg-danger';
            if(occupiedDays.month == undefined){
              occupiedDays.month =   today.getMonth()
              if(occupiedDays.days.length == 0){
                  for(i=0;i<days;i++){
                occupiedDays.days.push(0)
                  }
              }             
            }
            occupiedDays.days[e.target.value-1]=1;
            
        }else if(x == e.target && x.className == 'bg-danger'){
            window.alert('this Day has been already occupied');
        }
    }
}

const occupiedDays = {
    month:undefined,
    days:[]
}

function reservedEvent(){
    const ul = document.createElement('ul')
    ul.className = 'list-group'
    unorderdList.appendChild(ul)
    let i = 1
    const getUl = document.querySelector('ul')
    console.log(getUl.children)
    while(getUl.children){
        getUl.children.remove()
    }
    for(x of occupiedDays.days){
        if(x == 1){
            console.log(x)
            const li = document.createElement('li')
            li.className = 'list-group-item'
            today = new Date(`${occupiedDays.month+1}-${i}-2020`)
            console.log(today.getDate())
            today =  `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`
            today = today.toString()
            console.log(typeof today)
            //today.remove('00:00:00 GMT+0100 (Central European Standard Time)')
            li.appendChild(document.createTextNode(today))
            ul.appendChild(li)
        }
        i++
    }
}
console.log(occupiedDays)
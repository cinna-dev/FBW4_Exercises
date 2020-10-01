/* appointment
days of week
mo - fr
2 shifts per days
applier person name
topic string whatever
freetime
return array 
build table */

function appointment(per){
    const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday']
    const table = document.createElement('table')
    table.className = 'table table-dark table-bordered text-center';
    const tBody = document.createElement('tbody')
    table.appendChild(tBody)
    document.body.appendChild(table)
    const tr1 = table.appendChild(document.createElement('tr'))
    const tr2 = table.appendChild(document.createElement('tr'))
    const tr3 = table.appendChild(document.createElement('tr'))
    weekdays.forEach(function(item){
        tr1.appendChild(document.createElement('th')).appendChild(document.createTextNode(item))
      
    })
    per.freeTimeAm.forEach(function(item){
        if(item){
            const td = document.createElement('td')
            td.appendChild(document.createTextNode('free'))
            td.className = 'bg-success'
            tr2.appendChild(td)
        }else{
            const td = document.createElement('td')
            td.appendChild(document.createTextNode(`occupied`))
            td.className = 'bg-danger'
            tr2.appendChild(td)
        }
    })
    per.freeTimePm.forEach(function(item){
        if(item){
            const td = document.createElement('td')
            td.appendChild(document.createTextNode('free'))
            td.className = 'bg-success'
            tr3.appendChild(td)
        }else{
            const td = document.createElement('td')
            td.appendChild(document.createTextNode('occupied'))
            td.className = 'bg-danger'
            tr3.appendChild(td)
        }
    })
}

const person = {
    name: 'Peter',
    freeTimeAm: [0,1,0,0,0],
    freeTimePm: [1,0,1,1,0]
}


appointment(person)



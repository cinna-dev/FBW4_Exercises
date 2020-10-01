const h1 = document.querySelector('h1')

const propertyValue = window.getComputedStyle(h1)
    .getPropertyValue('font-size')
//return "34pc"
console.log(propertyValue)
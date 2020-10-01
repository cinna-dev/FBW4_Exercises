const input = document.getElementById('input')
const focus = document.getElementById('btnFocus')
const blur = document.getElementById('btnBlur')
const status = document.getElementById('status')
console.log(focus)
focus.addEventListener('click',function(){
    input.focus()
    status.textContent = 'on Focus'
})
blur.addEventListener('click',function(){
    blur.focus()
    status.textContent = 'on Blur'
})

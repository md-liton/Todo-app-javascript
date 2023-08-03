let main = document.querySelector('.main')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let delet = document.querySelector('.delete')
let ul = document.querySelector('.ul')


btn.addEventListener('click',function(){
    let li = document.createElement('li')
    li.style.margin ='10px 0 0 0'
    let span = document.createElement('span')
    span.innerHTML='Delete'
    span.style.margin= '0 0 0 10px'
    span.style.background= 'red'
    span.style.borderRadius='5px'
    span.style.color= '#fff'
    span.style.padding= '5px'
    span.style.cursor= 'pointer'
    if(input.value == ''){
        alert('input a value')
    }else{
        li.innerHTML=input.value
        ul.appendChild(li)
        li.appendChild(span)
        input.value=''
    }
})

ul.addEventListener('click',function(e){
    if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
    }
})


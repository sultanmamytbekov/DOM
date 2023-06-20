


// const text = document.querySelector(`h1`)
// text.style.color = 'red'
// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseover', () => {
//     text.style.color = 'red'
// })
// btn.addEventListener('mouseleave' , () => {
//     text.style.color = ''
// })
// btn.style.width = '190px'
// btn.style.height = '50px'
// btn.style.borderRadius = '0px , 10px , 0px , 10px'
const img = document.querySelector('.img')
const text = document.querySelector('.blor')
const btn1 = document.querySelector('.btn1')
const lol = document.querySelector('.btn11')
const h1 = document.querySelector('.h1')


btn1.addEventListener('click', () => {
    text.style.display = 'none'
    text.style.transition = '1.5s'
})



lol.addEventListener('click', () => {
    // text.style.display = 'block'
    text.style.transition = '1s'
    text.style.transform = ' scale(1)'
    text.style.width = '100px'
    text.style.height = '100px'
    text.style.borderRadius = '50%'
    text.style.marginTop = '150px'
    h1.style.display = 'none'
})
lol.addEventListener('click',() => {
    lol.style.width = '197px'
    lol.style.height = '56px'
    lol.style.borderRadius = '9px 28px 1px 22px'
    lol.style.background = '#5959ff'
    lol.style.border = 'none'
    lol.style.color = 'gold'
    img.style.display = 'none'
    lol.style.transition = '1s'

})



h1.addEventListener('mouseover',() => {
    h1.style.color = 'red'
    h1.style.transition = '.5s'
})
h1.addEventListener('mouseleave', () => {
    h1.style.color =''
    h1.style.transition = '.5s'
})
h1.addEventListener('click',() => {
    img.style.display = 'block'
    img.style.transition = '1s'
    img.style.width = '50px'
    img.style.height = '50px'
    img.style.borderRadius = '50%'
})




text.addEventListener('mouseleave',() => {
    // text.style.display = 'none'
    text.style.transform = ' scale(0)'
    lol.style.width = '167px'
    lol.style.height = '56px'
    lol.style.background = 'darkblue'
    lol.style.borderRadius = '10px'
    lol.style.transition = '.5s'
    text.style.width = '0px'
    text.style.height = '0px'
    text.style.borderRadius = '50%'
    text.style.transition = '1.5s'

})
text.addEventListener('mouseover',() => {
    text.style.width = '650px'
    text.style.height = '550px'
    text.style.borderRadius = '20px'
    text.style.marginTop = '0px'
    h1.style.display = 'block'
})



img.addEventListener('mouseleave',() => {
    img.style.transition = '2s'
    img.style.width = '0px'
    img.style.height = '0px'
    img.style.borderRadius = '50%'

})
img.addEventListener('mouseover',() => {
    img.style.width = '600px'
    img.style.height = '230px'
    img.style.borderRadius = '10px'
})














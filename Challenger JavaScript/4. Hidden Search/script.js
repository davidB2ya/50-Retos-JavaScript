const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

console.log(btn)
console.log(search)
console.log(input)


btn.addEventListener('click',() => {
    search.classList.toggle('active')
})
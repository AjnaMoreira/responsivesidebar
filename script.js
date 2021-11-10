let sidebar = document.querySelector('.sidebar')
let close = document.querySelector('#btn')
let search = document.querySelector('.inputSearch')
let main = document.querySelector('.main')

close.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    main.classList.toggle('open')
})

search.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    main.classList.toggle('open')
})

const headerBurger = document.querySelector('.nav__block-button'),
headerList = document.querySelector('.nav__block-items')


headerBurger.addEventListener('click', () => {
    headerBurger.classList.add('active')
    headerList.classList.add('active')
})
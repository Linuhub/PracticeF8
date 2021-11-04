const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const left = $('.left')
const right = $('.right')

left.onmouseenter = function() {
    right.classList.add('left-active')
    left.classList.add('left-active')
}

left.onmouseleave = function() {
    right.classList.remove('left-active')
    left.classList.remove('left-active')
}

right.onmouseenter = function() {
    right.classList.add('right-active')
    left.classList.add('right-active')
}

right.onmouseleave = function() {
    right.classList.remove('right-active')
    left.classList.remove('right-active')
}


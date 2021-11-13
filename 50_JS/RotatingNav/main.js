const $ = document.querySelector.bind(document)

const circle = $('.circle')
const content = $('.content')
const nav = $('nav')

circle.onclick = function() {
    circle.classList.toggle('circle-active')
    content.classList.toggle('content-active')
    nav.classList.toggle('nav-active')

}
const $ = document.querySelector.bind(document)

const btnSearch = $('.btn')
const input = $('.input-search')

btnSearch.onclick = function() {
    input.classList.toggle('input-search--active')
}
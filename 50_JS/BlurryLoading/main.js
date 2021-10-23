const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cover = $('.cover')
const img = $('.image')

console.log(cover)
console.log(img)

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    cover.innerText = `${load}%`

    cover.style.opacity = `${(100-load)/100}`
    img.style.opacity = `${(load)/100}`
}
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const twitter = $('.twitter .number') 
const youtube = $('.youtube .number') 
const facebook = $('.facebook .number') 
console.log(twitter.innerText)
console.log(youtube.innerText)
console.log(facebook.innerText)

let load1 = 0
let load2 = 0
let load3 = 0
let int1 = setInterval(blurring1, 10)
let int2 = setInterval(blurring2, 10)
let int3 = setInterval(blurring3, 10)

function blurring1() {
    load1+=12000 / 100
    twitter.innerText = load1
    if(load1 === 12000) {
        clearInterval(int1)
    }
}
function blurring2() {
    load2+= 6000 / 100
    youtube.innerText = load2
    if(load2 === 6000) {
        clearInterval(int2)
    }
}
function blurring3() {
    load3+= 9000 / 100
    facebook.innerText = load3
    if(load3 === 9000) {
        clearInterval(int3)
    }
}
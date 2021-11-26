const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const audios = $$('audio')
const audioArray = [...audios]

const names = $$('button')
const nameArray = [...names]

nameArray.forEach(function(btn, i) {
    btn.onclick = function() {
        stop()
        audioArray[i].play()
    }
})

var stop = function() {
    audioArray.forEach(function(sound) {
        sound.pause()
        sound.currentTime = 0
    })
}
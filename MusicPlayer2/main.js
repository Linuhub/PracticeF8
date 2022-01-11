const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cd = $('.cd')
const playBtn = $('.play')
const pauseBtn = $('.pause')
const nextBtn = $('.next')
const prevBtn = $('.prev')
const subBox = $('.sub-box')
const progress = $('.progress')
const progressContainer = $('.progress-container')
const nameSong = $('.namesong')
const audio = $('#audio')
const app = {
    currentIndex: 0,
    isPlay: false,
    songs: [
        {
            name: 'Dangerous Woman',
            path: './assets/audio/DangerousWoman.mp3'
        },
        {
            name: 'Kiss Me More',
            path: './assets/audio/kissmemore.mp3'
        },
        {
            name: 'OST The Guardian',
            path: './assets/audio/NhinVayMaKhongPhaiVay.mp3'
        },
        {
            name: 'Love Takes Time',
            path: './assets/audio/LoveTakesTime.mp3'
        },
        {
            name: 'I Wish You Knew',
            path: './assets/audio/IWishYouKnew.mp3'
        }, 
        {
            name: 'All I Want For Christmas Is You',
            path: './assets/audio/AllIWantForChristmasIsYou.mp3'
        },
        {
            name: 'Melt Away',
            path: './assets/audio/MeltAway.mp3'
        }
    ],
    image: [
        {
            path: './assets/image/dangerouswoman.jpg'
        },
        {
            path: './assets/image/kissmemore.jpg'
        },
        {
            path: './assets/image/nhinvaymakhongphaivay.jpg'
        }, 
        {
            path: './assets/image/MooMap.jpg'
        }, 
        {
            path: './assets/image/MooMap.jpg'
        }, 
        {
            path: './assets/image/MooMap.jpg'
        }, 
        {
            path: './assets/image/MooMap.jpg'
        }
    ],
    handleEvents: function() {
        const _this = this      
        // Nạp audio + cd
        const addAudio = function() {
            audio.src = _this.songs[_this.currentIndex].path
            cd.style.backgroundImage = `url(${_this.image[_this.currentIndex].path})`
            nameSong.innerHTML = `${_this.songs[_this.currentIndex].name}`
        }

        addAudio()

        // Ấn play
        playBtn.onclick = function() {
            pauseBtn.style.display = 'inline-block'
            this.style.display = 'none'
            audio.play()
            cd.classList.add('rotate')
            subBox.classList.add('sub-box-play')
        }

        // Ấn pause
        pauseBtn.onclick = function() {
            playBtn.style.display = 'inline-block'
            this.style.display = 'none'
            audio.pause()
            cd.classList.remove('rotate')
            subBox.classList.remove('sub-box-play')
        }

        // Ấn next 
        nextBtn.onclick = function() {
            _this.currentIndex++
            console.log(_this.currentIndex)
            if (_this.currentIndex >= _this.songs.length) {
                _this.currentIndex = 0
            }
            addAudio()
            playBtn.click()
        }

        // Ấn prev 
        prevBtn.onclick = function() {
            _this.currentIndex--
            console.log(_this.currentIndex)
            if (_this.currentIndex < 0) {
                _this.currentIndex = _this.songs.length - 1
            }
            addAudio()
            playBtn.click()
        }

        // Thanh progress chạy
        audio.ontimeupdate = function() {
            progress.style.width = `${audio.currentTime*100/audio.duration}%`
        }
        
        console.log(cd.rotate)
        // Hết bài tự next 
        audio.onended = function() {
            nextBtn.click()
        }

        // Tua
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;

            audio.currentTime = (clickX / width) * duration;
        }

        progressContainer.addEventListener('click', setProgress)
        
        
    },
    start: function() {
        this.handleEvents()
    }
}

app.start()

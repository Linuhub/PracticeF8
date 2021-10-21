const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const prevBtn = $('#prev')
const nextBtn = $('#next')
const progress = $('#progress')
const progressSteps = $$('.progress-step')

const app = {
    currentStep: 1,
    isPrev: false,
    isNext: true
}

nextBtn.onclick = function() {
    if (app.currentStep < 4) {
        progress.style.width = `${app.currentStep*33.333}%`
        app.currentStep ++
        progressSteps[app.currentStep-1].classList.add('active')
    }
    if (app.currentStep === 2) {
        app.isPrev = true
        prevBtn.classList.add('active')
    }
    if (app.currentStep === 4) {
        app.nextBtn = false
        nextBtn.classList.remove('active')
    }
}



prevBtn.onclick = function() {
    if (app.currentStep > 1) {
        progress.style.width = `${(app.currentStep-2)*33.333}%`
        app.currentStep --
        progressSteps[app.currentStep].classList.remove('active')
    }
    if (app.currentStep === 3) {
        app.nextBtn = true
        nextBtn.classList.add('active')
    }
    if (app.currentStep === 1) {
        app.prevBtn = false
        prevBtn.classList.remove('active')
    }
}

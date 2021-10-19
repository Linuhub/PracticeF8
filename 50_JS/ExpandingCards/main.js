const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const panels = $$('.panel')
panels.forEach(function(panel) {
    panel.onclick = function() {
        panels.forEach(function(item) {
            if (item.classList.contains('active'))
                item.classList.remove('active')
        })

        this.classList.add('active')
    }
})
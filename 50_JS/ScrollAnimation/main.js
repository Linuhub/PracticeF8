const boxes = document.querySelectorAll('.rectangle')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const heightNumber = window.innerHeight * 4 / 5
    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < heightNumber) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
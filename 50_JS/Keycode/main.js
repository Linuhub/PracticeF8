const container = document.querySelector('.container')

window.addEventListener('keydown', function(e) {
    container.innerHTML = `
    <div class="small-container">
        ${e.key}
        <span>eventkey</span>
    </div>
    <div class="small-container">
        ${e.keyCode}    
        <span>event.keycode</span>
    </div>
    <div class="small-container">
        ${e.code}
        <span>event.code</span>
    </div>
    `
})

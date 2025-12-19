addEventListener('mousemove', function(elem) {
    console.log(elem.clientX, elem.clientY)
    document.body.style.setProperty('--x',elem.clientX + 'px')
    document.body.style.setProperty('--y', elem.clientY + 'px')
})
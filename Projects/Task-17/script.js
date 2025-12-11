var img = document.querySelector('img');
var heart = document.querySelector('#heart');

img.addEventListener('dblclick', function() {
    heart.style.opacity = 1;
    heart.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";
    setTimeout(function() {
        console.log('chal gya')
            heart.style.transform = "translate(-50%,-500%) scale(1) rotate(0deg)";
     }, 1000)
    console.log("clicked")
})
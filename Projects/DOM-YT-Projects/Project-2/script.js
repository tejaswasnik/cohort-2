var cursor = document.querySelector('.cursor');
var main = document.querySelector('main');
main.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + 'px';
})
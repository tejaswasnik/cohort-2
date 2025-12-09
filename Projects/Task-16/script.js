var main = document.querySelector("main");
var btn = document.querySelector("button");
var inner = document.querySelector(".inner");
var h1 = document.querySelector("h1");
var a = 0;
btn.addEventListener("click", function () {
  var num = 50 + Math.floor(Math.random() * 100);
  var x = setInterval(function () {
    a++;
    inner.style.width = a + "%";
    h1.innerHTML = a + "%";
    console.log(a)
  },1);
  setTimeout(function () {
    clearInterval(x);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
  }, 1525);
  console.log(num);
  btn.style.pointerEvents = "none";
});
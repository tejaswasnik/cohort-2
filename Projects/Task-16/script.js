var main = document.querySelector("main");
var btn = document.querySelector("button");
var inner = document.querySelector(".inner");
var h1 = document.querySelector("h1");
var a = 0;

btn.addEventListener("click", function () {
  var x = setInterval(function () {
    a++;
    inner.style.width = a + "%";
    h1.innerHTML = a + "%";
    if (a === 100) {
      clearInterval(x);
      btn.innerHTML = "Downloaded";
      btn.style.opacity = 0.5;
    }
  }, 10);

  btn.style.pointerEvents = "none";
});

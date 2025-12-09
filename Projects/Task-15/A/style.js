var btn = document.querySelector("button");
var main = document.querySelector("main");
btn.addEventListener("click", function () {
  var rotate = Math.floor(Math.random() * 360);

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var div = document.createElement("div");
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
  div.style.width = Math.random() * 300 + "px";
  div.style.height = Math.random() * 300 + "px";
  div.style.position = "absolute";
  div.style.top = Math.random() * 100 + "%";
  div.style.left = Math.random() * 100 + "%";
  div.style.transform = `rotate(${rotate}deg)`;

  main.appendChild(div);
  console.log(div);
});

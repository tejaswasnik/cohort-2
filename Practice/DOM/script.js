// DOM Document Object Model
// Frontend ki JS

// DOM has 4 Pillars
// - Selection of an Element
// - Changing HTML
// - Changing CSS
// - Event Listeners

var h1 = document.querySelector("h1")
h1.innerHTML = "Changed HTML";
h1.style.color = `red`;
var h2 = document.querySelectorAll("h2")
h2.innerHTML = "Changed"
var box = document.querySelector(".box")
box.innerHTML = "Heyyyy"
box.style.backgroundColor = "gold";
h1.addEventListener("click", function() {
    h1.innerHTML = "You Clicked"
})

document.getElementById("hero")
document.getElementsByClassName("elem")
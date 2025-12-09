var quotes = [
  "Success is not final, failure is not fatal.",
  "Dream big, start small, act now.",
  "Doubt kills more dreams than failure ever will.",
  "The harder you work, the luckier you get.",
  "Believe you can, and you're halfway there.",
  "Discipline is choosing what you want most over what you want now.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Don’t stop when you’re tired, stop when you’re done.",
  "Success is built on consistency, not motivation.",
  "Great things never come from comfort zones.",
  "You become what you repeatedly do.",
  "Every day is a chance to get better.",
  "If it matters to you, you’ll find a way.",
  "Work hard in silence, let success make the noise.",
  "Life is 10% what happens to you and 90% how you react.",
  "Focus on progress, not perfection.",
  "Your future is created by what you do today.",
  "Push yourself, because no one else will.",
  "The best view comes after the hardest climb."
];

var btn = document.querySelector(`button`);
var main = document.querySelector(`main`);

btn.addEventListener('click', function() {
    var rotate = Math.floor(Math.random() * 360);
    var h1 = document.createElement('h1');
    var index = Math.floor(Math.random() * quotes.length);
    h1.innerText = quotes[index];
    h1.style.color = "white";
    h1.style.position = "absolute";
    h1.style.top = Math.random() * 100 + "%";
    h1.style.left = Math.random() * 100 + "%";
    h1.style.transform = `rotate(${rotate}deg)`
    main.appendChild(h1);
    console.log(h1)
})
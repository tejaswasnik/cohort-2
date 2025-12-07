var h1 = document.querySelector("h1");
var inc = document.querySelector("#inc");
var dec = document.querySelector("#dec");
var reset = document.querySelector("#reset")
let a = 0;
inc.addEventListener("click", function(){
    a++;
    h1.innerHTML = a;
})

dec.addEventListener("click", function(){
    a--;
    h1.innerHTML = a;
})

reset.addEventListener("click", function() {
    a = 0;
    h1.innerHTML = a;
})
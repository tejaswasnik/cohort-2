var istatus = document.querySelector("h3");
var btn = document.querySelector(".add-friend");
var check = 0;
btn.addEventListener("click", function () {
  if ((check === 0)) {
    btn.innerHTML = "Remove Friend";
    istatus.innerHTML = "Friends";
    btn.style.backgroundColor = "green";
    check = 1;
  } else {
    btn.innerHTML = "Add Friend";
    istatus.innerHTML = "Stranger";
    btn.style.backgroundColor = "red";
    check = 0;
  }
});

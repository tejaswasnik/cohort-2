var allBtns = document.querySelectorAll("button");

allBtns.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (elem.innerHTML == "Add Friend") {
      elem.innerHTML = "Remove Friend";
    } else {
      elem.innerHTML = "Add Friend";
    }
  });
});

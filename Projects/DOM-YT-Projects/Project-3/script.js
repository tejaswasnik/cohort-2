const instagramUsers = [
  {
    username: "alex_roy",
    profilePic: "https://i.pravatar.cc/150?img=11", // square profile
    story: "https://picsum.photos/400/700?random=1", // portrait (9:16 style)
  },
  {
    username: "neha_sharma",
    profilePic: "https://i.pravatar.cc/150?img=32",
    story: "https://picsum.photos/400/700?random=2",
  },
  {
    username: "rahul_verma",
    profilePic: "https://i.pravatar.cc/150?img=45",
    story: "https://picsum.photos/400/700?random=3",
  },
  {
    username: "fit_with_adi",
    profilePic: "https://i.pravatar.cc/150?img=56",
    story: "https://picsum.photos/400/700?random=4",
  },
  {
    username: "travel_sonia",
    profilePic: "https://i.pravatar.cc/150?img=68",
    story: "https://picsum.photos/400/700?random=5",
  },
];
var clutter = "";
instagramUsers.forEach(function (elem, idx) {
  clutter += `                <div class="story">
<img src="${elem.profilePic}" alt="dp" id = "${idx}" class = "dp">
                </div>`;
});
document.querySelector(".stories").innerHTML = clutter;
document.querySelector(".stories").addEventListener('click', function(dets) {
    document.querySelector(".story-open").style.display = "block";
    document.querySelector('.story-open').style.backgroundImage = `url(${instagramUsers[dets.target.id].story})`;

    setTimeout(function() {
        document.querySelector(".story-open").style.display = "none";
    }, 3000);
})
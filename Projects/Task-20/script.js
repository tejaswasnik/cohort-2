const reels = [
  {
    reelUrl: "https://assets.mixkit.co/videos/49876/49876-720.mp4",
    username: "travelwithaarav",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    caption: "Mountains cure everything 🌄",
    likesCount: 12450,
    commentsCount: 342,
    shareCount: 189,
    isLiked: false,
    isFollowed: true,
  },
  {
    reelUrl: "https://assets.mixkit.co/videos/49858/49858-720.mp4",
    username: "fitbyneha",
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    caption: "No excuses today 💪",
    likesCount: 9821,
    commentsCount: 210,
    shareCount: 95,
    isLiked: true,
    isFollowed: false,
  },
  {
    reelUrl: "https://assets.mixkit.co/videos/34564/34564-720.mp4",
    username: "streetfoodindia",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    caption: "Street food heaven 🤤🔥",
    likesCount: 23110,
    commentsCount: 1240,
    shareCount: 640,
    isLiked: false,
    isFollowed: true,
  },
];

var allReels = document.querySelector(".all-reels");

function AddData() {
  sum = "";
  reels.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="reel">
        <video
        autoplay
        muted
        loop
        src="${elem.reelUrl}"
        ></video>
        <div class="bottom">
        <div class="profile">
        <img src="${elem.profilePic}" alt="profilepic" />
        <p>${elem.username}</p>
        <button id = "${idx}" class="follow">${
        elem.isFollowed ? "Unfollow" : "Follow"
      }</button>
        </div>
        <div class="caption">
        <h3>${elem.caption}</h3>
        </div>
        </div>
        <div class="interactions">
        <div id = "${idx}" class="like">
        ${
          elem.isLiked
            ? `<i id = ${idx} class="ri-heart-3-fill like"></i>`
            : `<i id = ${idx} class="ri-heart-3-line like"></i>`
        }
        <p>${elem.likesCount}</p>
        </div>
        <div class="comment">
        <i class="ri-chat-3-line"></i>
        <p>${elem.commentsCount}</p>
        </div>
        <div class="share">
        <i class="ri-share-forward-line"></i>
        <p>${elem.shareCount}</p>
        </div>
        <div class="more">
        <i class="ri-more-2-line"></i>
        </div>
        </div>
        </div>`;
  });

  allReels.innerHTML = sum;
}

AddData();

allReels.addEventListener("click", function (dets) {
  if ((dets.target.className = "like")) {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likesCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likesCount--;
      reels[dets.target.id].isLiked = false;
    }
  }
  if ((dets.target.className = "follow")) {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
  }
  AddData();
});

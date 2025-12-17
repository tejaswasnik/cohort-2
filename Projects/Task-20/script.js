const reels = [
  {
    reelUrl: "https://www.pexels.com/download/video/2785536/",
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
    reelUrl: "https://www.pexels.com/download/video/3959544/",
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
    reelUrl: "https://www.pexels.com/download/video/4057322/",
    username: "streetfoodindia",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    caption: "Street food heaven 🤤🔥",
    likesCount: 23110,
    commentsCount: 1240,
    shareCount: 640,
    isLiked: false,
    isFollowed: true,
  },
  {
    reelUrl: "https://www.pexels.com/download/video/5595352/",
    username: "codingdaily",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    caption: "Debugging at 2 AM 👨‍💻",
    likesCount: 6789,
    commentsCount: 145,
    shareCount: 60,
    isLiked: true,
    isFollowed: true,
  },
  {
    reelUrl: "https://www.pexels.com/download/video/4057154/",
    username: "aestheticvibes",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    caption: "Calm vibes only ✨",
    likesCount: 15890,
    commentsCount: 412,
    shareCount: 276,
    isLiked: false,
    isFollowed: false,
  },
  {
    reelUrl: "https://www.pexels.com/download/video/4434136/",
    username: "urbanrider",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    caption: "Late night city rides 🏍️",
    likesCount: 20455,
    commentsCount: 530,
    shareCount: 410,
    isLiked: true,
    isFollowed: true,
  },
  {
    reelUrl: "https://www.pexels.com/download/video/4115283/",
    username: "naturetones",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    caption: "Nature never disappoints 🍃",
    likesCount: 11234,
    commentsCount: 198,
    shareCount: 142,
    isLiked: false,
    isFollowed: false,
  },
  {
    reelUrl: "https://www.pexels.com/download/video/4038501/",
    username: "coffeediaries",
    profilePic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    caption: "Morning coffee ritual ☕",
    likesCount: 8450,
    commentsCount: 176,
    shareCount: 80,
    isLiked: true,
    isFollowed: true,
  },
];
var sum = "";
reels.forEach(function (elem) {
  sum =
    sum +
    `<div class="reel">
            <video autoplay loop muted src="${elem.reelUrl}"></video>
          <div class="interactions">
            <div class="like">
            ${
              elem.isLiked
                ? '<i class="love ri-heart-3-fill"></i>'
                : '<i class="ri-heart-3-line"></i>'
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
            <div class="menu">
              <i class="ri-more-2-line"></i>
            </div>
          </div>
          <div class="bottom">
            <div class="profile">
              <img
                src="${elem.profilePic}"
                alt="profilepic"
              />
              <p>${elem.username}</p>
              <button>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
            </div>
            <div class="caption">
              <h1>${elem.caption}</h1>
            </div>
          </div>
        </div>`;
});

var allReels = document.querySelector(".allreels");

allReels.innerHTML = sum;

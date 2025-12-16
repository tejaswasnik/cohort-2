var audios = [
  { key: 28, file: "keys/28.mp3" },
  { key: 29, file: "keys/29.mp3" },
  { key: 30, file: "keys/30.mp3" },
  { key: 31, file: "keys/31.mp3" },
  { key: 32, file: "keys/32.mp3" },
  { key: 33, file: "keys/33.mp3" },
  { key: 34, file: "keys/34.mp3" },
  { key: 35, file: "keys/35.mp3" },
  { key: 36, file: "keys/36.mp3" },
  { key: 37, file: "keys/37.mp3" },
  { key: 38, file: "keys/38.mp3" },
  { key: 39, file: "keys/39.mp3" },
];
var keyid = [
  key28,
  key29,
  key30,
  key31,
  key32,
  key33,
  key34,
  key35,
  key36,
  key37,
  key38,
  key39,
];

var key28 = document.getElementById("28");
var key29 = document.getElementById("29");
var key30 = document.getElementById("30");
var key31 = document.getElementById("31");
var key32 = document.getElementById("32");
var key33 = document.getElementById("33");
var key34 = document.getElementById("34");
var key35 = document.getElementById("35");
var key36 = document.getElementById("36");
var key37 = document.getElementById("37");
var key38 = document.getElementById("38");
var key39 = document.getElementById("39");
key28.addEventListener("click", function () {
  audio.src = `${audios[0].file}`;
  audio.play();
  keyid[0].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[0].style.transform = `scale(1)`;
  }, 100);
});
key29.addEventListener("click", function () {
  audio.src = `${audios[1].file}`;
  audio.play();
  keyid[1].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[1].style.transform = `scale(1)`;
  }, 100);
});
key30.addEventListener("click", function () {
  audio.src = `${audios[2].file}`;
  audio.play();
  keyid[2].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[2].style.transform = `scale(1)`;
  }, 100);
});
key31.addEventListener("click", function () {
  audio.src = `${audios[3].file}`;
  audio.play();
  keyid[3].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[3].style.transform = `scale(1)`;
  }, 100);
});
key32.addEventListener("click", function () {
  audio.src = `${audios[4].file}`;
  audio.play();
  keyid[4].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[4].style.transform = `scale(1)`;
  }, 100);
});
key33.addEventListener("click", function () {
  audio.src = `${audios[5].file}`;
  audio.play();
  keyid[5].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[5].style.transform = `scale(1)`;
  }, 100);
});
key34.addEventListener("click", function () {
  audio.src = `${audios[6].file}`;
  audio.play();
  keyid[6].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[6].style.transform = `scale(1)`;
  }, 100);
});
key35.addEventListener("click", function () {
  audio.src = `${audios[7].file}`;
  audio.play();
  keyid[7].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[7].style.transform = `scale(1)`;
  }, 100);
});
key36.addEventListener("click", function () {
  audio.src = `${audios[8].file}`;
  audio.play();
  keyid[8].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[8].style.transform = `scale(1)`;
  }, 100);
});
key37.addEventListener("click", function () {
  audio.src = `${audios[9].file}`;
  audio.play();
  keyid[9].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[9].style.transform = `scale(1)`;
  }, 100);
});
key38.addEventListener("click", function () {
  audio.src = `${audios[10].file}`;
  audio.play();
  keyid[10].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[10].style.transform = `scale(1)`;
  }, 100);
});
key39.addEventListener("click", function () {
  audio.src = `${audios[11].file}`;
  audio.play();
  keyid[11].style.transform = `scale(0.9)`;
  setTimeout(() => {
    keyid[11].style.transform = `scale(1)`;
  }, 100);
});
var audio = new Audio(`${audios[0].file}`);
document.addEventListener("keydown", function (dets) {
  if (dets.code === `KeyA`) {
    audio.src = `${audios[0].file}`;
    audio.play();
    keyid[0].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[0].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyS`) {
    audio.src = `${audios[1].file}`;
    audio.play();
    keyid[1].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[1].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyD`) {
    audio.src = `${audios[2].file}`;
    audio.play();
    keyid[2].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[2].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyF`) {
    audio.src = `${audios[3].file}`;
    audio.play();
    keyid[3].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[3].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyG`) {
    audio.src = `${audios[4].file}`;
    audio.play();
    keyid[4].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[4].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyH`) {
    audio.src = `${audios[5].file}`;
    audio.play();
    keyid[5].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[5].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyJ`) {
    audio.src = `${audios[6].file}`;
    audio.play();
    keyid[6].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[6].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyW`) {
    audio.src = `${audios[7].file}`;
    audio.play();
    keyid[7].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[7].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyE`) {
    audio.src = `${audios[8].file}`;
    audio.play();
    keyid[8].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[8].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyT`) {
    audio.src = `${audios[9].file}`;
    audio.play();
    keyid[9].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[9].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyY`) {
    audio.src = `${audios[10].file}`;
    audio.play();
    keyid[10].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[10].style.transform = `scale(1)`;
    }, 100);
  } else if (dets.code === `KeyU`) {
    audio.src = `${audios[11].file}`;
    audio.play();
    keyid[11].style.transform = `scale(0.9)`;
    setTimeout(() => {
      keyid[11].style.transform = `scale(1)`;
    }, 100);
  }
});

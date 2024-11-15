// const helloButton = document.querySelector(".hello");

// 이벤트 추가하는 방법

// 1. addEventListener 사용
// helloButton.addEventListener("click", () => {
//   alert("오늘은 일요일");
// });

// // 2. onclick 사용
// const hello = () => {
//   alert("오늘은 일요일");
// };

// 버튼이 😊 누르면 😒

// const emojiBtn = () => {
//   const emoji = document.querySelector(".emoji");
//   emoji.innerText = emoji.innerText == "😒" ? "😊" : "😒";
// };

// 1. addEventListener

// const box = document.querySelector("#box");

// const big = document.querySelector("#big");
// big.addEventListener("click", () => {
//   box.style.width = "200px";
//   box.style.height = "200px";
// });

// const small = document.querySelector("#small");
// small.addEventListener("click", () => {
//   box.style.width = "100px";
//   box.style.height = "100px";
// });

// const sky = document.querySelector("#sky");
// sky.addEventListener("click", () => {
//   box.style.backgroundColor = "skyblue";
// });

// const pink = document.querySelector("#pink");
// pink.addEventListener("click", () => {
//   box.style.backgroundColor = "pink";
// });

// 2. onclick

const box = document.querySelector("#box");

const big = () => {
  box.style.width = "200px";
  box.style.height = "200px";
};

const small = () => {
  box.style.width = "100px";
  box.style.height = "100px";
};

const sky = () => {
  box.style.backgroundColor = "skyblue";
};

const pink = () => {
  box.style.backgroundColor = "pink";
};

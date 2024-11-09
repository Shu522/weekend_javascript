//JS로 HTML 다루기

//document[html]
//1. js로 태그 만들기
const btn = document.createElement("button");
btn.innerText = "메론빵";
document.body.appendChild(btn);

// div 태그 만들고
// 안에는 좋아하는 커피 넣고
// 바디 태그에 달아서 넣기

const coffee = document.createElement("div");
coffee.innerText = "아메리카노";
document.body.appendChild(coffee);

// 2.
// 유저에게 원하는 태그와 내용을 한번에 입력받고
// 바디태그에 나타내기

// const tag = prompt("태그 입력");
// const content = prompt("내용 입력");

// const user = document.createElement(tag);
// user.innerText = content;
// document.body.appendChild(user);

// const input = prompt("태그와 내용 입력");
// const arr = input.split(" ");
// const tag = document.createElement(arr[0]);

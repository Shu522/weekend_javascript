// const arr = [1, 2, 3, 4, 5];
// const plusThree = (a) => a + 3;
// // const returnTen = (a) => 10; -> 축약 가능
// arr.map(plusThree); // 각각 3더하기
// arr.map((a) => 10); // 모두 10으로 바꾸기 -> 축약 가능

//각각 2배
//각각 제곱
// 홀수면 +10, 짝수면 -10 해주기
// 3이상이면 +3, 아니면 -3

arr.map((a) => a * 2);
arr.map((a) => a ** 2);
arr.map((a) => (a % 2 == 1 ? a + 10 : a - 10));
arr.map((a) => (a >= 3 ? a + 3 : a - 3));

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];

// 문자의 길이가 5글자 이하이면 모두 대문자화 해서 바꾸기
// 그게 아니면 (6글자 이상)'과일 이모지'

fruits.map((a) => (a.lenght <= 5 ? a.toUpperCase() : "이모지"));

// some *  every
const arr1 = [1, 3, 5, 7, 9];

// 1. 과일 리스트에서 a or e가 모두 포함하는지 확인하는 로직 만들기

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];

fruits.every((x) => x.includes("a") || x.includes("e"));

// 2. 과일 리스트에서 글자가 모두 10글자 이하인지 확인하는 로직 만들기

fruits.every((x) => x.lenght <= 10);

// 유저에게 아무 영단어를 입력받고
// aeiou (모음)이 들어갔는지 안들어갔는지 확인하는 로직 만들기

const c = prompt("영단어");

const b = c.split("");
const d = "aeiou".split("");

b.some((x) => d.some((y) => y == x));

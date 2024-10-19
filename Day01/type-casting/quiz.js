//1. 유저에게 첫 번째 숫자, 두 번째 숫자를 입력 받고
// 두 수의 합을 콘솔로그로 나타내기

const first = prompt("첫 번째 숫자");
const second = prompt("두 번째 숫자");
console.log(`두 수의 합은: ${Number(first) + Number(second)}`);

//2. 유저에게 나이를 물어보고, 태어냔 년도
//콘솔로그로 나타내기

const age = prompt("나이?");
console.log(`태어난 년도는 ${2025 - Number(age)}`);

//3. 유저에게 한변의 길이를 입력 받고, 정사각형의 넓이 나타내기

const a = prompt("한 변의 길이");
console.log(`정사각형의 넓이: ${Number(a * a)}`);

//4. 유저에게 밑변과 높이를 입력 받고, 정삼각형의 넓이 나타내기

const b = prompt("밑변");
const c = prompt("높이");
console.log(`정삼각형의 넓이는 ${(Number(b) * Number(c)) / 2}`);

//5. 유저에게 반지름을 입력 받고, 원의 넓이와 둘레 나타내기

const d = prompt("반지름");
console.log(
  `원의 넓이는 ${Number(d) * Number(d) * 3.14} 그리고 원의 둘레는 ${
    2 * 3.14 * Number(d)
  })`
);

//6. 유저에게 일본 여행 갈 여비를 엔화로 바꾸기
//ex) 1000000 -> 109170엔 환전

const e = Number(prompt("일본 여비"));
const yen = 0.11 / 1;
console.log(`엔화: ${e * yen}`);

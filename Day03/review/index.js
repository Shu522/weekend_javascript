// 1. prompt로 유저에게 정수를 입력받고, 양수 or 0 or 음수를 알려주는 프로그램

const num = Number(prompt("정수 입력"));
if (num > 0) {
  console.log(`양수`);
} else if (num == 0) {
  console.log(`0`);
} else {
  console.log(`음수`);
}

// 2. prompt로 유저에게 키와 몸무게를 입력받고, bmi지수에 따라서 결과 나타내기
// ex) 173 85 -> 비만

const t = Number(prompt("키 (m)"));
const b = Number(prompt("몸무게 (kg)"));

const total = (b / t) * t;

if (total < 18.5) {
  console.log("저체중");
} else if (18.5 <= total < 25) {
  console.log("정상체중");
} else if (25 <= total < 30) {
  console.log("과체중");
} else if (30 <= total) {
  console.log("비만");
}

// 3. prompt로 유저에게 태어난 년도를 입력받고, 띠 나타내기
// ex) 2000 -> 용띠, 2005 -> 닭띠

const year = Number(prompt("태어난 년도"));
const zo = year % 12;
const zoAnimal = {
  0: "원숭이",
  1: "닭",
  2: "개",
  3: "돼지",
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",
  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
};
console.log(zoAnimal[zo]);

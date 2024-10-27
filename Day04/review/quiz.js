// cgv 프롬포트 프로그램

// 영화: [보통의 가족, 베놈, 베테랑2, 와일드 로봇, 대도시의 사랑법]
// 가격: 12000

// 스낵류: [팝콘, 카라멜팝콘, 치즈팝콘, 나쵸, 오징어구이]
// 팝콘: 6000, 스낵: 4000

// 음료류: [콜라, 제로콜라, 스프라이트, 제로스프라이트]
// 콜라류: 3000, 사이다류: 2000

// 구매하신 제품: 영화[~~~], 스낵[~~~~], 음료[~~~]
// 총 가격: ~~~입니다.
const movie = [
  "보통의 가족",
  "베놈",
  "베테랑2",
  "와일드 로봇",
  "대도스이 사랑법",
];
const moviePrice = 12000;

const snack = ["팝콘", "카라멜팝콘", "치즈팝콘", "나쵸", "오징어구이"];

const drink = ["콜라", "제로콜라", "스프라이트", "제로스프라이트"];

const selectedMovie = Number(prompt(movie + "번호 입력"));
const selectedSnack = Number(prompt(snack + "번호 입력"));
const selectedDrink = Number(prompt(drink + "번호 입력"));

const deterSnackPrice = (snack) => {
  return snack.includes("팝콘") ? 6000 : 4000;
};

const deterDrinkPrice = (drink) => {
  return drink.includes("콜라") ? 3000 : 2000;
};

console.log(
  `구매하신 제품: 영화:${movie[selectedMovie]}, 스낵:${snack[selectedSnack]}, 음료:${drink[selectedDrink]}`
);
console.log(
  `총 가격: ${
    12000 +
    deterSnackPrice(snack[selectedSnack]) +
    deterDrinkPrice(drink[selectedDrink])
  }입니다.`
);

// function movie(movieName) {
//   return movieName;
// };

// function snack(snackName) {
//     return snackName;
// };

// function drink(drinkName) {
//     return drinkName;
// };

// function total(totalPrice) {

// }

// console.log(`구매하신 제품: 영화[~~~], 스낵[~~~~], 음료[~~~]${}`)

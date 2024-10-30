// 1. 엔화를 입력을 했을 때, 900보다 낮으면 "사야함" 높으면 "팔아야함"

function buy(money) {
  return money >= 900 ? "팔아야함" : "사야함";
}

// 2. 두 정수를 입력 했을 때, 높은 값을 돌려주는 함수 만들기

function moreBigger(a, b) {
  return a > b ? a : b;
}

// 3. 커피메뉴가 [아메리카노, 라떼, 바닐라, 모카]가 있다고 가정할 때,
// 함수에 커피메뉴 번호와 갯수를 입력받고
// ~~~커피와 ~갯수 주문완료 돌려주는 함수

function coffee(num, count) {
  const menu = ["아메리카노", "라떼", "바닐라", "모카"];
  return `${menu[num]}커피와 ${count} 갯수 주문완료`;
}

const num = Number(prompt("커피메뉴번호 입력"));
const countCoffee = Number(prompt("커피 갯수 입력"));

console.log(num, countCoffee);

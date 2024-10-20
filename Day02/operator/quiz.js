// 두 정수를 유저에게 입력 받고, 더 큰 숫자를 알럿으로 나타내기

// const a = Number(prompt("첫 번째 정수"));
// const b = Number(prompt("두 번째 정수"));

// alert(a > b ? a : b);

// 1. 도넛 구매 갯수를 입력, 도넛 가격 입력
// 10개 이상이면 10%할인 , 20개 이상이면 20%할인
//콘솔로 나타내기

const donut = parseInt(prompt("도넛 구매 갯수"));
const price = parseFloat(prompt("가격"));
const totalprice = donut * price;

const under10 = donut < 10;
const over10 = 10 <= donut && donut < 20;
const over20 = 20 <= donut;

under10 && alert(`총 금액:${totalprice}`);
over10 && alert(`총 금액:${totalprice * 0.9}`);
over20 && alert(`총 금액:${totalprice * 0.8}`);

// 2. 정수를 입력해서 홀수인지 짝수인지 알려주기
// 정수를 입력하면 콘솔로그 ~~은 홀수/짝수 입니다

const num = Number(prompt("정수 입력"));
const result = num % 2 === 1 ? "홀수" : "짝수";
alert(`${num}은 ${result} 입니다`);

// 3.

// 1. 유저에게 운동 3개를 물어보고, 콘솔로 1번 운동 -> 2번 -> 3번

const ex = prompt("1운동");
const exe = prompt("2운동");
const exer = prompt("3운동");
console.log(`${ex} -> ${exe} -> ${exer}`);

// 2. 두 정수를 m,n 입력 받고, m의 n제곱의 결과를 콘솔로 나타내기

const num = Number(prompt("정수m"));
const numn = Number(prompt("정수n"));
console.log(`${num ** numn}`);

// 3. 달러를 입력하면 원화로 콘솔로 나타내기

const dollar = Number(prompt("달러"));
const rate = 1369;
console.log(`원화 환전 결과: ${dollar * rate}`);

// 4. 1000 이하의 정수를 입력 받고, 분초로 나타내기

const n = Number(prompt("1000 이하의 정수"));
const min = parseInt(n / 60);
const second = num % 60;

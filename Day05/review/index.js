// 1. [5,13,25,31,49]를 모두 숫자 10 더해서 콘솔로 나타내기

const num = [5, 13, 25, 31, 49];
const num1 = num.map((x) => x + 10);

// 2. [5,13,25,31,49]를 홀수면 두배 짝수면 -10을 해서 콘솔

const num2 = num.map((x) => (x % 2 ? x * 2 : x - 10));

// 3. ["kiwi", "apple", "orange", "pineapple"]
// apple 포함하면 대문자로 바꾸고 아니면 문자 길이로 바꾸기

const fruits = "kiwi, apple, orange, pineapple";

fruits.map((x) => (x.inclueds("apple") ? x.toUpperCase() : x.length));

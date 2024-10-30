// 데이터타입.함수(): 데이터타입에 따른 함수

// String 함수

const a = "ice";
console.log(a.toUpperCase()); // 대문자화
console.log(a.includes("k")); // 포함하는지? false
console.log(a.includes("i")); // 포함하는지? true
console.log(a.repeat(2)); // iceice

const b = ["돼지", "소", "닭고기", "양고기"];
console.log(b.push("오리"));
console.log(b.includes("오리")); // true
console.log(b.reverse()); // 배열순서 바뀜

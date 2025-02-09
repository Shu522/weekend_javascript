// // fetch("데이터 경로").then((v)=>v.json()).then((data)=>)
// const divide = (a, b) => {
//   if (b == 0) throw new Error("에러 발생"); // 강제로 에러 발생 throw
//   return a / b;
// };

// // 에러를 처리하는 문법 try - catch
// try {
//   // 오류가 발생 할 가능성이 있는 코드
//   const first = Number(prompt("정수 입력"));
//   const second = Number(prompt("정수 입력"));
//   console.log(divide(first, second));
// } catch (error) {
//   // 오류 발생 했을 때 실행되는 코드
//   console.log(error.message);
// } finally {
//   // 오류 발생 여부와 상관없이 항상 실행되는 코드 (옵션)
//   console.log("코드 끝");
// }

// // throw new Error()
// // const divide = (a, b) => {
// //     if (b == 0) throw new Error("에러 발생");
// //     return a % b;
// //   };

// const alphabet = prompt("a~c까지 입력");

// try {
//   if (["a", "b", "c"].some((v) => v != alphabet)) throw new Error("에러");
//   console.log(alphabet.toUpperCase);
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("끝");
// }

// const sayHello = (name) => {
//   if (typeof name != "string") throw new TypeError("문자열 아님");
//   console.log(`hello ${name}`);
// };

// try {
//   sayHello(100);
// } catch (error) {}

// try {
//   fetch("https://api.sampleapis.com/coffee/hot")
//     .then((v) => {
//       if (!v.ok) throw new Error("네트워크 이상함");
//       return v.json();
//     })
//     .then((v) => {
//       if (v.error) throw new Error("현재 API 데이터 오류");
//       console.log(v);
//     });
// } catch (error) {
//   console.log(error.message);
// }

// const makeDough = (topping) => {
//   return new Promise((success, fail) => {
//     console.log("도우 만들기");
//     success(topping);
//   });
// };

// const makeTomato = (topping) => {
//   return new Promise((success, fail) => {
//     console.log("토마토 바르기");
//     success(topping);
//   });
// };

// const makeCheese = (topping) => {
//   return new Promise((success, fail) => {
//     console.log("치즈 뿌리기");
//     success(topping);
//   });
// };

// const makeHot = (topping) => {
//   return new Promise((success, fail) => {
//     console.log("화덕에 넣기");
//     success(topping);
//   });
// };

// makeDough("새우")
//   .then((v) => makeTomato(v))
//   .then((v) => makeCheese(v))
//   .then((v) => makeHot(v))
//   .then((v) => console.log(`${v}피자 완성`));

// 알 부화 병아리 닭

const hatchEgg = () => {
  return new Promise((success, fail) => {
    console.log("알 낳는 중");
    setTimeout(() => {
      success("알");
    }, 3000);
  });
};

const becomeChick = (egg) => {
  return new Promise((success, fail) => {
    console.log(`${egg}에서 부화중`);
    setTimeout(() => {
      success("부화");
    }, 2000);
  });
};

const becomeYoungChick = (youngchick) => {
  return new Promise((success, fail) => {
    console.log(`${youngchick}에서 성장중`);
    setTimeout(() => {
      success("병아리");
    }, 2000);
  });
};

const becomeHen = (chick) => {
  return new Promise((success, fail) => {
    console.log(`${chick}에서 성장중`);
    setTimeout(() => {
      success("닭");
    }, 3000);
  });
};

hatchEgg()
  .then((v) => becomeChick(v))
  .then((v) => becomeYoungChick(v))
  .then((v) => becomeHen(v))
  .then((v) => console.log(`${v} ㅎ`));

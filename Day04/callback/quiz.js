// skill 함수를 정의하고
// 스킬 발동 ~~ 스킬 마무리

// 얼음 스킬 -> 얼음 모으기, 얼음 발사
// 썬더 스킬 -> 번개 모으시, 번개 발사
// 불 스킬 -> 불 피우기, 불 발사

// 유저에게 어떠한 스킬을 발동시킬까요 (1,2,3)
// 콘솔로 결과값 나타내기

// const iceskill = () => {
//   console.log("얼음 모으기");
//   console.log("얼음 발사");
// };

// const thunderskill = () => {
//   console.log("번개 모으기");
//   console.log("번개 발사");
// };

// const fireskill = () => {
//   console.log("불 피우기");
//   console.log("불 발사");
// };

// const skill = (commend) => {
//   console.log("스킬 발동");
//   commend();
//   console.log("스킬 마무리");
// };

// const elementskill = (element) => {
//   console.log(`${element} 모으기`);
//   console.log(`${element} 발사`);
// };

// const skillNumber = Number(prompt(skills + "어떤 스킬을 발동시킬까?"));
// const skills = ["얼음 스킬", "썬더 스킬", "불 스킬"];
// commend(() => elementskill(commend[skillNumber]));

// 타코 음식 만들기

//유저에게 타코 메뉴를 선택하고
// 요리 하기 함수를 만들기 (요리시작 ~ 요리 끝)
// 타코 만들기 함수를 만들기 (🦐 🐖 🐔 🧀)
// 1. 타코 준비 -> 2. 메뉴 넣기 -> 3. 굽기 -> 4. 타코 완성
//준비된 ~~타코가 나왔습니다

const menuNumber = Number(prompt(menu + "타코 메뉴 선택"));
const menu = ["🦐", "🐖", "🐔", "🧀"];

const cook = (makeTaco) => {
  console.log("요리시작");
  makeTaco();
  console.log("요리 끝");
};

const makeTaco = (menu) => {
  console.log("타코 준비");
  console.log(`${menu} 넣기`);
  console.log("굽기");
  console.log(`${menu} 타코 완성`);
};

cook(() => makeTaco(menu[menu - 1]));

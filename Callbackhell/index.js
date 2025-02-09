const makeDough = (next) => {
  setTimeout(() => {
    console.log("도우 만들기");
    next();
  }, 1000);
};

const makeTomato = (next) => {
  setTimeout(() => {
    console.log("토마토 바르기");
    next();
  }, 3000);
};

const makeCheese = (next) => {
  setTimeout(() => {
    console.log("치즈 뿌리기");
    next();
  }, 2000);
};

const makeHot = () => {
  setTimeout(() => {
    console.log("화덕에 올리기");
  }, 500);
};

const makePizza = () =>
  makeDough(() => makeTomato(() => makeCheese(() => makeHot())));

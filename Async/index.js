const makeMeat = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("고기");
    }, 2000);
  });
};

const newFunc = async () => {
  const a = await makeMeat(); // 프로미스 fullfiled or failed 될 때까지 기다림
  console.log(a); // 고기 [프로미스 결과값 받음]
};

newFunc();

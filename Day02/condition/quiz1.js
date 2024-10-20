const bus = Number(
  prompt("1.마을버스1000 2.시내버스1500 3.광역버스2000 4.고속버스5000 ")
);

const age = Number(prompt("나이"));

const busData = {
  1: {
    name: "마을버스",
    price: 1000,
  },
  2: {
    name: "시내버스",
    price: 1500,
  },
  3: {
    name: "광역버스",
    price: 2000,
  },
  4: {
    name: "고속버스",
    price: 5000,
  },
};

console.log(`${busData[bus]}의 최종 금액은 ${busData[bus].price * 1} 입니다`);

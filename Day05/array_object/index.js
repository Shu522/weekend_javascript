const menu = [
  { name: "americano", price: 2500, shots: 2, ingridents: ["water", "been"] },
  { name: "latte", price: 3500, shots: 3, ingridents: ["milk", "been"] },
  {
    name: "mocha",
    price: 1000,
    shots: 2,
    ingridents: ["milk", "been", "choco", "syrup"],
  },
];

const newMenu = menu.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
console.log(newMenu);

const newMenu1 = menu.map((x) => {
  x.name = x.name.toUpperCase;
  return x;
});
console.log(newMenu1);

const newMenu2 = menu.map((x) => {
  x.price = x.ingridents.includes("milk") ? x.price + 1000 : x.price;
  return x;
});
console.log(newMenu2);

const newMenu3 = menu
  .filter((x) => x.shots <= 2) // .filter: 2샷 초과한 x는 거른다
  .map((x) => {
    x.ingridents.push("strawberry"); // 여기서 참조타입 (배열) 은 함수를 이용해서 (push) 추가 해야함
    return x;
  });
console.log(newMenu3);

// 기본타입: String, Number, Boolean, Undefined, Null
// 참조타입: Objeci

const car = {
  color: "white",
  maxSpeed: 300,
  company: "kia",
  model: "쏘렌토",
};

const major = {
  name: "컴퓨터공학과",
  capacity: 500,
  head: "엄준식",
  department: "공과대학",
  course: {
    name: "컴퓨터공학개론",
  },
};

console.log(major.name); // 컴퓨터 공학과
console.log(major["name"]); // 컴퓨터 공학과
console.log(major.course.name); // 컴퓨터공학개론
console.log([major["course"]["name"]]); // 컴퓨터공학개론

// entries: 관찰 대상의 상태 정보가 담긴 리스트
// observer: 현재 IntersectionObserver 객체

const box = document.querySelector(".box");

const ob = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        console.log("박스가 보인다");
        box.style.opacity = "1";
      } else {
        box.style.opacity = "0";
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.5 }
);

ob.observe(box);

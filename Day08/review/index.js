const container = document.querySelector(".container");

container.insertAdjacentHTML("beforeend", makeBtn("red"));
container.insertAdjacentHTML("beforeend", makeBtn("white"));
container.insertAdjacentHTML("beforeend", makeBtn("sktBlue"));
container.insertAdjacentHTML("beforeend", makeBtn("red"));

const makeBtn = (className) => `
      <button class="btn ${className}">Button</button>
`;

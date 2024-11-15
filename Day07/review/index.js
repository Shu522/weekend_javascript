const box = document.createElement("div");
box.style.cssText = "display:flex; gap:22px; flex-direction:columns;";

const makeButton = (color) => {
  const btn = document.createElement("button");
  btn.innerText = "Button";
  btn.style.cssText = `background-color:${color}; color:white; border: 1px soild ${color}; border-radius:30px; height: 50px; width: 100px;`;
  box.appendChild(btn);
};

const colorList = ["#2563EB", "#1d4ed8", "purple", "#dbeafe"];

document.body.appendChild(box);

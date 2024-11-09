const container = document.createElement("section");
container.style.cssText =
  "width:100vw; height:100vh;display:grid; grid-template-columns:repeat(5, 1fr);";

const color = [
  "#00a8ff",
  "#9c88ff",
  "#fbc531",
  "#4cd137",
  "#487eb0",
  "#0097e6",
];

const makeColor = (color) => {
  const box = document.createElement("div");
  box.style.cssText = `width:100%; height:100%; background-color:${color}`;
  return box;
};

colors.forEach((v) => container.appendChild(makeColor(v)));
document.body.appendChild(container);

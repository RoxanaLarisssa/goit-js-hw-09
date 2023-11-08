const color = {
  startBtn: document.querySelector("button[data-start]"),
  stopBtn: document.querySelector("button[data-stop]"),
  body: document.querySelector("body"),
};

color.startBtn.addEventListener("click", startChangeColor);

color.stopBtn.addEventListener("click", stopBtnChangeColor);

let start = null;

function startChangeColor() {
  start = setInterval(bodyBcg, 1000);
  color.startBtn.setAttribute("disabled", true);
}

function stopBtnChangeColor(e) {
  clearInterval(start);
  color.startBtn.removeAttribute("disabled");
}

function bodyBcg() {
  color.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

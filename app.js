const board = document.querySelector("#board");
const SQUARES_NUMBER = 656;
const colors = [
  "blue",
  'crismon',
  'cian',
  "#e74c3c",
  "#8e44ad",
  '3498db',
  '#2ecc71',
  "greenyellow",
  ];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  board.append(square);
  square.addEventListener("mouseleave", removeColor);
}

function setColor(e) {
  const color = getRandomColor();
  e.target.style.backgroundColor = color;
  e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.target.style.backgroundColor = "#1d1d1d";
  e.target.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

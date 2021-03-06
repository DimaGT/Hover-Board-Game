const board = document.getElementById("board");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "purple",
  "cyan",
  "#3498db",
  "pink",
  "e67e22",
  "#2ecc71",
];
const SQUARES_NUMBER = 1394;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #1d1d1d`;
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

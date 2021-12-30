const board = document.getElementById("board");
const colors = [
  "red",
  "blue",
  "yellow",
  "purple",
  "cyan",
  "orange",
  "pink",
  "gold",
];
const SQUARES_NUMBER = 500;

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
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

"use strict";

const resizeBtn = document.getElementById("resizeBtn");

let size;

resizeBtn.addEventListener("click", () => {
  const input = prompt("Enter a number between 17 and 100");
  const number = Number(input);

  if (number >= 16 && number <= 100 && !isNaN(number)) {
    size = number;
    createGrid(size);
  } else {
    alert("Invalid input, please Enter a number between 16 and 100");
  }
});
function getRandomColor() {
  let randomRed = Math.floor(Math.random() * 256);
  let randomGreen = Math.floor(Math.random() * 256);
  let randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function createGrid(size = 16) {
  const container = document.getElementById("squares-container");

  container.innerHTML = "";

  const squareSize = Math.floor(960 / size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

createGrid();

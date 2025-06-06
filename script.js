"use strict";

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
      square.style.backgroundColor = "yellow";
    });

    container.appendChild(square);
  }
}

createGrid();

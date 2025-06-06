"use strict";

function createGrid(size = 16) {
  const container = document.getElementById("squares-container");

  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

createGrid();

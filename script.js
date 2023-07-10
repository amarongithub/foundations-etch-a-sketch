const container = document.createElement("div");
container.classList.add("container");

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

function createGrid(num) {
  for (let i = 1; i < num; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
    grid.addEventListener("mousemove", () => {
      grid.style.background = "black";
    });
  }
}

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.background = "lightblue";
  });
}

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.classList.add("clearButton");
clearButton.addEventListener("click", clearGrid);

container.appendChild(gridContainer);
container.appendChild(clearButton);
document.body.appendChild(container);

createGrid(1297);

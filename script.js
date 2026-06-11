const initialGrid = 16;
const totalSize = 960 / initialGrid
const container = document.querySelector("#container");
const button = document.querySelector("#resizeBtn");

button.addEventListener("click", () => {
    let numGrid = prompt("Enter grid size(max 100)");
    numGrid = Number(numGrid);
    if (numGrid > 0 && numGrid <= 100) {
        createGrid(numGrid)
    }
})



//initial grid
for (let i = 0; i < initialGrid * initialGrid; i++) {
    const square = document.createElement("div");
    square.style.width = `${totalSize}px`;
    square.style.height = `${totalSize}px`;
    square.style.border = "1px solid black";
    square.style.boxSizing = "border-box";

    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = randomColor();
    })

    container.appendChild(square)

}

// function to create a new grid
function createGrid(newGrid) {
    container.innerHTML = "";

    for (let i = 0; i < newGrid * newGrid; i++) {
        const grid = document.createElement("div")


        const gridTots = 960 / newGrid;
        grid.style.width = `${gridTots}px`
        grid.style.height = `${gridTots}px`
        grid.style.border = "1px solid black"
        grid.style.boxSizing = "border-box"
        container.appendChild(grid);

        // hover effect for the new grid size
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = randomColor();
        });
    }
}

// function to create random color effect
function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}
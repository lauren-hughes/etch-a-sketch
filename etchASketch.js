const changeGridButton = document.querySelector("button");
changeGridButton.addEventListener("click", changeGrid);

createGrid(16);

function createGrid(n) {
    const sketchPad = document.querySelector(".sketch-pad");

    // Creates rows
    for (let i = 0; i < n; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

    // Creates divisions within each row
    for (let j = 0; j < n; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        rowDiv.appendChild(squareDiv);
    }

        sketchPad.appendChild(rowDiv);
    }

    const squares = document.querySelectorAll(".square");
    // When each square is hovered over, the background colour is changed randomly
    squares.forEach(square => square.addEventListener("mouseenter", changeColour));
}

function changeColour(event) {
    let square = event.target;

    // Background colour should only be changed if it hasn't been changed before
    // There is a small chance that the random background colour is white, so can't just check the background colour
    if (square.classList.contains("filled")) {
        console.log("filled");
    }
    else {
        // Changes square background color to a random colour
        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.classList.add("filled");
    }
}

function changeGrid() {
    let gridSize;

    do {
        gridSize = prompt("How many grids would you like (enter a number from 1 to 100)?");

        // Allows the user to cancel without losing their current grid
        if (gridSize === null) {
            return;
        }
        
        gridSize = Number(gridSize);
    }
    while (!(gridSize >= 1 && gridSize <= 100));

    removeGrid();
    createGrid(gridSize);
}

function removeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
}
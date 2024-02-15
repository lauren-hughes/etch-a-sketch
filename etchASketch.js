const container = document.querySelector("#container");

// Creates rows
for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // Creates divisions within each row
    for (let j = 0; j < 16; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        rowDiv.appendChild(squareDiv);
    }

    container.appendChild(rowDiv);
}

const squares = document.querySelectorAll(".square");
// When each square is hovered over, the class filled is added to it, which changes the background color to black
squares.forEach(square => square.addEventListener("mouseenter", event => event.target.classList.add("filled")));
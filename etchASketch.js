const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < 16; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        rowDiv.appendChild(squareDiv);
    }

    container.appendChild(rowDiv);
}
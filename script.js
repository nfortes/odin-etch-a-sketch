const container = document.querySelector('#container');

container.setAttribute("style", "border: 1px solid black;");

const box = document.createElement("div");
box.classList.add("box");


function makeColumns() {
    for (let i = 0; i < 256; i++){
        container.appendChild(box.cloneNode(true));    
    }
}

makeColumns();

function turnBlack(e) {
    e.target.setAttribute("style", "background-color: black;")
}

const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach(box => box.addEventListener('mouseover', turnBlack));
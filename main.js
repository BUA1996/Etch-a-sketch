//creating the smaller grids
let gridSize = 16;
function createGrids(gridSize) {
    let myBoard = document.querySelector('.myBoard');
    myBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    myBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let numGrid = gridSize * gridSize;

    for (let i = 0; i < numGrid; i++){
        let gridDivs = document.createElement('div');
        gridDivs.style.backgroundColor = 'blue';
        myBoard.insertAdjacentElement('beforeend', gridDivs);
    }
};

createGrids(32);
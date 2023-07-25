//creating the smaller grids
let gridSize = 16;
function createGrids(gridSize) {
    let myBoard = document.querySelector('.myBoard');
    myBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    myBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let numGrid = gridSize * gridSize;

    for (let i = 0; i < numGrid; i++){
        let gridDivs = document.createElement('div');
        gridDivs.addEventListener('mouseover', colorDiv);
        myBoard.insertAdjacentElement('beforeend', gridDivs);
    }
};

//taking user input
function userChoice(){
    let choice = prompt("Input put your gridsize choice?");
    if (choice === " "){
        console.log('input your choice');
    } else if (choice < 2 || choice > 100) {
        console.log('Input a number between 2 and 100');
    } else {
        console.log('Start Drawing your sketch!!');
        return choice;
    };
    
};

//select button
let selectSize = document.querySelector('#selectSize');
selectSize.addEventListener('click', function(){
    let size = userChoice();
    createGrids(size);
});

//erase function
function eraseBoard(){
    let clear = document.querySelectorAll('div');
    clear.forEach((div) => div.style.backgroundColor = 'white'); 
};
let erase = document.querySelector('#erase');
erase.addEventListener('click', function(){
    eraseBoard();
})
//choosing colors for use
let color = 'black';
function colorDiv(){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = 'black';
    };
};

function setColor(colorChoice){
    color = colorChoice;
};



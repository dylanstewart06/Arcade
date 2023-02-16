const cells = document.getElementsByClassName("cell")
const restart = document.getElementById("reset");
const turn = document.getElementById("playerTurn")



const winCons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let moves = ["", "", "", "", "", "", "", "", ""];
let playing = 'true'
let player = 'x'

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", resetGame);
    statusText.textContent = `${player}'s turn`;
    playing = true;
}


function playerMove() {
    const cellindex = this.getAttribite("cellindex")

    if (moves[cellindex] != "" || !playing) {
        return;
    }

    moveLogged(this, cellN);
    winner();

}

function moveLogged(cell, index) {
    moves[index] = player; 
    cell.textContent = player;
}

function switchPlayer() {

}

function winner() {

}

function resetBoard() {
    player = 'x';
    moves = ["", "", "", "", "", "", "", "", ""];
    turn.textContent = `Awaiting ${player}'s move`;
    playing = true;
}
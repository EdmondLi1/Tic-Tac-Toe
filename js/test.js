// global constants here
// Migrating Selection.js
const selectBox = document.querySelector('.select-box');
const content = document.querySelector('.container');
const body = document.querySelector('body');
const selectPlayerX = selectBox.querySelector('.playerX')
const selectPlayerO = selectBox.querySelector('.playerO')
const O_TURN = 'O';
const X_TURN = 'X';

let playerText = undefined;

// When window is loaded
window.onload = () => {
    selectPlayerX.onclick = () => {
        selectBox.classList.add('hide');
        playerText = X_TURN;
        content.classList.remove('hide');
        body.classList.add('hide');

    }

    selectPlayerO.onclick = () => {
        selectBox.classList.add('hide');
        playerText = O_TURN;
        content.classList.remove('hide');
        body.classList.add('hide');
    }
};

console.log(playerText);


const timerText = document.getElementById("timerText");
const playerTurnText = document.getElementById("player");
// const button = document.querySelectorAll('#btn');
const allBox = Array.from(document.getElementsByClassName("box"));
const MAX_TIME = 20;

// global variables here
let playerTurn = 0;
let currentPlayer = playerText;
var isWinner = false;
var winner = undefined;
var clockTime = 0;
var timer = 0;
var playerChosen = false;
let boardState = new Array(9);

for (var i = 0; i < boardState.length; i++) {
    boardState[i] = undefined;
}

// Draw the div boxes
console.log(allBox);
const drawBoard = () => {
    allBox.forEach((box, index) => {

        // used to add style to css
        let styleAdd = '';

        // if boxes are on first row
        if (index < 3) {
            styleAdd += `border-bottom: 3px solid;`;
        }

        // if the boxes are in the first col
        if (index % 3 === 0) {
            styleAdd += `border-right: 3px solid;`;
        }

        // if boxes are on the third col 
        if (index % 3 === 2) {
            styleAdd += `border-left: 3px solid;`;
        }

        if (index > 5) {
            styleAdd += 'border-top: 3px solid;';
        }

        box.style = styleAdd;
        box.addEventListener("click", boxClicked);
    });
}

const boxClicked = (e) => {
    let currentPlayer = playerText;
    const id = e.target.id;
    if (!boardState[id]) {
        console.log('you clicked me!');
        boardState[id] = currentPlayer;
        playerTurn = 1 - playerTurn;

        playerTurnText.innerHTML = `Turn: Player ${playerTurn + 1}`
        e.target.innerText = currentPlayer;

        console.log(playerText);
        playerText = currentPlayer === O_TURN ? X_TURN : O_TURN;
        // resetTimer(timer);
    }
   

};

drawBoard();

// Clock and Game loop
// clockTimer = () => {
//     // console.log('tesitng');
//     clockTime++;
//     timerText.innerHTML = clockTime;

//     allBox.onclick = () => {
//         console.log('you pressed a button');

//     }
    
//     // isWinner, winner = checkWinner();
//     // Once timer reaches 10, changes player's turn
//     if (clockTime == MAX_TIME  || playerChosen) {
//         playerTurn = 1 - playerTurn;
//         resetTimer();
//     }
//     else if (isWinner) {
//         gameOver(); 
//     }
// };

// resetTimer = () => {
//     clearInterval(timer);
//     clockTime = -1;

//     //use this if laggy
//     setTimeout(() => {
//          timer = setInterval(clockTimer, 1000);
//     }, 300);
    
//     // timer = setInterval(clockTimer, 1000);
// };

// gameOver = () => {
//     clearInterval(timer);
//     return window.location.assign('end.html');
// };

// // Returns arrau for var of `isWinner` and 'winner'
// checkWinner = () => {
//     const buttonClicked = button.onclick();
// };

// randomSpot = () => {
    
// };

/*
checkWinner = () => {
    for (var i = 0; i < 3; i++) {
        if (boardState[i] == )
    }
    

};
*/
/* 
checkEvent = () => {

}
*/

// main game loop
// startGame = () => {
//     timer = setInterval(clockTimer, 1000);
// };

// startGame();
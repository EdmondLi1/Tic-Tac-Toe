/* Global Constants */
// HTML Elements
const body = document.querySelector('body');

// Classes for showing/hiding
const content = document.querySelector('.container');
const selectBox = document.querySelector('.select-box');
const resultBox = document.querySelector(".result-box");

console.log(resultBox);

// Buttons
const selectPlayerX = selectBox.querySelector('.playerX');
const selectPlayerO = selectBox.querySelector('.playerO');
const selectReplay = resultBox.querySelector('.replay');
const selectHome = resultBox.querySelector('.home');

// Gameboard boxes
const allBox = Array.from(document.getElementsByClassName("box"));

// Altrnating Text
const timerText = document.getElementById("timerText");
const playerTurnText = document.getElementById("player");
const winStreak = document.getElementById("winstreak-text");
const winningText = document.getElementById("winning-text");

// Constants
const O_TURN = 'O';
const X_TURN = 'X';
const MAX_TIME = 20;

/* Global Variables */
let playerTurn = 0;
let currentPlayer;
let playerChosen = false;
let playerText = undefined;
let clockTime = 0;
let timer = 0;

// BoardState array
let boardState = new Array(9);

for (let i = 0; i < boardState.length; i++) {
    boardState[i] = undefined;
}


// When window is loaded
window.onload = () => {
    selectPlayerX.onclick = () => {
        playerText = X_TURN;
        displayBoard();
    }

    selectPlayerO.onclick = () => {
        playerText = O_TURN;
        displayBoard();
    }
};


// Helper functions to hide/show HTML Elements
const displayBoard = () => {
    selectBox.classList.add('hide');
    content.classList.remove('hide');
    body.classList.add('hide');
    timer = setInterval(clockTimer, 1000);
};


const displayEndScreen = (winner, draw) => {
    resetTimer();

    // Show the result-box
    resultBox.classList.remove('hide');
    content.classList.add('hide');
    body.classList.remove('hide');

    if (!draw){
        winningText.innerHTML = `Player ${winner} has won!`;
    }
    else {
        winningText.innerHTML = `There was a draw!`;
    }

    // updating winstreak w/ database {WIP}
    // <code here>

    // Events for clicking the buttons
    selectReplay.onclick = () => {
        setTimeout(() => {
            resultBox.classList.add('hide');
            window.location.assign("game.html");
        }, 300);
    };

    selectHome.onclick = () => {
        setTimeout(() => {
            resultBox.classList.add('hide');
            window.location.assign("index.html");
        }, 300); 
    };

    // if (idling()) {
    //     setTimeout(() => {
    //         resultBox.classList.add('hide');
    //         window.location.assign("index.html");
    //     }, 300);
    // }
};

// impleemnted later
// const idling = () => {

//}



// Draw the div boxes
const drawBoard = () => {
    allBox.forEach((box, index) => {

        // used to add style to HTML
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
            styleAdd += `border-top: 3px solid;`;
        }

        box.style = styleAdd;
        box.addEventListener("click", boxClicked);
    });
}

// Clicking on board
const boxClicked = (e) => {

    let currentPlayer = playerText;
    const id = e.target.id;

    // Check if not empty 
    if (!boardState[id]) {

        // switch players
        playerChosen = true;
        boardState[id] = currentPlayer;
        playerTurn = 1 - playerTurn;

        playerTurnText.innerHTML = `Turn: Player ${playerTurn + 1}`
        e.target.innerText = currentPlayer;

        // Changing Turn sign
        playerText = currentPlayer === O_TURN ? X_TURN : O_TURN;

        // Checking winner/draw
        if (winnerAvailable(currentPlayer)) {
            // add new result box, timeout and return back to home
            console.log(`${currentPlayer} has won`);

            setTimeout(() => {
                displayEndScreen(currentPlayer, false)
            }, 300);
            
            
        } else if (checkDraw()) {
            console.log('its a draw!');

            setTimeout(() => {
                displayEndScreen(currentPlayer, true)
            }, 300);
            
        }
    }
}; 

// Check if the player has won
const winnerAvailable = (player) => {

    for (let index = 0; index < 3; index++) {

        // check rols
        if (player == boardState[3 * index + 1]) {
            if (boardState[3 * index] == player && player == boardState[3 * index + 2]) {
                console.log('row win');
                return true;
            }

        } 

        // check col
        if (player == boardState[index + 3]) {
            if (boardState[index] == player && player == boardState[index + 6]) {
                console.log('col win');
                return true;    
            }

        }
    }

    // check diagonals
    if (player == boardState[4]) {
        if (boardState[0] == player && player == boardState[8]) {
            console.log('dia win');
            return true;
        }
        if (boardState[6] == player && player == boardState[2]) {
            console.log('dia win');
            return true;
        }
    }     
    return false;
};

// if checkwinner false with a filled board, then draw must be true
const checkDraw = () => {
    for (let index = 0; index < 9; index++) {

        // checks if any empty boxes;
        if(!boardState[index]) {
            return false;
        }
    }
    return true;
};

drawBoard();

// Clock and Game loop
clockTimer = () => {
    // console.log('tesitng');
    clockTime++;
    timerText.innerHTML = clockTime;

    console.log(playerChosen);
    // isWinner, winner = checkWinner();
    // Once timer reaches 10, changes player's turn
    if (clockTime == MAX_TIME  || playerChosen == true) {
        playerChosen = false;
        resetTimer();
    }
};

resetTimer = () => {
    clearInterval(timer);
    clockTime = 0;
    // add noclickable attr to board

    //use this if laggy
    setTimeout(() => {
         timer = setInterval(clockTimer, 1000);
         // make it clickable now
    }, 100);
    
    // timer = setInterval(clockTimer, 1000);
};

// randomSpot = () => {
    
// };

// Selection box 1
const body = document.querySelector("body");
const backSection = document.querySelector(".back-section");

const gamemode = document.querySelector(".gamemode");
const bot = document.querySelector(".bot");
const singlePlayer = gamemode.querySelector(".singlePlayer");
const multiPlayer = gamemode.querySelector(".multiPlayer");

// Section box 2
const minMaxBot = bot.querySelector(".minMaxBot");
const randomBot = bot.querySelector(".randomBot");
const backButton = backSection.querySelector(".back");

// Event handling
singlePlayer.onclick = () => {

    // transition and warp to game.html
    gamemode.classList.add("hide");
    bot.classList.remove("hide");
    backSection.classList.remove("hide");
};

multiPlayer.onclick = () => {
    console.log("you choose multiplayer!");
    setTimeout(() => {
        window.location.assign("game.html");
    }, 300);
};

// Singleplayer bots
randomBot.onclick = () => {
    setTimeout(() => {
        window.location.assign("singleplayer.html");
    }, 300);
};

minMaxBot.onclick = () => {
    setTimeout(() => {
        window.location.assign("minmaxbot.html");
    }, 300);
};

backButton.onclick = () => {
    gamemode.classList.remove("hide");
    bot.classList.add("hide");
    backSection.classList.add("hide");
    // unhide selectbox 1
    // hide select box 2
};

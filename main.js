let userScore = 0;
let aiScore = 0;
const chooses = ["rock", "paper", "scissors"];

// user Choice 
const userChoose = document.querySelector("input");
const userChoice = document.querySelector("#UserChose");
const AIChoice = document.querySelector("#AIChose");
const WinLose = document.querySelector("#WinLose")
const btn = document.querySelector("button");

btn.addEventListener("click", score)

function score() {
    // computer choice
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = chooses[randomNumber];
    if (userChoose.value === "rock" || userChoose.value === "paper" || userChoose.value === "scissors") {
        userChoice.innerHTML = `UserChoice:${userChoose.value}`;
        AIChoice.innerHTML = `AiChoice:${computerChoice}`
    }

    if (userChoose.value === computerChoice) {
        WinLose.innerHTML = "User&AI Equal 😐!"
    } else if (userChoose.value === "rock") {
        if (computerChoice === "scissors") {
            WinLose.innerHTML = "You Win🥳!"
            userScore++;
        } else {
            WinLose.innerHTML = "Ai Win😪!"
            aiScore++;
        }
    } else if (userChoose.value === "paper") {
        if (computerChoice === "rock") {
            WinLose.innerHTML = "You Win🥳!"
            userScore++;
        } else {
            WinLose.innerHTML = "Ai Win😪!"
            aiScore++;
        }
    } else if (userChoice.value === "scissors") {
        if (computerChoice === "paper") {
            WinLose.innerHTML = "You Win🥳!"
            userScore++;
        } else {
            WinLose.innerHTML = "Ai Win😪!"
            aiScore++;
        }
    }
    
    document.getElementById("UserScore").innerHTML = `User Score : ${userScore}`;
    document.getElementById("AIScore").innerHTML = `AI Score : ${aiScore}`;
}
let userScore = 0;
let aiScore = 0;

const chooses = ["rock", "paper", "scissors"];

// user Choose 
const userChoose = prompt("choose one more !! \n  rock, paper, scissors");
if (userChoose === "rock" || userChoose === "paper" || userChoose === "scissors") {
    document.getElementById("UserChose").innerHTML = `User Choose : ${userChoose}`;

    // camputer choose 
    const randomNumber = Math.floor(Math.random() * 3);
    const camputerChoose = chooses[randomNumber];

    document.getElementById("AIChose").innerHTML = `AI choose : ${camputerChoose}`;

    // Win & Lose 
    if (userChoose === camputerChoose) {
        document.getElementById("WinLose").innerHTML = "User&AI Equal !!";
    } else if (userChoose === "rock") {
        if (camputerChoose === "paper") {
            document.getElementById("WinLose").innerHTML = "AI Win !";
            aiScore++;
        } else {
            document.getElementById("WinLose").innerHTML = "User Win !";
            userScore++;
        }
    } else if (userChoose === "paper") {
        if (camputerChoose == "scissors") {
            document.getElementById("WinLose").innerHTML = "AI Win !";
            aiScore++;
        } else {
            document.getElementById("WinLose").innerHTML = "User Win !";
            userScore++;
        }
    } else if (userChoose === "scissors") {
        if (camputerChoose === "rock") {
            document.getElementById("WinLose").innerHTML = "AI Win !";
            aiScore++;
        } else {
            document.getElementById("WinLose").innerHTML = "User Win !";
            userScore++;
        }
    }

    // show score 
    document.getElementById("UserScore").innerHTML = `User Score : ${userScore}`;
    document.getElementById("AIScore").innerHTML = `AI Score : ${aiScore}`;

} else {
    document.getElementById("cheater").innerHTML = "hahaha \n Fuck You !!";
}

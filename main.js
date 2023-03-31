let userScore = 0;
let aiScore = 0;

const chooses = ["rock", "paper", "scissors"];

// user Choose 
const userChoose = prompt("choose one more !! \n  rock, paper, scissors");
if (userChoose === "rock" || userChoose === "paper" || userChoose === "scissors") {
    console.log(`User Choose : ${userChoose}`)
    // camputer choose 
    const randomNumber = Math.floor(Math.random() * 3);
    const camputerChoose = chooses[randomNumber];

    console.log(`AI choose : ${camputerChoose}`);
    console.log("--------------------------")

    // Win & Lose 
    if (userChoose === camputerChoose) {
        console.log("User&AI Equal !!");
    } else if (userChoose === "rock") {
        if (camputerChoose === "paper") {
            console.log("AI Win !");
            aiScore++;
        } else {
            console.log(" User Win !");
            userScore++;
        }
    } else if (userChoose === "paper") {
        if (camputerChoose == "scissors") {
            console.log("AI Win !");
            aiScore++;
        } else {
            console.log("User Win !");
            userScore++;
        }
    } else if (userChoose === "scissors") {
        if (camputerChoose === "rock") {
            console.log("AI Win !");
            aiScore++;
        } else {
            console.log("User Win !");
            userScore++;
        }
    }

    // show score 
    console.log(`AI Score : ${aiScore}`);
    console.log(`User Score : ${userScore}`);
} else {
    console.log("hahaha \n Fuck You !!")
}

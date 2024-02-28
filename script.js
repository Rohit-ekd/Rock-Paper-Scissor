let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#computer-score");

const showWinner = (winner) => {
    if (winner) {
        userScore++;
        msg.innerText = "User Win"
        msg.style.backgroundColor = "green";
        user.innerText = userScore;
    }
    else {
        computerScore++;
        msg.innerText = "Computer Win"
        msg.style.backgroundColor = "red";
        comp.innerText = computerScore;
    }
}

const drawGame = () => {
    msg.innerText = "Draw game! please play again";
    msg.style.backgroundColor = "#081b31";

}
const computerChoice = () => {
    const option = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() * 3);
    return option[randomNum];
}

const playGame = (userChoice) => {
    let compChoice = computerChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin;
        if ((userChoice === "rock" && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")) {
            userWin = true;
        }
        else {
            userWin = false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

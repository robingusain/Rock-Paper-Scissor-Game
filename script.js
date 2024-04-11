let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
    //rock , paper , scissor
}

const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        msg.innerText = "It was a Draw";
        msg.style.backgroundColor = "blue";
    }
    else {
        msg.style.backgroundColor = "green";
        if (userChoice == "rock" && compChoice == "paper") {
            msg.innerText = "Winner is Computer";
            msg.style.backgroundColor = "red";
            document.querySelector("#comp-score").innerText = compScore + 1;
            compScore = compScore + 1;
        }
        else if (userChoice == "paper" && compChoice == "rock") {
            msg.innerText = "Winner is User";
            document.querySelector("#user-score").innerText = userScore + 1;
            userScore = userScore + 1;
        }
        else if (userChoice == "paper" && compChoice == "scissor") {
            msg.innerText = "Winner is Computer";
            msg.style.backgroundColor = "red";
            document.querySelector("#comp-score").innerText = compScore + 1;
            compScore = compScore + 1;
        }
        else if (userChoice == "scissor" && compChoice == "paper") {
            msg.innerText = "Winner is User";
            document.querySelector("#user-score").innerText = userScore + 1;
            userScore = userScore + 1;
        }
        else if (userChoice == "scissor" && compChoice == "rock") {
            msg.innerText = "Winner is Computer";
            msg.style.backgroundColor = "red";
            document.querySelector("#comp-score").innerText = compScore + 1;
            compScore = compScore + 1;
        }
        else {
            msg.innerText = "Winner is User";
            document.querySelector("#user-score").innerText = userScore + 1;
            userScore = userScore + 1;
        }
    }
}

const playGame = (userChoice) => {
    //Generate computer choice  -> modular 
    const compChoice = genCompChoice();
    checkWinner(userChoice, compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
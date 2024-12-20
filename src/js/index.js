const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerStartScore = 0;
let computerStartScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const resultRound = playRound(button.id, computerChoice());
        result.textContent = resultRound;
    });
});

function computerChoice() {
    const choices = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate";
    } else {
        if (
            (playerSelection === "piedra" && computerSelection === "tijeras") ||
            (playerSelection === "piedra" && computerSelection === "lagarto") ||

            (playerSelection === "papel" && computerSelection === "piedra") ||
            (playerSelection === "papel" && computerSelection === "spock") ||

            (playerSelection === "tijeras" && computerSelection === "papel") ||
            (playerSelection === "tijeras" && computerSelection === "lagarto") ||

            (playerSelection === "lagarto" && computerSelection === "papel") ||
            (playerSelection === "lagarto" && computerSelection === "spock") ||

            (playerSelection === "spock" && computerSelection === "tijeras") ||
            (playerSelection === "spock" && computerSelection === "piedra")
        ) {
            playerStartScore++;
            playerScore.textContent = playerStartScore;
            return "¡Victoria! " + playerSelection + " gana a " + computerSelection;
        } else {
            computerStartScore++;
            computerScore.textContent = computerStartScore;
            return "¡La próxima será! " + computerSelection + " gana a " + playerSelection;
        }
    }
}
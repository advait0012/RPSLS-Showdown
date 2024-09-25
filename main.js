const modal = document.querySelector(".modal");
const btn = document.querySelector(".rules-btn");
const span = document.querySelector(".close");
const buttonEl = document.querySelectorAll(".circle");
const winner = document.querySelector(".display-winner");
const reset = document.querySelector(".reset");
const computerPoints = document.querySelector(".computer-points");
const playerPoints = document.querySelector(".player-points");

let playerCount = 0;
let computerCount = 0;

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    let userChoice = button.value;
    const options = ["rock", "paper", "scissor", "lizard", "spock"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    if (computerChoice === userChoice) {
      winner.textContent = `Tie`;
    } else if (
      (userChoice === "rock" && computerChoice === "lizard") ||
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "spock") ||
      (userChoice === "scissor" && computerChoice === "paper") ||
      (userChoice === "scissor" && computerChoice === "lizard") ||
      (userChoice === "lizard" && computerChoice === "paper") ||
      (userChoice === "lizard" && computerChoice === "spock") ||
      (userChoice === "spock" && computerChoice === "scissor") ||
      (userChoice === "spock" && computerChoice === "rock")
    ) {
      winner.textContent = `Computer played : ${computerChoice}, Player Wins`;
      playerCount += 1;
      playerPoints.value = playerCount;
    } else {
      winner.textContent = `Computer Wins`;
      computerCount += 1;
      computerPoints.value = computerCount;
    }
  });
});

reset.addEventListener("click", () => {
  computerPoints.value = 0;
  playerPoints.value = 0;
  winner.style.display = "none";
  playerCount = 0;
  computerCount = 0;
});

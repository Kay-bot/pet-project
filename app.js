const startGame = document.getElementById("start");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const guesses = document.querySelector(".guesses");
const winner = document.querySelector(".winner");
const no_winner = document.querySelector(".no-winner");
const alertMessage = document.getElementById("alert");
let isPlayerPredictor = true;
let resetButton;

function getAiAsPlayer() {
  const aiPlayer = ["oo", "oc", "co", "cc"];

  const randomNumberAsPlayer = Math.floor(Math.random() * 4);
  return aiPlayer[randomNumberAsPlayer];
}

function getAiAsPredictor() {
  const aiPredictor = [
    "oo4",
    "oo3",
    "oo2",
    "oc1",
    "oc3",
    "oc2",
    "oc1",
    "co1",
    "co2",
    "co3",
    "cc0",
    "cc1",
    "cc2"
  ];

  const randomNumberAspredictor = Math.floor(Math.random() * 13);
  return aiPredictor[randomNumberAspredictor];
}

function checkWinner() {
  let predictor;
  let player;
  let user = guessField.value.toLowerCase();
  if (isPlayerPredictor) {
    predictor = user;
    player = getAiAsPlayer();
    playerText = "User";
  } else {
    predictor = getAiAsPredictor();
    player = guessField.value.toLowerCase();
    playerText = "AI";
  }

  guesses.textContent = user;
  guessField.value = "";
  guessField.focus();

  isPlayerPredictor = !isPlayerPredictor;
  console.log("Predictor is " + predictor + "Player is " + player);
  if (
    (predictor === "oo4" && player === "oo") ||
    (predictor === "oo3" && player === "oc") ||
    (predictor === "oo2" && player === "cc") ||
    (predictor === "oc1" && player === "cc") ||
    (predictor === "oc3" && player === "oo") ||
    (predictor === "oc2" && player === "co") ||
    (predictor === "oc1" && player === "cc") ||
    (predictor === "co1" && player === "cc") ||
    (predictor === "co2" && player === "oc") ||
    (predictor === "co3" && player === "oo") ||
    (predictor === "cc0" && player === "cc") ||
    (predictor === "cc1" && player === "oc") ||
    (predictor === "cc2" && player === "oo")
  ) {
    return (winner.textContent = playerText + " Wins");

    // setGameOver();
  } else {
    return (winner.textContent = "No winner");
  }
}

// function swapPlayer() {
//   const aiPredictor = getAiAsPredictor();
//   let userPlayer = guessField.value;
//   guesses.textContent = userPlayer;

//   isPlayerPredictor = false;
//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();

//   if (
//     (aiPredictor === "oo4" && userPlayer === "oo") ||
//     (aiPredictor === "oo3" && userPlayer === "oc") ||
//     (aiPredictor === "oo2" && userPlayer === "cc") ||
//     (aiPredictor === "oc1" && userPlayer === "cc") ||
//     (aiPredictor === "oc3" && userPlayer === "oo") ||
//     (aiPredictor === "oc2" && userPlayer === "co") ||
//     (aiPredictor === "oc1" && userPlayer === "cc") ||
//     (aiPredictor === "co1" && userPlayer === "cc") ||
//     (aiPredictor === "co2" && userPlayer === "oc") ||
//     (aiPredictor === "co3" && userPlayer === "oo") ||
//     (aiPredictor === "cc0" && userPlayer === "cc") ||
//     (aiPredictor === "cc1" && userPlayer === "oc") ||
//     (aiPredictor === "cc2" && userPlayer === "oo")
//   ) {
//     return (winner.textContent = "You WIN!!");
//     setGameOver();
//   } else {
//     return (no_winner.textContent = "No winner");
//     swapPlayer();
//   }
// }

function setGameOver() {
  isAlPredictor = true;
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Do you want to play again?";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", swapPlayer);
}

function game() {
  alert("Welcome to the game");
  // do {
  newRoundStarted();
  // isPlayerPredictor = !isPlayerPredictor;

  // } while (true);
}

function newRoundStarted() {
  if (isPlayerPredictor) {
    alertMessage.textContent = "You are the predictor, what is your input?";
    console.log(" User is the predictor");
    // alert("You are the predictor, what is your input?");
  } else {
    // alert("AI is the predictor, what is your input?");
    alertMessage.textContent = "AI is the predictor, what is your input?";
    console.log(" AI is the predictor");
  }
}

function main() {
  startGame.addEventListener("click", function() {
    game();
  });
}
main();

function inputValidation() {
  inputValue = guessField.value.toLowerCase();
  console.log(
    "inputValidation called: input is " +
      inputValue +
      " and isPlayerPredictor is " +
      isPlayerPredictor
  );

  if (isPlayerPredictor) {
    let inputAllow = /^[oc](?:)[oc][01234]$/;
    const validate = document.getElementById("textField");

    if (inputValue !== "") {
      if (inputValue.length <= 3) {
        if (inputValue.match(inputAllow)) {
          validate.textContent = "good input";
          validate.style.color = "green";
        } else {
          validate.textContent =
            "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).";
          validate.style.color = "red";
        }
      } else {
        validate.textContent =
          "Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).";
        validate.style.color = "red";
      }
    } else {
      validate.textContent = "empty input";
      validate.style.color = "red";
    }
  } else {
    let inputAllow = /^[oc](?:)[oc]/;
    const validate = document.getElementById("textField");
    if (inputValue !== "") {
      if (inputValue.length <= 2) {
        if (inputValue.match(inputAllow)) {
          validate.textContent = "good input";
          validate.style.color = "green";
        } else {
          validate.textContent =
            "Bad input: no prediction expected, you are not the predictor.";
          validate.style.color = "red";
        }
      } else {
        validate.textContent =
          "Bad input: no prediction expected, you are not the predictor.";
        validate.style.color = "red";
      }
    } else {
      validate.textContent = "empty input";
      validate.style.color = "red";
    }
  }
  checkWinner();
  newRoundStarted();
}

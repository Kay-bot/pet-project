const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const guesses = document.querySelector(".guesses");
const winner = document.querySelector(".winner");
const no_winner = document.querySelector(".no-winner");
const isPlayerPredictor = false;
const isAiPredictor = false;
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

function checkOpen() {
  const aiPlayer = getAiAsPlayer();
  let userPredictor = guessField.value;
  guesses.textContent += userPredictor;
  guessField.value = "";
  guessField.focus();

  if (
    (userPredictor === "oo4" && aiPlayer === "oo") ||
    (userPredictor === "oo3" && aiPlayer === "oc") ||
    (userPredictor === "oo2" && aiPlayer === "cc") ||
    (userPredictor === "oc1" && aiPlayer === "cc") ||
    (userPredictor === "oc3" && aiPlayer === "oo") ||
    (userPredictor === "oc2" && aiPlayer === "co") ||
    (userPredictor === "oc1" && aiPlayer === "cc") ||
    (userPredictor === "co1" && aiPlayer === "cc") ||
    (userPredictor === "co2" && aiPlayer === "oc") ||
    (userPredictor === "co3" && aiPlayer === "oo") ||
    (userPredictor === "cc0" && aiPlayer === "cc") ||
    (userPredictor === "cc1" && aiPlayer === "oc") ||
    (userPredictor === "cc2" && aiPlayer === "oo")
  ) {
    return (winner.textContent = "You WIN!!");
    // setGameOver();
  } else {
    return (no_winner.textContent = "No winner");
    // swapPlayer();
  }
}

guessSubmit.addEventListener("click", checkOpen);

// function swapPlayer() {
//   const resetParas = document.querySelectorAll(".resultParas p");
//   for (let i = 0; i < resetParas.length; i++) {
//     resetParas[i].textContent = "";
//   }
//   const aiPredictor = getAiAsPredictor();
//   let userPlayer = guessField.value;
//   guesses.textContent += userPlayer;

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

// function setGameOver() {
//   isAlPredictor = true;
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement("button");
//   resetButton.textContent = "Do you want to play again?";
//   document.body.appendChild(resetButton);
//   resetButton.addEventListener("click", swapPlayer);
// }

function inputValidation(inputTxt) {
  if ((isPlayerPredictor = true)) {
    const inputAllow = ["o", "c", "O", "C", 0, 1, 2, 3, 4];
    const validate = document.getElementById("textField");
    if (inputTxt.value !== "") {
      if (inputTxt.value.length <= 4) {
        if (inputTxt.value.match(inputAllow)) {
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
    alert("Bad input: no prediction expected, you are not the predictor");
  }
}

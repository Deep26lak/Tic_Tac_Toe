let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnO = true;
let newGame = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let main = document.querySelector(".main");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "X";
      box.style.color = "#FFBA08";
      turnO = false;
    } else {
      box.innerHTML = "O";
      box.style.color = "#D00000";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enabledBox();
  main.classList.remove("mainHide");
  msgContainer.classList.add("hide");
};

const enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is  ${winner}`;
  disabledBox();
  main.classList.add("mainHide");
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1) {
        // console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

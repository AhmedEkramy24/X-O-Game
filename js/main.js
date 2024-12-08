let turn = "x";
let squares = Array.from(document.getElementsByClassName("square"));
let title = document.querySelector(".title");

squares.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (turn === "x" && item.innerHTML == "") {
      item.innerHTML = "X";
      turn = "o";
      title.innerHTML = "O Turn";
    } else if (turn === "o" && item.innerHTML == "") {
      item.innerHTML = "O";
      turn = "x";
      title.innerHTML = "X Turn";
    }
    winner();
  });
});

function winner() {
  let values = [];
  for (let i = 0; i < squares.length; i++) {
    values[i] = squares[i].innerHTML;
  }
  if (values[0] == values[1] && values[1] == values[2] && values[1] != "") {
    styleWinner(0, 1, 2);
    checkWinner();
    reloadGame();
  } else if (
    values[2] == values[5] &&
    values[5] == values[8] &&
    values[5] != ""
  ) {
    styleWinner(2, 5, 8);
    checkWinner();
    reloadGame();
  } else if (
    values[2] == values[4] &&
    values[4] == values[6] &&
    values[4] != ""
  ) {
    styleWinner(2, 4, 6);
    checkWinner();
    reloadGame();
  } else if (
    values[1] == values[4] &&
    values[4] == values[7] &&
    values[4] != ""
  ) {
    styleWinner(1, 4, 7);
    checkWinner();
    reloadGame();
  } else if (
    values[3] == values[4] &&
    values[4] == values[5] &&
    values[4] != ""
  ) {
    styleWinner(3, 4, 5);
    checkWinner();
    reloadGame();
  } else if (
    values[6] == values[7] &&
    values[7] == values[8] &&
    values[7] != ""
  ) {
    styleWinner(6, 7, 8);
    checkWinner();
    reloadGame();
  } else if (
    values[0] == values[4] &&
    values[4] == values[8] &&
    values[4] != ""
  ) {
    styleWinner(0, 4, 8);
    checkWinner();
    reloadGame();
  } else if (
    values[0] == values[3] &&
    values[3] == values[6] &&
    values[3] != ""
  ) {
    styleWinner(0, 3, 6);
    checkWinner();
    reloadGame();
  } else if (
    values[0] &&
    values[1] &&
    values[2] &&
    values[3] &&
    values[4] &&
    values[5] &&
    values[6] &&
    values[7] &&
    values[8]
  ) {
    title.innerHTML = "DRAW";
    squares.forEach((item) => {
      item.style.backgroundColor = "black";
      reloadGame();
    });
  }
}

function styleWinner(a, b, c) {
  squares[a].style.backgroundColor = "#000";
  squares[b].style.backgroundColor = "#000";
  squares[c].style.backgroundColor = "#000";
}

function checkWinner() {
  if (turn == "o") {
    title.innerHTML = "X is Winning";
  } else {
    title.innerHTML = "O is Winning";
  }
}

function reloadGame() {
  setTimeout(function () {
    squares.forEach((item) => {
      item.innerHTML = "";
      item.style.backgroundColor = "teal";
    });
    title.innerHTML = "<span>X O</span> Game";
    turn = "x";
  }, 2000);
}

let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const actions = ["/", "X", "-", "+"];

const screen = document.querySelector(".calc-display p");

const clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  screen.textContent = 0;
};

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (e) => {
  if (!e.target.classList.contains("btn")) return;
  if (e.target.classList.contains("ac")) return;
  screen.textContent = "";
  const key = e.target.textContent;
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      screen.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      screen.textContent = b;
    } else {
      b += key;
      screen.textContent = b;
    }
  }
  if (actions.includes(key)) {
    sign = key;
    screen.textContent = sign;
  }
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        screen.textContent = a;
        break;
      case "-":
        a = a - b;
        screen.textContent = a;
        break;
      case "X":
        a = a * b;
        screen.textContent = a;
        break;
      case "/":
        if (b === "0") {
          screen.textContent = "!error";
          a = "";
          b = "";
          sign = "";
          break;
        } else {
          a = a / b;
        }
        break;
    }
    finish = true;
  }
};

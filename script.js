const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const exponential = function (a, b) {
  return a ** b;
};

const negate = function (a) {
  return -a;
};

const operate = function (a, b, operator) {
  res = operator(a, b);
  if (Number.isInteger(res)) {
    return res;
  } else {
    return res.toFixed(1);
  }
};

const display = document.querySelector(".displaybox");

const buttons = document.querySelectorAll(".button");

let term1 = "",
  term2 = "",
  operator = "";
let inputtingTerm2 = false;
let locked = false;
let decimallock = false;
function addToScreen(input) {
  display.innerText += input;
}

function clearScreen() {
  display.innerText = "";
}

function calculate(firstTerm, secondTerm, sign) {
  let operation;
  switch (sign) {
    case "^":
      operation = exponential;
      break;
    case "÷":
      operation = divide;
      break;
    case "×":
      operation = multiply;
      break;
    case "−":
      operation = subtract;
      break;
    case "+":
      operation = add;
      break;
    case "(-)":
      operation = negate;
      break;
  }
  return operate(parseFloat(term1), parseFloat(term2), operation);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //IF USER NEEDS TO SEE MESSAGE
    if (locked) {
      return;
    }
    //IF PRESSING CLEAR BUTTON
    if (btn.classList.contains("clearbutton")) {
      display.innerText = "";
      term1 = "";
      term2 = "";
      operator = "";
    }
    //IF PRESSING DELETE BUTTON
    if (btn.classList.contains("deletebutton")) {
      //IF NOTHING INSIDE YET
      if (display.innerText == "") {
        return;
      }
      display.innerText = display.innerText.slice(
        0,
        display.innerText.length - 1
      );
    }
    //IF PRESSING DECIMAL BUTTON
    if (btn.classList.contains("decimal")) {
      if (inputtingTerm2) {
        display.innerText = "";

        inputtingTerm2 = false;
      }
      if (
        Number.isInteger(parseFloat(display.innerText)) ||
        display.innerText == ""
      ) {
        console.log("made it");
        addToScreen(".");
      } else {
        console.log("unfortunately made it");
        return;
      }
    }
    //IF PRESSING NUMBER BUTTON
    if (btn.classList.contains("number")) {
      //IF TIME FOR TERM2
      if (inputtingTerm2) {
        clearScreen();
        inputtingTerm2 = false;
      }
      if (
        !Number.isInteger(parseFloat(display.innerText)) &&
        display.innerText != ""
      ) {
        console.log("number lock");
        return;
      }
      //if (display.innerText.length <= 10) {
      addToScreen(btn.innerText);
      //}
    }
    //IF PRESSING OPERATOR BUTTON
    if (btn.classList.contains("operater")) {
      //IF TERM1 AND TERM2 INPUTTED
      if (display.innerText != "" && term1 != "") {
        term2 = display.innerText;
        display.innerText = calculate(term1, term2, operator);
        term1 = display.innerText;
        term2 = "";
        operator = btn.innerText;
        inputtingTerm2 = true;
      }
      //IF TERM1 IS INPUTTED ALREADY
      else if (display.innerText != "") {
        console.log(display.innerText);
        //assign term1
        term1 = display.innerText;
        //asign operator
        operator = btn.innerText;
        //get ready to put in term2
        inputtingTerm2 = true;
      }
      //IF NOTHING INPUTTED BEFOREHAND
    }
    //IF PRESSING EQUALS BUTTON
    if (btn.classList.contains("equals")) {
      //IF NOTHING INPUTTED BEFOREHAND
      //IF TERM1 INPUTTED ALREADY
      //IF TERM1 AND TERM2 INPUTTED
      if (display.innerText != "" && term1 != "") {
        term2 = display.innerText;
        if (operator == "÷" && parseFloat(term2) == 0) {
          locked = true;
          display.innerText = "Ooh na na na";
          setTimeout(function () {
            locked = false;
            clearScreen();
          }, 3000);
          return;
        }
        display.innerText = calculate(term1, term2, operator);
        term1 = "";
        term2 = "";
        operator = "";
      }
    }

    console.log("term1 is: " + term1);
    console.log("operator is: " + operator);
    console.log("term2 is: " + term2);
    console.log(Number.isInteger(parseFloat(display.innerText)));
    // if (btn.classList.contains("clearbutton")) {
    //     display.innerText = "";
    //     term1 = "";
    //     term2 = "";
    //     operator = "";
    // }
    // // //if number
    // if (btn.classList.contains("number")) {
    //     //if term1 inputted already
    //     if (operator != "" && inputtingTerm2) {
    //         display.innerText = "";
    //         inputtingTerm2 = false;
    //     }
    //     display.innerText += btn.innerText;
    // }
    // // //if operator
    // if (btn.classList.contains("operater")) {
    //     term1 = display.innerText
    //     //if no first number submitted
    //     if (term1 === "") {
    //         console.log("empty")
    //         return;
    //     }
    //     if (operator != "") {
    //         term2 = display.innerText;
    //     }
    //     operator = btn.innerText;
    //     display.innerText += btn.innerText;

    //     inputtingTerm2 = true;
    // }

    // //if equals
    // if (btn.classList.contains("equals")) {
    //     if (term1 != "" && operator != "") {
    //         term2 = display.innerText;
    //     }
    //     //if both terms filled out
    //     if (term1 != "" && term2 != "" && operator != "") {
    //         console.log("made it");
    //         let operation;
    //         switch (operator) {
    //             case "^":
    //                 operation = exponential;
    //                 break;
    //             case "÷":
    //                 operation = divide;
    //                 break;
    //             case "×":
    //                 operation = multiply;
    //                 break;
    //             case "−":
    //                 operation = subtract;
    //                 break;
    //             case "+":
    //                 operation = add;
    //                 break;
    //             case "(-)":
    //                 operation = negate;
    //                 break;
    //         }
    //         display.innerText = operate(parseInt(term1), parseInt(term2), operation);
    //     }
    // }
    // console.log("term1 is: " + term1);
    // console.log("operator is: " + operator);
    // console.log("term2 is: " + term2);
  });
});

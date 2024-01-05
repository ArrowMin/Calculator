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
  return operator(a, b);
};

const display = document.querySelector(".displaybox")

const buttons = document.querySelectorAll(".button");

let term1 = "", term2 = "", operator = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("clearbutton")) {
            display.innerText = "";
            term1 = "";
            term2 = "";
        }
        //if number
        if (btn.classList.contains("number")) {
            //if term1 inputted already
            if (operator != "") {
                display.innerText = "";
            }
            display.innerText += btn.innerText;
        }
        //if operator
        if (btn.classList.contains("operater")) {
            term1 = display.innerText
            //if no first number submitted
            if (term1 === "") {
                console.log("empty")
                return;
            }
            operator = btn.innerText;
            display.innerText += btn.innerText;
        }

        //if equals
        if (btn.classList.contains("equals")) {
            if (term1 != "" && operator != "") {
                term2 = display.innerText;
            }
            //if both terms filled out
            if (term1 != "" && term2 != "" && operator != "") {
                console.log("made it");
                let operation;
                switch (operator) {
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
                display.innerText = operate(parseInt(term1), parseInt(term2), operation);
            }
        }
    });
});

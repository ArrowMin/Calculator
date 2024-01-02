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
  return a ^ b;
};

const negate = function (a) {
  return -a;
};

const operate = function (a, b, operator) {
  return operator(a, b);
};

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(btn.innerText);
  });
});

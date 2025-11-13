// Calculator functionality
let display1 = document.querySelector("#display1");
let display2 = document.querySelector("#display2");
let Buttons = document.querySelectorAll(".btn");
let allClearBtn = document.querySelector("#all-clear");
let backspaceBtn = document.querySelector("#backspace-btn");
let displayValue = "";

let buttonsArr = Array.from(Buttons);
console.log(buttonsArr);

buttonsArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      displayValue = eval(displayValue);
      display1.value = displayValue;
      display2.value = "";
    } else {
      displayValue += e.target.innerHTML;
      display2.value = displayValue;
      display1.value = "";
    }
  });
});

allClearBtn.addEventListener("click", (e) => {
  displayValue = "";
  display1.value = displayValue;
  display2.value = displayValue;
});

backspaceBtn.addEventListener("click", (e) => {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  display2.value = displayValue;
});

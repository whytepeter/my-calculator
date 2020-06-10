//Get all the elements
let screen = document.querySelector("input"); // the screen
let button = document.querySelectorAll(".btn");

let display = string => {
  value = screen.value;
  screen.value = value + string;
  return screen.value;
};

// displya the value of the button click on the screen
button.forEach(btn => {
  btn.addEventListener("click", e => {
    if (
      btn.classList.contains("operator") ||
      btn.classList.contains("operands")
    ) {
      display(btn.id);
    } else if (btn.id === "delete") {
      backSpace();
    } else if (btn.id === "clear") {
      clearbtn();
    } else if (btn.id === "equalto") {
      evalute();
    }
  });
});

// the equalto... calculate the operations and display it to the screen
let evalute = () => {
  screen.value = eval(screen.value);
};

// delete button
let backSpace = () => {
  let lastValue = screen.value.length - 1;
  let newScreen = screen.value.substring(0, lastValue);
  screen.value = newScreen;
};

//clear button
let clearbtn = () => {
  screen.value = "";
};

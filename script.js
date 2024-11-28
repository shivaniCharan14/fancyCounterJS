"use strict";

const resetBtn = document.querySelector(".counter__reset-btn");
const count = document.querySelector("#counter__value");
const counterContainer = document.querySelector(".counter-container");
const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const counterHeading = document.querySelector(".counter__heading");

let countChange = 0;
const MAX_LIMIT = 5;
function updateDisplay() {
  count.textContent = +countChange;
}
// Reset button functionality
function reset() {
  countChange = 0; // Reset the count variable
  updateDisplay(); // Update the display
  counterContainer.style.backgroundColor = "darkseagreen"; // Change background
  counterHeading.textContent = "Fancy Counter"; // Reset the counter
  incrementBtn.disabled = false; // Enable increment button again
}
resetBtn.addEventListener("click", reset);

// Function to handle increment and decrement
function change(btn, delta) {
  btn.addEventListener("click", () => {
    if (countChange + delta < 0) {
      countChange = 0;
    } else if (countChange + delta > MAX_LIMIT) {
      counterContainer.style.backgroundColor = "red"; // Change background color if count exceeds 5
      counterHeading.textContent = `LIMIT! BUY PRO FOR>5`;
      incrementBtn.disabled = true; // Disable increment button if count exceeds 5
      decrementBtn.disabled = true; // Disable decrement button if count exceeds 5
      countChange = 0;
    } else {
      countChange += delta;
    }

    updateDisplay(); // Update the displayed count
  });
}

// Attach increment and decrement functionalities
change(decrementBtn, -1);
change(incrementBtn, +1);

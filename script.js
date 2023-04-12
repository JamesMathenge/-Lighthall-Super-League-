// Get the button and click count elements from the HTML document
const clickButton = document.getElementById("btn");
const clickCount = document.getElementById("count");

// Retrieve the click count value from localStorage, or set it to 0 if it doesn't exist
let count = localStorage.getItem("count") || 0;

// Update the click count element with the current count value
clickCount.textContent = count;

// Add a click event listener to the button
clickButton.addEventListener("click", function() {
  // Increment the count value and update the click count element
  count++;
  clickCount.textContent = count;
  
  // Store the updated count value in localStorage
  localStorage.setItem("count", count);
});

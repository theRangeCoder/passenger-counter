// Adding some functionality to the button
// Initialize the count as 0
let count = 0;

// Listen for clicks on the increment button (The 'onclick' event listener in html)

// Increment the count variable when the button is clicked (and log it out)
function increment() {
    count+=1;
    
    // change the count-el in the HTML to reflect the new count
    document.getElementById("count-el").innerText = count; // "count-el" represents the argument of the function here
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count);
}


// Adding some functionality to the button
// Initialize the count as 0
let count = 0;

// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

// Listen for clicks on the increment button (The 'onclick' event listener in html)

// Increment the count variable when the button is clicked (and log it out)
function increment() {
    count+=1;
    
    // change the count-el in the HTML to reflect the new count
    document.getElementById("count-el").textContent = count; // "count-el" represents the argument of the function here
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let disp = " " + count + " - ";
    
    // 3. Render the variable in the saveEl element using innerText
    saveEl.textContent += disp;

    console.log(count);
}

// Adding a reset() function to reset the count after a train has left the station, to count the passengers from 0 again
function reset() {
    count=0;
    document.getElementById("count-el").textContent = count;
}
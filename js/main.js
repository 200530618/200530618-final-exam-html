console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/* Name- Sourabh Singh
  Student Number - 200530618
  */
 
// Step 2: Create a block scoped, immutable variable that stores an empty array
const x = [];

// Step 3: Add the 3 people's names to the array
x.push("Sourabh");
x.push("Nitin");
x.push("Dev");
// Step 4: Remove the second array item from the array
x.splice(1, 1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
const final = x.map(function (C){
    return c.toLocaleUpperCase();
}
);

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
let title = document.querySelector("aside h2");
title.addEventListener("click", function(){
    alert("Hello from Boo the World's Cutest Dog!")
});
/* Part 2 */
/*Writes to the console*/
console.log("PART 2");
/*For loop from 1 to 20, that exits when 21 is reached. Writes "i" to console.*/
for (var i = 1; i < 21; i++) {
   console.log(i);

}
/* Part 3 */

/*Makes a list of numbers*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/*Writes to the console*/
console.log("PART 3");
/*For loop that iterates through "numbers".*/
for (var i = 0; i < numbers.length; i++) {
   /*If statement that checks if x modulo 3.
   If "x modulo 3" equals zero, x is divisible by 3 and "eple" is logged to console.*/
   if (numbers[i] % 3 == 0) {
      if (numbers[i] % 5 == 0) {
         console.log("You can make 'eplekake'!");
      } else {
         console.log("eple");
      }
   } else if (numbers[i] % 5 == 0) {
      console.log("kake");
   }
   /*Else statement is executed when if statment is not true.*/
   else {
      console.log(numbers[i]);
   }
}

/* Part 4 */
//Accesses title element and sets text
document.getElementById("title").innerText = "Hello, JavaScript";
console.log("PART 4 runs smoothly.");

/* Part 5 */

//Declaring variables for later use, variables for accessing elements in the HTML
var displayButton = document.getElementById("display");
var visibilityButton = document.getElementById("visibility");
var resetButton = document.getElementById("reset");

var magic = document.getElementById("magic");

//Adding functionality when the buttons are clicked
displayButton.addEventListener("click", changeDisplay)
visibilityButton.addEventListener("click", changeVisibility)
resetButton.addEventListener("click", reset)

//The actual function that changes the display attribute
function changeDisplay() {
   magic.style.display = "none";
}

//The actual function that changes the visibility and display attributes
function changeVisibility() {
   magic.style.visibility = "hidden";
   magic.style.display = "block";
}
//The reset function
function reset() {
   magic.style.display = "block";
   magic.style.visibility = "visible";
}

console.log("PART 5 runs smoothly.");

/* Part 6 */
const technologies = [
   "HTML5",
   "CSS3",
   "JavaScript",
   "Python",
   "Java",
   "AJAX",
   "JSON",
   "React",
   "Angular",
   "Node.js",
   "Bootstrap"
];

//create variable to access the unordered tech-list
var techList = document.getElementById("tech");
//for loop that loops through the elements in technologies
for (i in technologies) {
   //we need a new list-element for each append
   techList.innerHTML += "<li></li>"
   //appends the text to the list
   techList.append(technologies[i]);
}

console.log("PART 6 runs smoothly.");

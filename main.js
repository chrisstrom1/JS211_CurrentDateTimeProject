// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let a = "500"

console.log(a)


// Write a JavaScript program to convert a string to the number.
var b = 16
console.log(b.toString(), b)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  function checkDataType(value) {
    if (typeof value === "boolean") {
      return "Boolean";
    } else if (value === null) {
      return "Null";
    } else if (typeof value === "undefined") {
      return "Undefined";
    } else if (typeof value === "number") {
      if (isNaN(value)) {
        return "NaN";
      } else {
        return "Number";
      }
    } else if (typeof value === "string") {
      return "String";
    } else {
      return "Unknown";
    }
  }
  
  // Test different data types
  const values = [
    true,
    false,
    null,
    undefined,
    42,
    "Hello, World!",
    NaN,
    {},
    [],
  ];
  
  values.forEach((value) => {
    console.log(`${value} is of type: ${checkDataType(value)}`);
  });


  let function1 = function(){  //the input to your function, goes inside your parenthesis
//the code you want executed goes inside the braces
  
}

let function2 = function(name){  //instructions are you should expect a name
  console.log("Hello " +name);   //combine the word "hello" with the name they give you plus the word hello

}
function1();  //this is how you ask your program to execute the function
function2("bob");
function2("Mary");
function2("Nonya");
let x = 'Mike';
function2(x);

// Write a JavaScript program that adds 2 numbers together.

function add(num1, num2){

  return num1+num2
}


// Write a JavaScript program that runs only when 2 things are true.
function bothConditionsAreTrue(condition1, condition2) {
  return condition1 && condition2;
}

const condition1 = true; // Change this to your first condition
const condition2 = true; // Change this to your second condition

if (bothConditionsAreTrue(condition1, condition2)) {
  // Code to run when both conditions are true
  console.log("Both conditions are true. Running the program.");
} else {
  // Code to run when at least one condition is false
  console.log("At least one condition is false. Program not executed.");
}




// Write a JavaScript program that runs when 1 of 2 things are true.


const condition1 = false; // Change this to your first condition
const condition2 = true; // Change this to your second condition

// Check if at least one condition is true
if (condition1 || condition2) {
  // Code to run when at least one condition is true
  console.log("At least one condition is true. Running the program.");
} else {
  // Code to run when both conditions are false
  console.log("Both conditions are false. Program not executed.");
}
// Write a JavaScript program that runs when both things are not true.  
const test1 = false; // Change this to your first condition
const test2 = false; // Change this to your second condition

// Check if both conditions are not true (i.e., both are false)
if (!test1 && !test2) {
  // Code to run when both conditions are not true
  console.log("Both conditions are not true. Running the program.");
} else {
  // Code to run when at least one condition is true
  console.log("At least one condition is true. Program not executed.");
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

function toLetterGrader(x){
  if (x > 79)
  return 'A'
  else if (x > 79)
  return 'B'
   else if (x > 69)
  return 'C'
   else 
  return 'F'
 


x = toLetterGrader(70)
console.log(x)
}
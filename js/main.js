// CODECADEMY JS RECURSION - https://www.codecademy.com/courses/javascript-lesson-205/0/1

// 01/26 ----- Define function multiplyBy10()
function multiplyBy10(number) { 
    return number * 10;
}
console.log(multiplyBy10(4))


// 02/26 ----- Write a for loop that counts from one to ten and logs each integer in the console.
for (var i = 0; i <= 10; i++) { console.log(i) }


// 03/26 ----- Define the function countTo and give it the parameter int (for integer).  Within your function definition, copy and paste the for loop from the last exercise.  Change the conditions of the for loop to ensure that it stops when i is equal to the parameter int.  At the end of your code, call the function with any integer you like as an argument.
function countTo(int) {
    for (var i = 0; i <= int; i++) { console.log(i) }    
}
countTo(5)


// 04/26 ----- Complete the definition of multiplesOf10() by adding a for loop.  The for loop should start with i = 1 and end when i is equal to the value of limit.  Within the for loop, call the function multiplyBy10() and pass it the variable i as an argument.  Finally, call the function multiplesOf10() at the end of your code, passing any integer you like as an argument.
function multiplyByA10(number) {
  console.log(number * 10);
}
function multiplesOf10(limit) {
  // Put your for loop here
  for (var i = 1; i <= limit; i++) { multiplyByA10(i) }
}
// Call the function multiplesOf10() on any integer
multiplesOf10(20)


// 05/26 ----- At the end of the code, call the function factorial() on the integer 10.
function factorial(n) {
  if (n === 0) { return 1; }  
  // This is it! Recursion!!
  return n * factorial(n - 1);
}
factorial(10)


// 06/26 ----- 
function factorial2(n) {  
  // This is our Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) { return 1; }  
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial2(n - 1);
}
factorial2(3)


// 07/26 ----- Within the first if statement (our termination condition), write a message to the console indicating that negative numbers are not allowed.
function factorial3(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    console.log('negative numbers are not allowed')
    return
  }
  // Base case
  if (n === 0) { return 1; }
  // Recursive case
  return n * factorial3(n -1)
}
factorial3(-1);
factorial3(5);


// 08/26 ----- Press Run.  Hmm... something is wrong.  Look closely at the last line in the factorial function definition, and change it so that the factorial works properly. 
function factorial(n) {
  // Termination condition to prevent infinite recursion
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return;
  }
  // Base case
  if (n === 0) { return 1; }
  // What's wrong with this picture? Why won't this recursion work?
  return n * factorial(n - 1);
}
factorial(6);


// 09/26 ----- 

// 10/26 ----- 

// 11/26 ----- 

// 12/26 ----- 

// 13/26 ----- 

// 14/26 ----- 

// 15/26 ----- 

// 16/26 ----- 

// 17/26 ----- 

// 18/26 ----- 

// 19/26 ----- 

// 20/26 ----- 

// 21/26 ----- 

// 22/26 ----- 

// 23/26 ----- 

// 24/26 ----- 

// 25/26 ----- 

// 26/26 ----- 
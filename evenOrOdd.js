/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function evenOrOdd(number) {
    console.log(Number.isInteger(number/2));
  if(Number.isInteger(number/2)) {
    return "Even"
  }
  if (!Number.isInteger(number/2)) {
    return "Odd"
  }
  
}

console.log(evenOrOdd(4));

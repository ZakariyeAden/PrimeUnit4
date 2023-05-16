console.log("Hello World");

// ***********************
// ******* Functions *******
// ***********************

// Functions are another tool we use to run the same code over and over again without having to duplicate it. We'll start with the basic concept of a function and then move into how to use them in your code.

function logger(){
  console.log('function from logger');
}
// Taking two arguments or parameter
function actualMath(num1, num0){
  console.log('In actualMath:', num0, num1);
  let answer = num0 * num1;
  return answer;
}
// Returning a variable or value
function mathExample(){
  console.log('In Mathexample');
  let answer = 3 * 9;
  return answer;
}
// Returning
function returner(){
  console.log('In returner');
  return true;
}
logger();
logger();
returner();

console.log('returning returner', returner());
console.log('returning mathExample', mathExample());
console.log('returning actualMath 4 & 6:', actualMath(4, 6));
console.log('returning actualMath 0.123 & 654:', actualMath(0.123 , 654));
console.log('returning actualMath 1 & 2:', actualMath(1 , 2));
console.log('returning actualMath 327 & 81.3:', actualMath(327 , 81.3));

// ***************************
// Putting Everything together or Review from week
// ***************************
const seatsInCar = 5;
let passenger = [];
let tankFull = true;

function enoughSeats(){
  console.log('in enoughSeats');

  if(seatsInCar >= passenger.length){
    //end enough seats
    return true;
  }else {
    //end not enough seats
    return false;
  }
}

function getInCar(nameofPassenger){
  console.log('in getInCar', nameofPassenger);
  passenger.push(nameofPassenger);
  return passenger;
}

function readyForTrip(){
  if(enoughSeats() && tankFull){
    return true;
  } else {
    return false;
  }
}
getInCar('You');
getInCar('Zakariye');
getInCar('Commander Wisdom');
getInCar('Mo');


console.log('Enough seats?', enoughSeats())
console.log('Are We Ready for Trip?', readyForTrip());
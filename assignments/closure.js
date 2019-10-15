// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let name = "Russ";
function closureOfYourOwnCreation() {
  return "my name is " + name;
};
console.log(closureOfYourOwnCreation());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
let count = 0;
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  //let count = 0; // I have to put this out side the funtion because of scope but instrutions say here?

  // 2- Declare a function `counter`. It should increment and return `count`.
  function counter() {
    count = count + 1;
    return count; //?? is this what they mean?
  };
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!

  // 3- Return the `counter` function.
  return counter();
};

// Example usage: const myCounter = counterMaker();
//const myCounter = counterMaker();

// myCounter(); // 1
console.log(counterMaker());

// myCounter(); // 2
console.log(counterMaker());
//console.log(myCounter);// wont let me call it as a funtion?




// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
let count2 = 0;
const counterMaker2 = () => {
  function counter() {
    if (count2 < 10) {
      count2 = count2 + 1;
    }
    else {
      count2 = 1;
    }

    return count2;
  };
  return counter();
};
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());
console.log(counterMaker2());




// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
let count3 = 0;
const counterFactory = () => {

  return {
    increment: function () {
      return count3 + 1
    },
    decrement: function () {
      return count3 - 1
    },
  };

};

const testit = counterFactory();
console.log(testit.increment());
console.log(testit.increment());
console.log(testit.decrement());
/*still wont keep the count when as a var*/

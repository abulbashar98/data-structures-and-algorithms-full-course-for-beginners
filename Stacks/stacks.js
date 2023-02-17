/*-----------------------------*\
   Stacks -> Last in First out
\*-----------------------------*/

// functions: push, pop, peek, length

// Peek: to see the last element of a stack without removing it like pop does

// NOTE 1: Use of Array as a stack to Solve Palindrome Problem

const letters = []; // This is the Stack

const word = "racecar";

let rWord = "";

// Create Stack using letters from Word
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Create rWord or Reversed Word using pop method to Stack
for (let i = 0; i < word.length; i++) {
  rWord += letters.pop();
}

if (word === rWord) {
  console.log(word + " is a Palindrome");
} else {
  console.log(word + " is not a Palindrome");
}

// NOTE 2: Now we are going to create a Stack Class to Build our own
//         stack method implementations... To gain a better understanding
//         we are not not going to use our stack Class always, most often
//         we are going to use Array as a Stack. And Built in Array methods
//         for Stack Algorithms...

const Stack = function () {
  this.count = 0;
  this.storage = {};

  // Creating a method to Add a value to the end of our Stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Creating a method to Remove the last Item of our Stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Creating a method to View the Length of our Stack class
  this.size = function () {
    return this.count;
  };

  // Creating a method to View the last property of our Stack Class
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

const myStack = new Stack();

myStack.push(10);
myStack.push(17);
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push("DSA");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());

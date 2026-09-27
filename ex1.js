
//1.
//Predict the output before running the code.
//console.log(name); the output:undefined
//console.log(y); the output:20;

//2.
//hoisting and var :the variable declaration is moved to the top of its function 
//or global scope during the compilation phase, and it is automatically initialized with a value of undefined.


//3.Identify the difference between function scope and block scope.
//Function scope means that variables declared within a function are only accessible within that function.
//Block scope means that variables declared within a block  are only accessible within that block.


//4.Rewrite the example using let where appropriate.






let name = "Jone";

function test() {
  let x = 10;
  if (true) {
    let y = 20;
      console.log(y);

  }
  console.log(x);
}

test();



// console.log(name);
// var name = "Jone";

// function test() {
//   var x = 10;
//   if (true) {
//     var y = 20;
//   }
//   console.log(y);
// }

// test();
// // console.log(x);

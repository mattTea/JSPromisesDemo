// 1.
console.log('1');
console.log('2');


// 2.
setTimeout(function () { // first argument is a callback function
  console.log('1');
}, 2000); // time to wait in ms

console.log('2');

// setTimeout is called... give me 2 seconds, then run this function I've passed to you
// JS doesn't block, so moves on through the program

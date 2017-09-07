// 1. create function
function doWorkPromise(data) {

}


// 2. Within the function we create the Promise and return it so the caller can use it
// (A Promise is a function that takes a function as its argument)
function doWorkPromise(data) {
  return new Promise(function () {

  });
}


// 3. This function gets passed our resolve and reject callbacks - our pass or fail arguments
function doWorkPromise(data) {
  return new Promise(function (resolve, reject) {
    resolve('everything worked!'); // comment out one or other for demo
    reject('something bad happened');
  });
}
//can only pass one piece of data to resolve or reject, so use object as you can then have multiple attributes
//inside the promise you can only call resolve or reject once




// 4. Still call the function in the same way as normal
doWorkPromise('some data')


// 5. We then use .then() - a 'chaining' method
doWorkPromise('some data').then() {

});


// 6. then() takes our resolve & reject callbacks as functions - the first fired if everything works
doWorkPromise('some data').then(function (data) {
  console.log(data);
});
// run now and the Promise just calls resolve right away, so 'everything worked' prints


// 7. If calling reject in the Promise have to add a second argument to .then() - this is also a function
doWorkPromise('some data').then(function (data) {
  console.log(data);
}, function () {

});


// 8. this gets passed our error
doWorkPromise('some data').then(function (data) {
  console.log(data);
}, function (error) {
  console.log(error);
});
// run now and we have 2 functions - one for when things go right, one for when things go wrong


//benefit of Promises - one of the callbacks (resolve or reject) can only be called at most once...
//in a regular callback you can write code that might make a call many times (which is not ideal - why?)

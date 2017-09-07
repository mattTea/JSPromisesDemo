function doWorkPromise(data) {
  return new Promise(function (resolve, reject) {
    resolve('everything worked!');
    reject('something bad happened');
  });
}

doWorkPromise('some data').then(function (data) {
  console.log(data);
}, function (error) {
  console.log(error);
});

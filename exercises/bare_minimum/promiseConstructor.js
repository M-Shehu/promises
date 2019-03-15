/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var callbackReview = require('./callbackReview');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  
  var promiseExcercise = new Promise((resolve, reject) => {
    callbackReview.pluckFirstLineFromFile(filePath, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });

  
  promiseExcercise.then((firstLine) => {
    // console.log(firstLine);
  }).catch((error) => {
    // console.log(error);
  });

  return promiseExcercise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var promiseExcercise = new Promise((resolve, reject) => {
    callbackReview.getStatusCode(url, (err, statusCode) => {
      if (err) {
        reject(err);
      } else {
        resolve(statusCode);
      }
    });
  });


  promiseExcercise.then((sC) => {}).catch((error) => {
    // console.log(error);
  });


  return promiseExcercise;

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

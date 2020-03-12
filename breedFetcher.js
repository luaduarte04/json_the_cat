const request = require("request");

// get info and make an object
const fetchBreedDescription = function(breedName, callback) {
  //user input
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  request(`${url}${breedName}`, function(error, response, body) {
    // If something goes wrong
    if (error) {
      callback(error, null);
      // return `error: , ${error.code}`;
    } else if (JSON.parse(body).status < 200 || JSON.parse(body).status > 299) {
      callback('NoooOOOooOO! something went meawy meawy wrong!', null);
      // return `NoooOOOooOO! something went meawy meawy wrong!`;
    } else {
      // If all goes well
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, `Opsie! ${breedName} does not yet exist!`);
      } else {
        callback(null, data[0]["description"]);
      }
    }
    
  });
};

// fetchBreedDescription(catBreed, outPutInfo);

module.exports = { fetchBreedDescription };


// if (error) {
//   console.error('error:', error.code);
// } else if (JSON.parse(body).status < 200 || JSON.parse(body).status > 299) {
//   console.log('NoooOOOooOO! something went meawy meawy wrong!');
//   console.log('This is a purrfect console.log message');
// } 


// console.error('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//console.log('body:', body); // Print the HTML for the Google homepage.
//console.log(typeof body);


// console.log(data);
// console.log(body);
// console.log(data[Object.keys(data)[0]]);
// console.log(typeof data);

// API
//  https://api.thecatapi.com/v1/breeds/search
//  https://docs.thecatapi.com/api-reference/breeds/breeds-search
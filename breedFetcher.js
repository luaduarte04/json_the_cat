const request = require("request");

let cmdArgs = process.argv.slice(2);

//user input
let url = 'https://api.thecatapi.com/v11/breeds/search?q=';
let querySearch = cmdArgs[0];

request(`${url}${querySearch}`, function(error, response, body) {
  if (error) {
    console.error('error:', error.code);
  } else if (JSON.parse(body).status < 200 || JSON.parse(body).status > 299) {
    console.log('NoooOOOooOO! something went meawy meawy wrong!');
    console.log('This is a purrfect console.log message');
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return console.log(`Opsie! ${querySearch} does not yet exist!`);
    } else {
      console.log(data[0]["description"]);
    }
  }
});


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
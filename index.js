const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv.slice(2);
//let querySearch = cmdArgs[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
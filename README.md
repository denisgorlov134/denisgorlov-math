# denisgorlov-math

This Node.js module provides several interesting functions.

## Installation

You can install this module using npm: `npm install denisgorlov-math`

## Usage

```javascript
const myModule = require('interesting-module');

// Get a random Chuck Norris joke
myModule.getRandomChuckNorrisJoke()
    .then(joke => console.log(joke))
    .catch(err => console.error(err));

// Generate a random string of length 10
console.log(myModule.generateRandomString(10)); 

// Parse a CSV file and log the data
myModule.parseCSVFile('path/to/file.csv')
    .then(data => console.log(data))
    .catch(err => console.error(err));
```




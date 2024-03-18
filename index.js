const axios = require('axios');
const { generate } = require('randomstring');
const { parse } = require('fast-csv');
const fs = require('fs');

// Function to fetch a random Chuck Norris joke
async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        throw new Error('Failed to fetch Chuck Norris joke');
    }
}

// Function to generate a random string
function generateRandomString(length) {
    return generate({
        length: length,
        charset: 'alphabetic'
    });
}

// Function to parse a CSV file
function parseCSVFile(filePath) {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data));
    });
}

module.exports = {
    getRandomChuckNorrisJoke,
    generateRandomString,
    parseCSVFile
};

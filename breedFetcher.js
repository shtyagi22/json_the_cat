const request = require('request');
const fs = require('fs');
//var args = process.argv.slice(2);
//const breed = args[0];

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib'


const breedFetcher = function (url) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  });
}
breedFetcher(url)


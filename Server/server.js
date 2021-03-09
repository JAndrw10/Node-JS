//part 1 #4 in server.js import path and fs
const path = require('path');
const fs = require('fs');

// let request = require('request');
// const { Console } = require('console');


// array of 5 chirp objects
let chirpTrends = [
    {
        username: "The Joker",
        message: "People are starting to notice."
    },
    {
        username: "No country for old men",
        message: " whats the most you've ever lost on a coin toss?"
    },
    {
        username: "Raymond Reddington",
        message: "You can’t do every silly thing you want to in life. You have to make choices and be happy with them."
    },
    {
        username: "Syrio Forel",
        message: "There is only one thing we say to death: Not Today."
    },
    {
        username: "Tyrion",
        message: "That's what I do: I drink and I know things."
    }
];

// write the array to a file in the root of the project called chirps.json
// JS => JSON JSON.stringify()
// JSON => JS JSON.parse()

fs.writeFile('chirps.json', JSON.stringify(chirpTrends), function (err) {
    if (err) throw err;
    console.log('Saved!'); // could also put chirps instead of Saved! to meet lab requirements
});

//#5 add code to server.js that reads the file and outputs the chirps to the console
//JSON => JS JSON.parse()
fs.readFile('chirps.json', function (err, data) {
    if(err) throw err;
    console.log(JSON.parse(data));
    });

//#5 add code to server.js that reads the file and outputs the chirps to the console
//fs.readFile('chirptrends.json', function(err, data) {
// if (err) throw err;
//  console.log(JSON.parse(data));
// });








// console.log(path.join__dirname, 'chirps.json');

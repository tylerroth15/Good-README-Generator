var inquirer = require("inquirer");
var fs = require('fs');

const questions = [
    {
    type: "input",
    name: "title",
    message: "What is your project title?"
}, 
{
    type: "input",
    name: "description",
    message: "Give a brief description of your project?"
},
];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();


inquirer
        .prompt(questions).then(function(data) {console.log("yayayay")})
    

        
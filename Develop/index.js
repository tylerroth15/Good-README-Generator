const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');
// const markdown =  require('./utils/generateMarkdown');
const credits = [""]; 
const faq = "Using the email link below, please reach out with any questions.";


const questions = [
{
    type: "input",
    name: "username",
    message: "What is your GitHub Username?",
},
{
    type: "input",
    name: "repo",
    message: "What is your Repo title?",
}, 
{
    type: "input",
    name: "description",
    message:"Write a brief description of your project.",
},
{
    type: "input",
    name: "install",
    message: "What command should be used to install dependencies?",
},
{
    type: "input",
    name: "tests",
    message: "What command should be used to run tests?",
},
{
    type: "input",
    name: "usage",
    message: "What should a user know about installing this repo?"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address."
}
];

inquirer.prompt(questions)
.then(({username, repo, description, install, tests, usage, email}) =>{
    const queryUrl = `https://api.github.com/repos/${username}/${repo}`;
        const contribUrl = `https://api.github.com/repos/${username}/${repo}/contributors`;
        axios

    .get(queryUrl)
    .then(res =>{
        axios
        .get(contribUrl)
        .then(data => {
            for (let i=0; i < data.data.length; i++){
                credits.push(data.data[i].login);
                console.log(credits);

            }
                
        })
        const readme =
`
# ${repo}
#### Author: ${username}

${description}

### Open Issues <img src= "https://img.shields.io/github/issues/${username}/${repo}">

# Table of Contents
* [Installation](#installation) 
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Contriubtors](#contributors)
* [License](#license)

## Installation

${install}

## Usage

${usage}

## Tests

${tests}

## Questions

${faq}

### Picture
<img src="${res.data.owner.avatar_url}"> 

### Email

${email}

## Contributors
${credits}

## License
<img src="https://img.shields.io/github/license/${username}/${repo}">

`
;

            fs.writeFile(repo + "README.md", readme, (err)=> {
                if (err) console.log(err)});
            })    
    });
            
        



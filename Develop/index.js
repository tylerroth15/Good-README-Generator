const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');
// const markdown =  require('./utils/generateMarkdown');
const description = "Description Needed";
const contributors = [];
const installation = "Enter installation instructions."; 
const usage = "Enter Usage Instructions.";
const tests = "Enter any and all tests run."; 
const faq = "Using the email link below, please reach out with any questions.";
const email = "someone@gmail.com";


const questions = [
    {
    type: "input",
    name: "repo",
    message: "What is your Repo title?",
}, 
{
    type: "input",
    name: "username",
    message: "What is your GitHub Username?",
},
{
    type: "input",
    name: "descrip",
    message:"Write a brief description of your project.",
},
{
    type: "input",
    name: "installation",
    message: "Briefly describe the installation process for your file.",
},
{
    type: "input",
    name: "usage",
    message: "What can your project be used for?",
},
// {
//     type: "input",
//     name: "testing",
//     message: "What is a test that you can do for your project",
// }
// Description of Repo
// const writeDescription = (des)=> {
//     if (des !=null){
//         description= des;
//         writeInstallation();
//     }else {
//         inquirer.prompt({
            
//             name: "descrip"
//         }).then(({descrip})=> {
//             description = descrip;
//             writeInstallation();
//         })
//     }
// }
// // Installing of Repo
// const writeInstallation = () => {
//     inqurier.prompt({
//         type: "input",
//         message: "Briefly describe the installation process for your file.",
//         name: "install"
//     }).then(({install})=>{
//         installation = install;
//         writeUsage();
//     });
// }
// // Usage of Repo
// const writeUsage = () =>{
//     inquirer.prompt({
//         type: "input",
//         message: "What can your project be used for?",
//         name: "uses"
//     }).then(({uses})=>{
//     usage = uses
//     writeTests();
// })
// }
// //Testing for Repo
// const writeTest =() =>
// inquirer.prompt({
//     type: "input",
//     message: "What is a test that you can do for your project",
//     name: "test"
// }).then(({test})=>{
//     tests= test;
//     writeQuestions();
// });

];
inquirer.prompt(questions)
.then(({username, repo}) =>{
    const queryUrl = `https://api.github.com/repos/${username}/${repo}`;
        const contribUrl = `https://api.github.com/repos/${username}/${repo}/contributors`;
        axios

    .get(queryUrl)
    .then(res =>{
        if (res.data.description != null){
            description = res.data.description;
        }

        axios
        .get(contribUrl)
        .then(data => {

            data.data.forEach(element => {
                contributors.push(element.login);
                
            })
        });
        

        const readme =
`
# ${repo}
#### Author: ${username}

${description}

# Table of Contents
* ## Installation 
* ## Usage
* ## Tests
* ## Questions
* ## Contributors
* ## License

## Installation
${installation}

## Usage
${usage}

## Tests


## Questions
${faq}

### Email

### Picture
<img src="${res.data.owner.avatar_url}" width="30" style="border-radius: 15px"> 

## Contributors
${contributors}

## License
<img src="https://img.shields.io/github/license/${username}/${repo}">

`
;

            fs.writeFile("./README.md", readme, (err)=> {
                if (err) console.log(err)});
            })    
    });
            
        



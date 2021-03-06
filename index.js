const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")
// Require all npm packages and files

const questions = [
    //questions
    {
        type: "input",
        message: "what is your GitHub account name?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your project called?",
        name: "title",
    },
    {
        type: "input",
        message: "can you describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What steps did you take to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How are you using your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "what are the licenses for this project?",
        name: "license",
        choices: ["ISC"]
    },
    {
        type: "input",
        message: "what are your contributions to this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "how do you run a test?",
        name: "tests",
    },

];



//create page
function init() {
    //ask questions
    inquirer.prompt(questions)
        .then(answers => {
            //display answers            
            console.log(answers);
            //axios code here
            //integrate data from axios
            axios.get("https://api.github.com/users/" + answers.username)//user name on GitHub with axios
                .then(response => {
                    console.log(response);


                    //generate markdown
                    //write file to the new README
                    fs.writeFile("README2.md", generateMarkdown(answers), function (err) {
                        if (err) {
                            throw err;
                        }
                    });
                });
        });





    // Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.

}

init();

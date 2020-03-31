const generateMarkdown = require ('./utils/generateMarkdown')
// Require all npm packages and files

const questions = [

    type: "input",
    message: "what is name",
    name: "username",
    //copy and paste




    // questions to user using "enquirer"




];





function init() {

    inqirere
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        //asios code here
        axios.get("...url")//user name
        .then( data => {

        //interate dta from axios
        //geneate markdown
        generateMarkdown(reponse)
        //write file
        
        
        })
        
    })

// Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.

}

init();

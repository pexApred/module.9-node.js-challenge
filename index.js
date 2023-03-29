// TODO: Include packages needed for this application
    const inquirer = require ('inquirer');
    const fs = require('fs');
    const markdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. ',
    },
    {
        type: 'list',
        name: 'license',
        Choices: ['MIT', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('README file created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = 'README.md';
        const readmeData = generateREADME(data);
        writeToFile(fileName, readmeData);
    });
}

// Function call to initialize app
init();

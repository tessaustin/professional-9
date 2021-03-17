// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        //Github Username
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        //make sure user entered input
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Must enter your GitHub username!');
                return false;
            }
        }
    },
    {
        //Link to Profile
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your profile. (Required)',
        //make sure user entered input
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You must enter a your profile GitHub link!');
                return false;
            }
        }
    },
    {
        //Email Address
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        //make sure user entered input
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You must enter a your email address!');
                return false;
            }
        }
    },
    //Project Title
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        //make sure user entered input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a project name!');
                return false;
            }
        }
    },
    //Project Desciption
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        //make sure user entered input
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must enter a project description!');
                return false;
            }
        }
    },
    //Installation
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to explain how the user would isntall?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some information on how the user would install:',
        when: ({ confirmInstall }) => confirmInstall
    },
    //Usage
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter examples and instructions of your project in use?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some examples and insturction of your project in use:',
        when: ({ confirmUsage }) => confirmUsage
    },
    //Contributing
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Can users contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Explain how users contribute to your project:',
        when: ({ confirmContribute }) => confirmContribute
    },
    //Tests
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Can users test your project?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain how to test your project:',
        when: ({ confirmTests }) => confirmTests
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

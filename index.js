// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
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
    //Project title
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

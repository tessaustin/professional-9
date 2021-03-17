//Packages needed for this app
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

//Array of questions for user input
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
    //Licensing
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },

];

//Function to write README file
function writeToFile(fileName, data) {


//Function to initialize app
function init() {


// Function call to initialize app
init()

//Packages needed for this app
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: 'title',
        message: 'What is the name of your project? (Required)',
        //make sure user entered input
        validate: titleInput => {
            if (titleInput) {
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
        type: 'input',
        name: 'installation',
        message: 'How would you install your project? (Required)',
        //make sure user entered input
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must provide installation info!');
                return false;
            }
        }
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this project? (Required)',
        //make sure user entered input
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must provide how to use the project!');
                return false;
            }
        }
    },
    //Contributing
    {
        type: 'input',
        name: 'contribution',
        message: 'How could people contribute to this project? (Required)',
        //make sure user entered input
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You must provide info. on how others can contribute to the project!');
                return false;
            }
        }
    },
    //Tests
    {
        type: 'input',
        name: 'testing',
        message: 'How would you test this project? (Required)',
        //make sure user entered input
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You must describe how to test this project!');
                return false;
            }
        }
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
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md file has been generated.')
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init()

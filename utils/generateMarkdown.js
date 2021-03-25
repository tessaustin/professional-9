// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// function to generate markdown for README
function generateMarkdown(data) {
    var str = data.licensing;
    var res = str.replace("-", "%20");

    return `# ${data.title}

## Description:
${data.description}

## Licensing:
[![License](https://img.shields.io/badge/License-${res}-blue.svg)](https://shields.io)

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribute)
* [Testing](#tests)
* [Questions](#questions)

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.licensing}

## Contribution:
${data.contribution}

## Testing:
${data.testing}

## Questions:
Please reach me through my Github account or my email with any additional questions.
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
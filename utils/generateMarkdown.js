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
    return `# ${data.title}

## Description:
${data.description}

## License:
[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

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
${data.license}

## Contribution:
${data.contribution}

## Testing:
${data.testing}

## Questions:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
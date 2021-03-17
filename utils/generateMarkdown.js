// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.Description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation 
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributors
  ${data.Contributors}

  ## Test
  ${data.Test}
  
  ## Questions
  Contact me:
  Github:[${data.Username}]
  Email:[${data.Email}]
  `;}

module.exports = generateMarkdown;
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
  return `
  
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ![alt text](assets/images/screenshot.png)

  ![alt text](assets/images/screenshot.png)

  ## License
  ${data.title} is software released under the ${data.license} license.
  ---
  ![license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=${data.color})(https://shields.io/)

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  - Github [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]

`;
// line 42 backtick is the end of the markdown
}

module.exports = generateMarkdown;

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
  ## License:
  [![license](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://shields.io/)
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.title} is software released under the ${data.license} license.
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.test}
  ## Contact Information:
  - Github [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]

`;
// line 42 backtick is the end of the markdown
}

module.exports = generateMarkdown;

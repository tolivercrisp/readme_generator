// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description

${data.description}
  
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

  ### Screenshots
    ![alt text](assets/images/screenshot.png)
    ![alt text](assets/images/screenshot.png)

## Credits

${data.credits}

## License

This project has been released under the ${data.license} license.
![license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=${data.color})

---

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## Questions

  - Github [@${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]

`;
// line 42 backtick is the end of the markdown
}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js') 

// TODO: Create an array of questions for user input
const questions = [

    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of the project?',
        validate: yourInput => {
            if (yourInput) {
                return true;
            } else {
                console.log('Error: Please enter a TITLE for your project.')
                return false;
            }
        }
    },

    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief DESCRIPTION of your project (3-4 sentences):',
        validate: yourDescription => {
            if (yourDescription) {
                return true;
            } else {
                console.log('Error: Please enter a DESCRIPTION for your project.')
                return false;
            }
        }
    },
    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you INSTALL your project?',
        validate: yourInstallation => {
            if (yourInstallation) {
                return true;
            } else {
                console.log('Error: Please describe the INSTALLATION process for your project.')
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you USE your project?',
        validate: yourUsage => {
            if (yourUsage) {
                return true;
            } else {
                console.log('Error: Please describe the USAGE process for your project.')
                return false;
            }
        }
    },
    // Licensing
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which LICENSE would you like?',
        choices: ['MIT', 'MPL 2.0', 'GNU', 'Apache', 'None of the above'],
        validate: yourLicense => {
            if (yourLicense) {
                return true;
            } else {
                console.log('Error: Please select a LICENSE for your project.')
                return false;
            }
        }
    },
    // Badge Color
    {
        type: 'checkbox',
        name: 'color',
        message: 'Pick a COLOR for your license badge.',
        choices: ['blue', 'purple', 'red', 'orange', 'yellow', 'green', 'black'],
        validate: yourColor => {
            if (yourColor) {
                return true;
            } else {
                console.log('ERROR: Please pick a color for your license badge.')
                return false;
            }
        }
    },
    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users CONTRIBUTE to this project?',
        validate: yourContribution => {
            if (yourContribution) {
                return true;
            } else {
                console.log('ERROR: Please describe how to CONTRIBUTE to your project.')
                return false;
            }
        }
    },
    // Github
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GITHUB USERNAME:',
        validate: yourGithub => {
            if (yourGithub) {
                return true;
            } else {
                console.log('ERROR: Please enter your Github USERNAME.')
                return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your EMAIL ADDRESS (for users with questions):',
        validate: yourGithub => {
            if (yourGithub) {
                return true;
            } else {
                console.log('Error: Please enter your email address')
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
        console.log()
        console.log("Congratulations! Your Readme.MD file has been generated.")
    })
}

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");
// const axios = require("axios");
// const markdown = require("./utils/generateMarkdown");

const questionsForUser =   [
    
        {   name:  'title',
            message: 'what is your project\'s title?'
        },
        {   name: 'description',
            message: 'enter a brief project description'
        },
        {   name: 'installation',
            message:'enter a project installation instructions'
        },
        {   name:'usage',
            message: 'describe the intended usage of this project'
        },
        {   name:'license',
            message: 'enter your project license (if none, hit enter)'
        },
        {   name:'contributing',
            message: 'who are the project contributors?'
        },
        {   name:'tests',
            message: 'enter test instructions'
        }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license)   {
        return '';
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license)   {
        return '';
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license)   {
        return '';
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    # Table of Content
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[license](#license)
    -[contributing](#contributing)
    -[tests](#tests)

    ##username:
        ${data.username}

    ##description:
        ${data.description}

    ##installation:
        ${data.installation}

    ##usage:
        ${data.usage}

    ##license:
        ${data.license}

    ##contributing:
        ${data.contributing}

    ##tests:
        ${data.tests}

    `;
};

function init() {
    inquirer.prompt(questionsForUser)
    .then((answersFromUser) =>   {
        console.log('working on it')
        const writeReadMe = generateMarkdown(answersFromUser);

        fs.writeFile('readme.md', writeReadMe, (err) =>
        err ? console.log(err) : console.log('readme.md created successfully'))
    })
};

init();

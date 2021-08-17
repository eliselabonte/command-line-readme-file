const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

const questions =   [
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

    ${data.username}
    ##username:

        ${data.description}
    ##description:

        ${data.installation}
    ##installation:

        ${data.usage}
    ##usage:

        ${data.license}
    ##license:

        ${data.contributing}
    ##contributing:

        ${data.tests}
    ##tests:

    `;
}

module.exports = generateMarkdown;

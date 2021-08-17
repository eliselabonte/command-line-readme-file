const fs = require("fs");
const inquirer = require("inquirer");
// const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

const questionsForUser =   [
    
        {   type: 'input',
            name:  'title',
            message: 'what is your project\'s title?'
        },
        {   type: 'input',
            name: 'description',
            message: 'enter a brief project description'
        },
        {   type: 'input',
            name: 'installation',
            message:'enter a project installation instructions'
        },
        {   type: 'input',
            name:'usage',
            message: 'describe the intended usage of this project'
        },
        {   type: 'list',
            choices: ['MIT', 'GPLv2', 'Apache', 'none'],
            name:'license',
            message: 'enter your project license (if none, hit enter)'
        },
        {   type: 'input',
            name:'contributing',
            message: 'who are the project contributors?'
        },
        {   type: 'input',
            name:'tests',
            message: 'enter test instructions'
        }
];

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

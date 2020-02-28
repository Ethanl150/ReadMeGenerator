const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")
const generate = require("./generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of this project? (no spaces)",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a description for your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license do you want for this project?",
        name: "license",
        choices: ["ISC", "MIT", "ApacheLicense2.0", "GNUGPLv3"]
    },
    {
        type: "input",
        message: "What are the steps required to install this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How many contributors does this project have?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What are the guidelines for contributing to this projcect?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please provide instructions for how the user should use this application.",
        name: "usage"
    },
    {
        type: "input",
        message: "How should the user run tests for this application?",
        name: "tests"
    }
];

inquirer
    .prompt(questions)
    .then(function (response) {
        axios
            .get(`https://api.github.com/users/${response.username}/events/public`)
            .then(function (res) {

                const userAvatar = res.data[0].actor.avatar_url;

                const userEmail = res.data[0].payload.commits[0].author.email

                info = generate.generateMarkdown(response, userAvatar, userEmail)

                fs.writeFile("newREADME.md", info, function (err) {
                    if (err) {
                        throw err;
                    }
                })
            })
    })
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description of the project:",
    name: "description",
    default: "This program that generates README.md",
  },
  {
    type: "input",
    message: "Installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: ["The MIT License", "Apache license", "The BSD License", "None"],
  },
  {
    type: "input",
    message: "Contributing:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests:",
    name: "tests",
  },
  {
    type: "input",
    message: "Questions:",
    name: "questions",
  },
  {
    type: "input",
    message: "GitHub user name:",
    name: "userName",
  },
  {
    type: "input",
    message: "GitHub link:",
    name: "gitHubLink",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success! Here is your README");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    //console.log(answers);
    writeToFile("./dist/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();

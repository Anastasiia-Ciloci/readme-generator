// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is you project name?",
      name: "title",
    },
    {
      type: "input",
      message: "Description of the project",
      name: "description",
    },
    {
      type: "input",
      message: "Usage information",
      name: "description",
    },
  ])
  .then(
    (response) =>
      // TODO: Create an array of questions for user input
      //const questions = [];

      // TODO: Create a function to write README file
      function writeToFile(fileName, data) {
        fs.writeFile(
          "./dist/log.json",
          JSON.stringify(answers, null, 2),
          (err) => {
            err
              ? console.error(err)
              : console.log("Success! Here is your README");
          }
        );
      }
  );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

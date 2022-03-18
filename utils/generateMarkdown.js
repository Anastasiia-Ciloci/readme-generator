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
  const github = `https://github.com/${data.userName}`;
  return `
  # ${data.title} 
  https://githun.com/${data.userName}/${data.title}
  ## Description
  ${data.description}
  ## Table of contents
  - [Instalation](#installation)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  In order to use this app, ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)
  ${data.license}
  ## Contributing
  Contributors: ${data.contributing}
  ## Tests
  To run this test you need${data.tests}
  ## Questions
  ${data.questions}
  If you have any question about this project, you can reach me out by ${data.email}.
  `;
}
//${data.userName} ${data.gitHubLink}
module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "The MIT License":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
    case "Apache license":
      return `![License: Apache License](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)`;
    case "The BSD License":
      return `![License: The BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    case "None":
      return [];
  }
}

// TODO: Create a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "The MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache license") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "The BSD License") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return [];
  }
}
// TODO: Create a function that returns the license section of README

//If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None"
    ? `${license}\n${renderLicenseLink(license) || []}`
    : [];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  
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
  ${renderLicenseLink(data.licenses)}
  This project is licensed under the ${data.license} license.
  
  ${data.license}
  ## Contributing
  Contributors: ${data.contribution}
  ## Tests
  To run this test you need${data.tests}
  ## Questions
  ${data.questions}
  If you have any question about this project, you can reach me out by ${
    data.email
  }.
  `;
}

module.exports = generateMarkdown;

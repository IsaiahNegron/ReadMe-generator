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

  return `# ${data.title}

  ## Description

    ${data.Description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Testing](#Tests)
  - [License](#License)
  - [Contact](#Contact)

  ## Installation Instructions
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributions
  ${data.Contributions}

  ## Testing
  ${data.Tests}

  ## License
  ${data.License}

  ## Contact
  If you have any questions feel free to contact me at <a href='mailto:${data.Contact}'>${data.Contact}</a>`

}

module.exports = generateMarkdown;

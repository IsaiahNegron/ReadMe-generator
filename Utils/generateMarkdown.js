// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title}

  ![badge](https://img.shields.io/badge/license-${data.License}-important)

  ## Description

    ${data.Description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Testing](#Tests)
  - [License](#License)
  - [Github](#Github)
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
  ![badge](https://img.shields.io/badge/license-${data.License}-important)
  <br>
  Permission to use this application is granted under the ${data.License} License. <https://opensource.org/licenses/${data.License}>

  ## Github Username
  Lets Connect: ${data.Github}

  ## Contact
  If you have any questions feel free to contact me at <a href='mailto:${data.Contact}'>${data.Contact}</a>`

}

module.exports = generateMarkdown;

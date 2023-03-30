// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit/'
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License 
    
    This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseSection(data.license)}

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License

  ${data.license}

  ## Badges

  ${renderLicenseBadge(data.license)}
  
  ## How to Contribute

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at[${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  if (license !== 'none')   {
      return `![gitHub license](https://img.shields.io/badge/license-${license}-${color})`;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license)   {
      return `
        \n* [license](#license)\n`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license)   {
      return `## license:\n
      this repository is using the ${license} license.`;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.color)}

  ## Table of Contents

  * [description](#description)

  * [installation](#installation)

  * [usage](#usage)

  ${renderLicenseLink(data.license)}

  * [contributing](#contributing)

  * [tests](#tests)

  ## description:
      ${data.description}

  ## installation:
      ${data.installation}

  ## usage:
      ${data.usage}

  ${renderLicenseSection(data.license)}

  ## contributing:
      ${data.contributing}

  ## tests:
      ${data.tests}

  `;
};

module.exports = generateMarkdown;



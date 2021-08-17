function renderLicenseBadge(license, color) {
  if (license !== 'none')   {
      return `![gitHub license](https://img.shields.io/badge/license-${license}-${color})`;
  }

}

function renderLicenseLink(license) {
  if (license)   {
      return `
        \n* [license](#license)\n`;
  }

}

function renderLicenseSection(license) {
  if (license)   {
      return `## license:\n
      this repository is using the ${license} license.`;
  }

}

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



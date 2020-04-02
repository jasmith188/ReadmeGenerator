function generateMarkdown(data) {
  return ` 
# ${data.title}

## Description 
${data.description}


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation 
${data.installation}


## Usage 
${data.usage}


## Credits
${data.credits}


## License
${data.license}

---

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
(![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)


![GitHub Profile Picture]${data.avatar_url}


## Contributing
${data.contribution}


## Tests
${data.tests}



---
© 2020 ${data.username} Jimmy Smith🏆 


`;
}

module.exports = generateMarkdown;

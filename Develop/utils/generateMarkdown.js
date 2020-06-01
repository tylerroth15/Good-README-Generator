function generateMarkdown(data) {
  return `
# ${data.repo}

#### ${username}

Badge

# Table of Contents
* ## Installation 
* ## Usage
* ## Tests
* ## Questions
* ## Contributors
* ## License

## Installation
${installation}

## Usage
${usage}

## Tests
${tests}

## Questions
${faq}

### Email

### Picture
<img src="${res.data.owner.avatar_url}" width="30" style="border-radius: 15px"> 

## Contributors
${contributors}

## License
${license}

`;
}

module.exports = generateMarkdown;

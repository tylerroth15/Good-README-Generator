function generateMarkdown(data) {
  return `
  # ${data.repo}
  #### Author: ${data.username}
  
  ${description}
  
  # Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contriubtors](#contributors)
  * [License](#license)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ${faq}
  
  ### Picture
  <img src="${res.data.owner.avatar_url}" width="30" style="border-radius: 15px"> 
  
  ### Email
  
  ${email}
  
  ## Contributors
  ${credits}
  
  ## License
  <img src="https://img.shields.io/github/license/${username}/${repo}">
  
  `
;
}

module.exports = generateMarkdown;

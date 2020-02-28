
function generateMarkdown(data, avatar, email) {

  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ![badge](https://img.shields.io/badge/Contributors-${data.contributors}-green.svg)
  
   ${data.description}
  
   ---
  
   * [Project](#${data.title})
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [License](#license)
   * [Questions](#questions)
  
  ---
  
   # Installation
  
   ${data.installation}
  
   # Usage
  
   ${data.usage}
  
   # Contributing
  
   ${data.contributing}
  
   # Tests
  
   ${data.tests}
  
   # License
  
  This project is licensed under the ${data.license} License.

  # Questions

  <img src="${avatar}" width="100px" height="50px" style="border-radius: 50%" alt="${data.username}'s profile image" />

  Email: ${email}
`;
}


module.exports = {
  generateMarkdown: generateMarkdown
}


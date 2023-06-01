const inquirer = require("inquirer");
const fs = require("fs");


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Readme Generated"))
}


function init() {
  inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is your Project Title?',
          },
          {
            type: 'input',
            message: 'Write a brief description of your project',
            name: 'Description',
            
          },
          {
            type: 'checkbox',
            message: 'Please select the sections to include in the Table of Contents',
            name: 'TOC',
            choices: [
              {
                name: 'Installation',
                value: 'Installation'
              },
              {
                name: 'Usage',
                value: 'Usage'
              },
              {
                name: 'Credits',
                value: 'Credits'
              },
              {
                name: 'License',
                value: 'License'
              },
              {
                name: 'Questions',
                value: 'Questions'
              }
            ]
          },
          {
            type: 'input',
            message: 'Please describe the installation steps for your project',
            name: 'Installation',
            
          },
          {
            type: 'input',
            message: 'Please describe how your project is used',
            name: 'Usage',
            
          },
          {
            type: 'input',
            message: 'Please list the project contributors',
            name: 'Credits',
            
          },
          {
            type: 'list',
            message: 'Please input the license used',
            name: 'License',
            choices: ['MIT', 'Apache 2.0', 'GNU'],
          },
          {
            type: 'input',
            message: 'Please input your GitHub username',
            name: 'GitUser',
            
          }, 
          {
            type: 'input',
            message: 'Please input your email address',
            name: 'Email',
            
          }, 
    ])
    .then((data) => {



      const content = `# ${data.Title}
      
## Description
${data.Description}
      
## Table Of Contents
${data.TOC.map(item => `- [${item}](#${item.toLowerCase()})`).join('\n')}
      
## Installation
${data.Installation}
      
## Usage
${data.Usage}
      
## Credits
${data.Credits}
      
## License
This Project Is Licensed Under The ${data.License} License.
      
## Questions
You can reach me via email at ${data.Email}
My GitHub account can be found at (https://github.com/${data.GitUser}).`;

      writeToFile("README.md", content);
    });
}


init();
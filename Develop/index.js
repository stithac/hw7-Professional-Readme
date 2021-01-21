// TODO: Include packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
([
    {
      type: 'input',
      message: 'Title of application: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of application: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Steps required to install application: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Instructions and examples for use: ',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Select a license for application: ',
      name: 'license',
      choices: ['Apache 2.0', 'Cocoapods', 'GNU GPL v3', 'Eclipse Public License 1.0', 'MIT', 'Mozilla', 'Perl']
    },
    {
      type: 'input',
      message: 'Guidelines for contributing to application: ',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Tests for your application: ',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'GitHub username: ',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Email address: ',
      name: 'email',
    },
  ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {
  console.log('Welcome to the ACS README.md file generator!','\n');
  console.log('Enter your responses to the following questions and your README will be generated.', '\n');

  inquirer.prompt(questions)
  .then((response) =>

    writeToFile(response.title + "-README.md", generateMarkdown({...response}))
      ? console.log('\n\n** README not created **')
      : console.log('\n\n** README created! **')
  );
}

// Function call to initialize app
init();

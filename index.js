// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:'Title',
    message: 'What Is The Title of Your READ.ME?'
    
  },

  {
    type: 'input',
    name:'Description',
    message:'Describe Your Project in a Few Sentences'

  },

  {
    type:'input',
    name:'Installation',
    message:'What Are The Installation Instructions of Your Application, If Any?'
  },

  {
    type:'input',
    name:'Usage',
    message:'How and What Will Your Application Be Used For?'
  },

  {
    type:'input',
    name:'Contributions',
    message:'What Contributions Have Been Made To Your Application? (Ex: people, resources, etc)'
  },

  {
    type:'input',
    name:'Tests',
    message:'How Have You Tested This Application?'
  },

  {
    type:'list',
    message:'What License Are You Using For Your Application?',
    name:'License',
    choices: ["AAL", "ISC", "MIT","NTP","W3C"]

  },

  {
    type:'input',
    name:'Github',
    message:'What Is Your Github Username?'
  },

  {
    type:'input',
    name:'Contact',
    message:'If People Have Questions, What Email Address Can They Reach You At?'
  }
];


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(Input) {

    const markdownInfo = generateMarkdown(Input)

    fs.writeFile('README.md', markdownInfo, function(err) {
      if(err) {
        console.log(err)
      }
      else{
        console.log('BOOM!YOU ARE WELCOME!')
      }
    })

  },
  )};

// Function call to initialize app
init();



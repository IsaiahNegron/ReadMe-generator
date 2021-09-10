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
    type:'input',
    name:'License',
    message:'What License Are You Using For Your Application, If Any?'

  },

  {
    type:'input',
    name:'Contact',
    message:'If People Have Questions, What Email Address Can They Reach You At?'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


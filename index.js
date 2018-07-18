const clear = require('clear');
const chalk = require('chalk');
const git = require('simple-git/promise')();
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const inquirer = require('inquirer');

inquirer.prompt([{
  name: 'password',
  type: 'list',
  message: 'Enter your email address',
  choices: ["Twitter", "Facebook"],
  validate: function(value) {
    if(value.length) {
      return true;
    } else {
      return "Please enter email";
    }
  }
}]);

//clear();
//console.log(chalk.blue('Hello World'));
//console.log(warning('Hello'));
/*git.clone("https://github.com/aNinjaMonk/rn-boilerplate.git",(status) => {
  console.log("status");
});*/
//npm install

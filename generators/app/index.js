'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the splendiferous ${chalk.red('generator-sbcrud')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'rrname', //rest resource name
        message: 'Enter REST resrource name in small case: ',
        default: true
      },
      {
        type: 'input',
        name: 'rrName', //rest resource class name
        message: 'Enter Resource class name: ',
      },
      {
        type: 'input',
        name: 'rrpk', //rest resource class name
        message: 'Enter primary key name: ',
      },
      {
        type: 'input',
        name: 'rrpktype', //rest resource class name
        message: 'Enter Resource class name: ',
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log("printing some stuff here " + this.props.rrname);
    this.props.rrnameinmethod = this.props.rrName;

    this.fs.copyTpl(
      this.templatePath('controller.txt'),
      this.destinationPath('controller.txt'),
      this.props
    );
  }

  // capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }


};

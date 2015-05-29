var chalk     = require('chalk');
var pkg       = require('../../package.json');
var log       = require('./log');

var help =  function () {
  var message = [
    'Syntax: gpeto ['+ chalk.blue('command') + '] ['+ chalk.green('files') + '] ['+ chalk.yellow('--flags') + ']',
    '                        ',
    chalk.italic('List of available commands:'),
    chalk.cyan.bold('      ➜ add            ') + chalk.blue('Add a folder of components to the gpeto\'s folder'),
    chalk.cyan.bold('      ➜ remove         ') + chalk.blue('Remove a folder of components to the gpeto\'s folder'),
    chalk.cyan.bold('      ➜ install        ') + chalk.blue('Install some package to the gpeto\'s folder'),
    chalk.cyan.bold('      ➜ uninstall      ') + chalk.blue('Uninstall some package to the gpeto\'s folder'),
    '                        ',
    chalk.italic('List of available flags:'),
    chalk.cyan.bold('      ➜ --out          ') + chalk.blue('Specifie a folder to install each component'),
  ].join('\n')
  console.log(message);
  process.exit();
};

var version = function () {
  log(pkg.version);
}

module.exports = {
  help: help,
  version: version
}

var chalk  = require('chalk');
var prefix = '[' + chalk.blue('gpeto') + '] ';

var log = function (message) {
  var str = prefix + message
  console.log(str);
}

module.exports = log;

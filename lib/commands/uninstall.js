var fse   = require('fs-extra');
var util  = require('../utils');
var chalk = require('chalk');

var uninstall = function (files, outPath) {
  var src = outPath || 'gpeto_components';
  files.forEach(function (file) {
    util.duration.start();

    fse.remove(src + '/' + file, function (err) {
      if (err) return console.error(err);
      util.duration.end(chalk.cyan('➜ Removed ' + chalk.bold(file) + ' from ' + chalk.bold(src)));
    });
  });
};

module.exports = uninstall;

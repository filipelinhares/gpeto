var fse              = require('fs-extra');
var userhome         = require('userhome');
var util             = require('../utils');
var chalk             = require('chalk');

var install = function (files, outPath) {
  var dest = outPath || 'gpeto_components';
  util.duration.start();

  files.forEach(function (file) {
    fse.copy(userhome('.gpeto', file), dest + '/' + file, function (err) {
      if (err) return console.error(err);
      util.duration.end(chalk.green('➜ Copied ' + chalk.bold(file) + ' to ' + chalk.bold(dest)));
    });
  });
};

module.exports = install;

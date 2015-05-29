var userhome = require('userhome');
var fs       = require('fs');
var fse      = require('fs-extra');
var util     = require('../utils');
var chalk    = require('chalk');

var remove = function (files) {
  files.forEach(function (file) {
    util.checkProjectFolder(file);
    util.duration.start();

    fse.remove(userhome('.gpeto', file), function (err) {
      if (err) return console.error(err);
      util.duration.end(chalk.cyan('➜ Removed ' + chalk.bold(file) + ' successifuly!'));
    });
  });
};

module.exports = remove;

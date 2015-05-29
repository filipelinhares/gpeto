var userhome         = require('userhome');
var chalk            = require('chalk');
var fse              = require('fs-extra');
var util             = require('../utils');

var add = function (files) {
  files.forEach(function (file) {
    util.checkProjectFolder(file);
    util.duration.start();
    fse.ensureDirSync(userhome('.gpeto'));

    fse.copy(file, userhome('.gpeto', file), function (err) {
      if (err) return console.error(err);
      util.duration.end(chalk.green('➜ Copied ' + chalk.bold(file) + ' successifuly!'));
    });
  });
};

module.exports = add;

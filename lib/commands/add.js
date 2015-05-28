var fs               = require('fs');
var dir              = require('extfs');
var userhome         = require('userhome');
var chalk            = require('chalk');
var fse              = require('fs-extra');
var util              = require('../utils')


var _checkAddedFolder = function (src) {

  // === Check if has an input path
  if (!src) {
    util.log(chalk.red('You need to specify a path!'));
    process.exit();
  }
  // === Check if is a file
  if (fs.statSync(src).isFile()) {
    util.log(chalk.red("You need to specifie a folder not a file"));
    process.exit();
  }

  // === Check if is an empty folder
  else if (dir.isEmptySync(src)) {
    util.log(chalk.red("You're trying to use a empty folder."));
    process.exit();
  }
};

var add = function (files) {
  files.forEach(function (file) {
    _checkAddedFolder(file);
    util.duration.start();
    fse.ensureDirSync(userhome('.gpeto'));

    fse.copy(file, userhome('.gpeto', file), function (err) {
      if (err) return console.error(err);
      util.duration.end(chalk.green('➜ Copied ' + chalk.bold(file) + ' successifuly!'));
    });
  });
};

module.exports = add;

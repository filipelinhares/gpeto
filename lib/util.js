var fs               = require('fs');
var dir              = require('extfs');
var userhome         = require('userhome');
var chalk            = require('chalk');
var fse              = require('fs-extra');
var prettyHrtime     = require('pretty-hrtime');


exports.checkAddedFolder = function (src) {

  // === Check if has an input path
  if (!src) {
    console.log(chalk.red('You need to specify a path!'));
    process.exit();
  }
  // === Check if is a file
  if (fs.statSync(src).isFile()) {
    console.error(chalk.red("You need to specifie a folder not a file"));
    process.exit();
  }

  // === Check if is an empty folder
  else if (dir.isEmptySync(src)) {
    console.error(chalk.red("You're trying to use a empty folder."));
    process.exit();
  }
};

exports.add = function (file) {
  var start = process.hrtime();
  fse.copy(file, userhome('.razor', file), function (err) {
    if (err) return console.error(err);
    var end = process.hrtime(start);
    console.log(chalk.green('➜ Copied ' + file + ' successifuly!'), prettyHrtime(end));
  });
};

exports.install = function (file, output) {
  var destPath = output || '.';

  fse.copy(userhome('.razor', file), emptyDirSync(destPath + file, function (err) {
    if (err) return console.error(err);
  });
};

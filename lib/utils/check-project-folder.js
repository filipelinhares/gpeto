var util     = require('../utils');
var fs       = require('fs');
var dir      = require('extfs');
var userhome = require('userhome');

var checkProjectFolder = function (src) {

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

module.exports = checkProjectFolder;

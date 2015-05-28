var fse              = require('fs-extra');
var userhome         = require('userhome');

var install = function (files) {
  files.forEach(function (file) {
    fse.copy(userhome('.gpeto', file), 'teste/' + file, function (err) {
      if (err) return console.error(err);

      console.log('Copied ' file);
    });
  });
};

module.exports = install;

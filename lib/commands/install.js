var fse              = require('fs-extra');
var userhome         = require('userhome');

var install = function (files, outPath) {
  var dest = outPath || 'gpeto_components/';
  files.forEach(function (file) {
    fse.copy(userhome('.gpeto', file), dest + file, function (err) {
      if (err) return console.error(err);

      console.log('Copied ' + file + ' to ' + dest);
    });
  });
};

module.exports = install;

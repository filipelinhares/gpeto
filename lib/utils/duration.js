var chalk            = require('chalk');
var pretty           = require('pretty-hrtime');
var log              = require('./log');

var start;

var start = function () {
  start = process.hrtime()
};

var end = function (message) {
  var time = pretty(process.hrtime(start))
  log(message + ' ⌚ ' + time);
};

module.exports = {
  start: start,
  end: end
}

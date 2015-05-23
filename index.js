#!/usr/bin/env node

'use strict';

var util             = require('./lib/util');
var meow             = require('meow');
var multiline        = require('multiline');

var sourcePath = process.argv.slice(3).join('');


// === Help message
var helpMessage = multiline(function() {/*
  # TODO
*/});

var cli = meow({
    help: helpMessage
});


if (cli.flags.add) {
  util.checkAddedFolder(cli.flags.add);
  util.add(cli.flags.add);
}

util.install(sourcePath, cli.flags.out);

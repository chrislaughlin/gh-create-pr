//System Imports
const exec = require('child_process').exec;

//Project Imports
const constants = require('./constants');
const onRemotes = require('./functions');

exec(constants.REMOTES_CMD, onRemotes);

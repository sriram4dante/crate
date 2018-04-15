#!/usr/bin/env node
const path = require('path')

var mylib = require('../lib/index.js');

var fetch_path = path.join(__dirname)

// Displays the text in the console
mylib.getAllFiles(fetch_path);

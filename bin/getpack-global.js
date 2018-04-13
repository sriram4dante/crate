#!/usr/bin/env node

const path = require('path')

var fetch_path = path.join(__dirname)

var mylib = require('../lib/index.js');

// Displays the text in the console
mylib.getAllFiles(fetch_path);

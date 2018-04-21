var express = require('express');
const path = require('path');
var base = require('../bin/www');
var fs = require('fs');

var args = process.argv;

var fetch_path = path.join(__dirname)
var router = express.Router();

router.get('/files/', function(req, res, next) {
	fs.readdir(fetch_path, function(err, files) {
		console.log(__dirname);
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(files));
	});
});

module.exports = router;

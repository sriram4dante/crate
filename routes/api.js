var express = require('express');
const path = require('path')
var fs = require('fs');

var fetch_path = path.join(__dirname)
var router = express.Router();

router.get('/files/', function(req, res, next) {
	fs.readdir(fetch_path, function(err, files) {
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(files));
	});
});

module.exports = router;

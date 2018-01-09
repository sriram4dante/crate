var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readdir(process.cwd(), (err, files) => {
	  	files.forEach(file => {
	    	console.log(file);
	  	});
	  	res.render('index', { filesList: files });
	})
});

module.exports = router;

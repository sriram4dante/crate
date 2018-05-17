var express = require('express');
const path = require('path');
var fs = require('fs');
var glob = require("glob");

var router = express.Router();

var cwd = path.resolve(process.cwd())

router.get('/', function(req, res, next) {
	var obj = {
    dirs: getDirectories(cwd),
    files: getFiles(cwd),
    cwd: cwd
  }
  res.render('index', obj);
});

router.get('/:path(*)', function(req, res, next) {
	var url_path = req.params.path;
  console.log(url_path);
  var full_path = path.join(cwd, url_path)

	if(checkForDir(full_path)) {
    
		var obj = {
    	dirs: getDirectories(full_path),
    	files: getFiles(full_path),
    	cwd: full_path
  	}
 		res.render('index', obj);
	}
	else {
		res.download(full_path);
	}
	
})

function getDirectories(srcpath) {
  console.log(srcpath);
  return fs.readdirSync(srcpath)
    .map(file => {console.log(file);return file})
    .filter(path => fs.statSync(path).isDirectory());
}
function getFiles(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => file)
    .filter(path => {
      return fs.statSync(path).isFile()
    });
}
function checkForDir(newPath) {
	return fs.statSync(newPath).isDirectory();
}

module.exports = router;

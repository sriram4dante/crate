var express = require('express');
const path = require('path');
var fs = require('fs');
var glob = require("glob");

var router = express.Router();

var cwd = path.resolve(process.cwd())

router.get('/', function(req, res, next) {
  glob(cwd+"/*", function (err, files) {
    console.log(files)
    res.render('index', files)
  })
	// var obj = {
 //    dirs: getDirectories(cwd),
 //    files: getFiles(cwd),
 //    cwd: cwd
 //  }
 //  res.render('index', obj);
});

// router.get('/:path(*)', function(req, res, next) {
// 	var path = req.params.path;
//   var c_path = cwd+"/"+path
//   console.log("cwd: "+cwd)
//   //console.log(c_path)

// 	if(checkForDir(c_path)) {
// 		var obj = {
//     	dirs: getDirectories(c_path),
//     	files: getFiles(c_path),
//     	cwd: c_path
//   	}
//  		res.render('index', obj);
// 	}
// 	else {
// 		res.download(c_path);
// 	}
	
// })

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => file)
    .filter(path => fs.statSync(path).isDirectory());
}
function getFiles(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => file)
    .filter(path => fs.statSync(path).isFile());
}
function checkForDir(newPath) {
	return fs.statSync(newPath).isDirectory();
}

module.exports = router;

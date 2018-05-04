var express = require('express');
const path = require('path');
var fs = require('fs');

var router = express.Router();

var cwd = path.resolve(process.cwd())

router.get('/files/', function(req, res, next) {
  var objs = []
  // var dirs = getDirectories(cwd);
  // dirs.forEach(function(dir) {
  //   objs.push({name: dir, is_directory: true})
  // })
  var obj = {
    dirs: getDirectories(cwd),
    files: getFiles(cwd),
    cwd: cwd
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(obj));

  // fs.readdir(cwd, function(err, files) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(JSON.stringify(files));
  // });
});

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

module.exports = router;

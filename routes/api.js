var express = require('express');
const path = require('path');
var fs = require('fs');

var router = express.Router();

var cwd = path.resolve(process.cwd())

router.post('/files/', function(req, res, next) {
  var c_path = req.body.path
  var obj = {
    dirs: getDirectories(cwd+c_path),
    files: getFiles(cwd+c_path),
    cwd: cwd+c_path
  }
  console.log(c_path)
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(obj));
});

router.post('/files/download/', function(req, res, next) {
  var file = req.body.filename;
  console.log(cwd+"/"+file)
  res.send(JSON.stringify({"filename":cwd+"/"+file}));
})

function getDirectories(srcpath) {
  //console.log(srcpath)
  console.log(fs.readdirSync(srcpath)
    .map(file => file)
    .filter(path => fs.statSync(path).isDirectory()))
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

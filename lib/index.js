var fs = require('fs');
const express = require('express')
const app = express()

var getAllFiles = function(filePath) {
	app.listen(3000, () => console.log('listening on port 3000!'))	
	app.get('/', (req, res) => {
		fs.readdir(filePath, function(err, files) {
		    res.send(files)
		});
	})
};
exports.getAllFiles = getAllFiles;
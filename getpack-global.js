#!/usr/bin/env node
const path = require('path')
var fs = require('fs');
const express = require('express')

var mylib = require('../lib/index.js');

var fetch_path = path.join(__dirname)
const app = express()
app.set('templates', path.join(__dirname, 'templates'));

app.listen(3000, () => console.log('listening on port 3000!'))	

app.get('/', (req, res) => {
	res.sendFile('index.html');
})

app.get('/api/files/', (req, res) => {
	fs.readdir(fetch_path, function(err, files) {
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(files));
	});
})

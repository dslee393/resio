"use strict";
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const reactEngine = require('react-engine');
const Sockets = require('./controllers/socketController');

<<<<<<< HEAD
console.log("Running server.js");
=======
app.get('/', function(req, res) {

});

app.get('/present', function(req, res) {
	
});

app.get('/respond', function(req, res) {

});
>>>>>>> dcef58f50f7986c0d4c3ea270e899195df619f5b

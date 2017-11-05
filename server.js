
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Article = require('./models/article');
var request = require('request');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3001;

// Use body parser with our app

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(path.join(__dirname, 'client/build')));

// Database configuration with mongoose
mongoose.connect(
  'mongodb://heroku_w3v57k0l:nja21grj4djleb825m2qub8lk1@ds249415.mlab.com:49415/heroku_w3v57k0l'
);
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Routes
// ======

// Main route
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });


// Save an Article
app.post('/api/articles/:id', function(req, res) {
  Article.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { saved: true } },
    function(error, doc) {
      if (error) {
        console.error(error);
      } else {
        res.json(doc);
      }
    }
  );
});

// View Saved Articles
app.get('/api/articles', function(req, res) {
  var hbsObj = {};
  Article.find({ saved: true }, function(error, doc) {
    if (error) {
      res.json(error);
    } else {
      res.json(doc);
    }
  });
});

// Delete a saved article
app.put('/api/articles/:id', function(req, res) {
  var articleId = req.params.id;
  Article.remove({ _id: articleId }, function(error, doc) {
    if (error) {
      console.error(error);
    } else {
      res.json(doc);
    }
  });
});




// Listen on port 3000
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

module.exports = app;

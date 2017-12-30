var express = require('express');
var app = express.Router();
const Storage = require("@google-cloud/storage");


// Your Google Cloud Platform project ID
const projectId = 'd3-graphs-1514664972177';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});

// The name for the new bucket
const bucketName = 'd3graphtest';

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


app.post('/upload', function (req, res, next) {
  // Uploads a local file to the bucket

  var filename = req.body.filename

  storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
      console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
})

module.exports = app;

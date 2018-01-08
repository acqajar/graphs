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
  res.render('index');
});


app.post('/uploading', function (req, res, next) {
  var arr =[]
  // Uploads a local file to the bucket
  var filename = req.body.file
  arr.push(filename)
console.log("upload!")
console.log("body - " +  arr)
res.json(arr)
  // storage
  //   .bucket(bucketName)
  //   .upload(filename)
  //   .then((data) => {
  //     console.log(`here = ` + data);
  //
  //     // console.log(`${filename} uploaded to ${bucketName}. + ` + data);
  //   })
  //   .catch(err => {
  //     console.error('ERROR:', err);
  //   });
})

module.exports = app;

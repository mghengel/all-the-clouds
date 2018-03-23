const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/hello', (req, res) => {
  res.send({ test: 'Hello From Express' });
});

app.get('/api/aws-serverless-js', (req, res) => {
  request('https://fp55uw8uu8.execute-api.us-east-1.amazonaws.com/dev/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  	res.send(body);
  });
  // https://fp55uw8uu8.execute-api.us-east-1.amazonaws.com/dev/
  // res.send({ test: 'Hello From Express' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

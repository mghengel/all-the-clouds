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

callApi = (url, res) => {
  return request(url, function (error, response, body) {
    if(error || response.statusCode !== 200) {
      res.json(error);
    } else {
      res.send(body);
    }
  });
};

app.get('/api/aws-serverless-js', (req, res) => {
  callApi('https://fp55uw8uu8.execute-api.us-east-1.amazonaws.com/dev', res);
});

app.get('/api/heroku-clojure', (req, res) => {
  callApi('https://all-the-clouds-heroku-clojure.herokuapp.com', res);
});

app.get('/api/gcp-python', (req, res) => {
  callApi('http://all-the-clouds-gcp-python.appspot.com', res);
});

app.get('/api/azure-dotnet', (req, res) => {
  callApi('https://all-the-clouds-azure-dotnet.azurewebsites.net/api/values/1', res);
});

app.get('/api/openshift-ruby', (req, res) => {
  callApi('http://openshift-ruby-demo-all-the-clouds-openshift-ruby.7e14.starter-us-west-2.openshiftapps.com', res);
});



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

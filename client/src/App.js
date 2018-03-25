import React, { Component } from 'react';
import './App.css';
import Cloud from './cloud.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Cloud name="aws-serverless-js" api='/api/aws-serverless-js' />
        <Cloud name="heroku-clojure" api='/api/heroku-clojure' />
        <Cloud name="gcp-python" api='/api/gcp-python' />
        <Cloud name="azure-dotnet" api='/api/azure-dotnet' />
        <Cloud name="openshift-ruby" api='/api/openshift-ruby' />
        <Cloud name="cf-java" api='/api/cf-java' />
        
        <style>{'.aws-serverless-js { background-color: lightgrey; }'}</style>
        <style>{'.heroku-clojure { background-color: lightgrey; }'}</style>
        <style>{'.gcp-python { background-color: lightgrey; }'}</style>
        <style>{'.azure-dotnet { background-color: lightgrey; }'}</style>
        <style>{'.openshift-ruby { background-color: lightgrey; }'}</style>
        <style>{'.cf-java { background-color: lightgrey; }'}</style>

        <section class="portfolio" id="portfolio">
          <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-0">All the clouds</h2>
            <hr class="mb-5"/>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="aws-serverless-js img-fluid" src="img/aws-serverless-js.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="heroku-clojure img-fluid" src="img/heroku-clojure.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="gcp-python img-fluid" src="img/gcp-python.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="azure-dotnet img-fluid" src="img/azure-dotnet.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="openshift-ruby img-fluid" src="img/openshift-ruby.png" alt="" />
                </a>
              </div>              
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="cf-java img-fluid" src="img/cf-java.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
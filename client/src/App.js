import React, { Component } from 'react';
import './App.css';
import Cloud from './cloud.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="portfolio" id="portfolio">
          <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-5">All the clouds</h2>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="cf-java" api='/api/cf-java' />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="openshift-ruby" api='/api/openshift-ruby' />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="aws-serverless-js" api='/api/aws-serverless-js' />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="gcp-python" api='/api/gcp-python' />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="heroku-clojure" api='/api/heroku-clojure' />
                </a>
              </div>              
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <Cloud name="azure-dotnet" api='/api/azure-dotnet' />
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
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
        
        <section class="portfolio" id="portfolio">
          <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-0">All the clouds</h2>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/cabin.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/cake.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/circus.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/game.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/safe.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto">
                  <img class="img-fluid" src="img/portfolio/submarine.png" alt="" />
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
import React, { Component } from 'react';
import logo from './logo.svg';
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
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="img/portfolio/cabin.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="img/portfolio/cake.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="img/portfolio/circus.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="img/portfolio/game.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="img/portfolio/safe.png" alt="" />
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                  <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
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
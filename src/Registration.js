import React, { Component } from 'react';

import Header from "./Header";
import AboutUs from "./AboutUs";
import OurService from "./OurService";

class Home extends Component {
  render() {
    return (
      <div id="about">
        <div class="container">
          <div class="section-title text-center center">
            <h2>About Us</h2>
            <hr></hr>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-6"> <img src="img/about.jpg" class="img-responsive" alt=""></img> </div>
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <p>We are partner with DJI and offer drone service for agriculture needs.</p>
              <a href="#portfolio" class="btn btn-default btn-lg page-scroll">Our Service</a> </div>
            </div>
          </div>
        </div>
      </div>
);
  }
}

export default Home;

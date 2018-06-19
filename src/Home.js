import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Header from "./Header";
import AboutUs from "./AboutUs";
import OurService from "./OurService";

import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <OurService />
    </React.Fragment>
);
  }
}

export default Home;

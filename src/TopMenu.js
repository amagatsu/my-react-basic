import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration";

class TopMenu extends Component {
  render() {
    return (
  <Router>
  <nav id="menu" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        <a class="navbar-brand page-scroll" href="#page-top"><i class="fa fa-play fa-rotate-270"></i>THALLIANCES</a> </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><a href="./#AboutUs" class="page-scroll">About Us</a></li>
          <li><a href="./#OurService" class="page-scroll">Our Service</a></li>
          <li><a href="./registration" class="page-scroll">Registration</a></li>
        </ul>
      </div>
    </div>
  </nav>

  </Router>
);
  }
}

export default TopMenu;

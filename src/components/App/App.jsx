import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LeftNav from '../LeftNav/LeftNav.jsx';
import Samples from '../Samples/Samples.jsx';
import About from '../About/About.jsx';
import Welcome from '../Welcome/Welcome.jsx';

import './App.css';
import logo_flyline_1 from '../../images/logo_flyline_1.gif';
import logo_flyline_2 from '../../images/logo_flyline_2.gif';
import logo_butterfly_nav from '../../images/logo_butterfly_nav.gif';
import logo_butterfly_home from '../../images/logo_butterfly_home.gif';
import logo_name from '../../images/logo_name.gif';

const addresses = ["7979 3343 3321 6846 2547 4635 6462 3323 4414 4039 6846 3984 6134 1043 245 4277 5252 4635 4635 3321 1043 5252 3984 1521 1522 6134 3323 3321"];

class App extends Component {

  constructor() {
    super();
    window.addresses = addresses;
    this.email = window.decrypt_string(0,0,0,true);
  }

  render() {
    return (
      <Router>
      <div id="wrapper">
        <div id="header">
          <iframe title="likebutton" id="fb_frame" src="http://www.facebook.com/plugins/like.php?app_id=104207449680616&amp;href=http%3A%2F%2Fwww.bellmyers.com%2F&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameBorder="0" style={{border:'none', overflow:'hidden', height:21}} allowtransparency="true"></iframe>
          <div id="logo">
            <a className="butterfly" target="_top" href="#page=nav0-0">
              <img id="butterflyImg" src={logo_butterfly_home} width="124" height="112" alt="butterfly" border="0" />
            </a>
            <div id="logowords">
              <a target="_top" href="index.html?page=home">
                <img className="logo_name" src={logo_name} border="0" alt="Darcy Bell-Myers Illustration & Design"/>
              </a>
              <div id="flyline">
                <img src={logo_flyline_1} width="34" height="51" alt="" />
                <img src={logo_flyline_2} width="248" height="29" alt="" />
              </div>
              <button className="headerlink" onClick={() => this.decryptEmail()}>{this.email}</button>
            </div>
            <div id="banner">&nbsp;</div>
            <button type="button" className="menubutton" onClick={() => this.showNavMenu(true)}></button>
          </div>
        </div>

        <div id="leftnav">
          <button type="button" className="menubutton" onClick={() => this.showNavMenu(false)}></button>
          <img className="butterfly" src={logo_butterfly_nav} width="166" height="117" alt="butterfly" border="0" />
          <LeftNav></LeftNav>
        </div>

        <div id="contentFrame">
        <Switch>
          <Route path="/samples/:item?/:subitem?" component={Samples} />
          <Route path="/about" component={About} />
          <Route path="/welcome" component={Welcome} />
          <Route component={Samples} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }

  decryptEmail() {
    window.decrypt_and_email(0);
  }

  showNavMenu(what) {
    console.log("show nav menu");
  }
}

export default App;

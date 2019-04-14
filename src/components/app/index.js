//index.js

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../header/index';
import Content from '../content/index';
import Footer from '../footer/index';
import './index.scss';

export default ()=>
 (
  <div>
    <Router>
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </Router>
  </div>
);

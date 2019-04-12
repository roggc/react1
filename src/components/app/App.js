import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import './app.scss';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

const App = ()=>
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

export default App;

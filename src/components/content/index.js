//index.js

import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home/index'
import Contact from '../contact/index'
import About from '../about/index'
import Spotify from '../spotify/index'
import './index.scss'

export default ()=>
(
  <div id='Content'>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/spotify" component={Spotify} />
  </div>
);

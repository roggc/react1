import React from 'react';
import { Route, Link } from 'react-router-dom'

import './content.scss'

import Home from '../home/Home'
import Contact from '../Contact'
import About from '../About'

const Content = ()=>
(
  <div id='Content'>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default Content;

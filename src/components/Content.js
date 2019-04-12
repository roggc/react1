import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'

const Content = ()=>
    (
      <div style={{height:'300px'}}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );

export default Content;

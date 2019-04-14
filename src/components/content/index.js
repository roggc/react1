//index.js

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home/index'
import About from '../about/index'
import Spotify from '../spotify/index'
import './index.scss'

export default ()=>
(
  <div id='Content'>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/spotify" component={Spotify} />
    </Switch>
  </div>
);

//index.js

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from '../home/index'
import About from '../about/index'
import Spotify from '../spotify/index'
import {routerTurnOnHome, routerTurnOff, routerTurnOnAbout,
  routerTurnOnSpotify} from '../../actions/index';
import './index.scss'

const comp=(props)=>
{
  const selectedRoute= props.children();

  props.routerTurnOff();
  if(selectedRoute=='home')
  {
    setTimeout(()=>props.routerTurnOnHome(),0);
  }
  else if(selectedRoute=='about')
  {
    setTimeout(()=>props.routerTurnOnAbout(),0);
  }
  else if(selectedRoute=='spotify')
  {
    setTimeout(()=>props.routerTurnOnSpotify(),0);
  }

  const render=
  (
    <div className='noDisplay'></div>
  );
  return render;
};

const mapDispatchToProps = {
  routerTurnOnHome,
  routerTurnOnAbout,
  routerTurnOnSpotify,
  routerTurnOff
};

const RouterTurnOnSelected= connect(null, mapDispatchToProps)(comp);

export default (props)=>
{
  let routerSelected='none';
  const render=
  (
    <div id='Content'>
      <Route exact path='/' render={()=>
        {
          routerSelected='home';
          const render=
          (
            <Home/>
          );
          return render;
        }} />
      <Route path='/about' render={()=>
        {
          routerSelected='about';
          const render=
          (
            <About/>
          );
          return render;
        }} />
      <Route path='/spotify' render={()=>
        {
          routerSelected='spotify';
          const render=
          (
            <Spotify/>
          );
          return render;
        }} />
      <Route render={()=>
        {
          const render=
          (
            <RouterTurnOnSelected>{()=>routerSelected}</RouterTurnOnSelected>
          );
          return render;
        }}/>
    </div>
  );
  return render;
};

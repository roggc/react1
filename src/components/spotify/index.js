//index.js

import React from 'react';
import {connect} from 'react-redux';
import Cabecera from '../cabecera/index';
import Grid from './grid';
import Fetch from './fetch';
import './index.scss';

const msgs1=['Spotify!!!'
            ,'Spotify!!!'];

const msgs2=['Here you can see songs from spotify!'
            ,'Aquí puedes ver canciones de spotify!'];

const comp= (props)=>
{
  const render=
  (
    <div className={props.router.spotify?'opacityOn':'opacityOff'}>
      <Cabecera msgs1={msgs1} msgs2={msgs2}>{()=>''}</Cabecera>
      <Fetch/>
      <Grid/>
    </div>
  );
  return render;
};

const mapStateToProps=(state)=>
{
  return {
    router: state.router
  };
};

export default connect(mapStateToProps)(comp);

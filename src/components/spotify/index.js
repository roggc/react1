//index.js

import React from 'react';
import Cabecera from '../cabecera/index';
import Grid from './grid';
import Fetch from './fetch';
import './index.scss';

const msgs1=['Spotify!!!'
            ,'Spotify!!!'];

const msgs2=['Here you can see songs from spotify!'
            ,'Aquí puedes ver canciones de spotify!'];

export default (props)=>
{
  const render=
  (
    <div>
      <Cabecera msgs1={msgs1} msgs2={msgs2} />
      <Fetch/>
      <Grid/>
    </div>
  );
  return render;
};

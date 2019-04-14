//index.js

import React from 'react';
import Cabecera from '../cabecera/index';
import './index.scss';

const msgs1=['About'
            ,'Acerca de'];

const msgs2=['nppcpp corp Barcelona.'
            ,'nppcpp corp Barcelona.'];

export default (props)=>
{
  const render=
  (
    <Cabecera msgs1={msgs1} msgs2={msgs2}/>
  );
  return render;
};

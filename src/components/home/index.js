//index.js

import React from 'react';
import Cabecera from '../cabecera/index';
import './index.scss'

const msgs1=['Home'
            ,'Casa'];
const msgs2=['nothing for the moment in here.'
            ,'Nada por el momento aquí.'];

export default (props)=>
{
  const render=
  (
    <div>
      <Cabecera msgs1={msgs1} msgs2={msgs2}/>
    </div>
  );
  return render;
};

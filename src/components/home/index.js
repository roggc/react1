//index.js

import React from 'react';
import {connect} from 'react-redux';
import Cabecera from '../cabecera/index';
import './index.scss'

const msgs1=['Home'
            ,'Casa'];
const msgs2=['nothing for the moment in here.'
            ,'Nada por el momento aquí.'];

const comp= (props)=>
{
  const render=
  (
    <div className={props.router.home?'opacityOn':'opacityOff'}>
      <Cabecera msgs1={msgs1} msgs2={msgs2}>{()=>''}</Cabecera>
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

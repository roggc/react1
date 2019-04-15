//index.js

import React from 'react';
import {connect} from 'react-redux';
import Cabecera from '../cabecera/index';
import './index.scss';

const msgs1=['About'
            ,'Acerca de'];

const msgs2=['nppcpp corp Barcelona.'
            ,'nppcpp corp Barcelona.'];

const comp= (props)=>
{
  const render=
  (
    <div className={props.router.about?'opacityOn':'opacityOff'}>
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

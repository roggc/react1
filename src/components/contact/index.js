//index.js

import React from 'react';
import { connect } from 'react-redux';
import {selectIdiom} from '../../globals';
import './index.scss';

const msgs1=['Contact'
            ,'Datos de Contacto'];

const msgs2=['nppcpp corp. Barcelona.'
            ,'nppcpp corp. Barcelona.'];

const comp = (props)=>
{
  const render=
  (
    <div id='Contact' className='msg'>
      <div>
        <h5>{selectIdiom(msgs1)(props)}</h5>
        <p>{selectIdiom(msgs2)(props)}</p>
      </div>
    </div>
  );
  return render;
};

const mapStateToProps=(state)=>
{
  return {
    idiom: state.idiom
  };
}

export default connect(mapStateToProps)(comp);

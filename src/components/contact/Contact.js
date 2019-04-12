import React from 'react';
import { connect } from 'react-redux';
import {SelectIdiom} from '../../globals.js';
import './contact.scss';

const msgs1=['Contact'
            ,'Datos de Contacto'];

const msgs2=['nppcpp corp. Barcelona.'
            ,'nppcpp corp. Barcelona.'];

const Contact = (props)=>
{
  const render=
  (
    <div id='Contact' className='msg'>
      <div>
        <h5>{SelectIdiom(msgs1)(props)}</h5>
        <p>{SelectIdiom(msgs2)(props)}</p>
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

export default connect(mapStateToProps)(Contact);

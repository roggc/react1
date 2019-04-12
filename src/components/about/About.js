import React from 'react';
import { connect } from 'react-redux';
import './about.scss';
import {idioms, SelectIdiom} from '../../globals.js';

const msgs1=['About'
            ,'Acerca de'];

const msgs2=['This is a page about react development.'
            ,'Esta es una página de desarrollo en react.'];

const About = (props)=>
{
  const render=
  (
    <div id='About' className='msg'>
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

export default connect(mapStateToProps)(About);

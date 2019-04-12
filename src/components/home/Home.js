import React from 'react';
import { connect } from 'react-redux';
import {idioms, SelectIdiom} from '../../globals.js';
import './home.scss'

const msgs1=['Home'
            ,'Casa'];
const msgs2=['Hello, welcome to my page!!!'
            ,'Hola, bienvenidos a mi página!!!'];

const Home = (props)=>
{
  const render=
  (
    <div id='Home' className='msg'>
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

export default connect(mapStateToProps)(Home);

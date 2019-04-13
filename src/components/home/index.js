//index.js

import React from 'react';
import { connect } from 'react-redux';
import {selectIdiom} from '../../globals';
import './index.scss'

const msgs1=['Home'
            ,'Casa'];
const msgs2=['nothing for the moment in here.'
            ,'Nada por el momento aquí.'];

const comp = (props)=>
{
  const render=
  (
    <div id='Home' className='msg'>
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

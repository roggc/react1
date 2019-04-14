//index.js

import React from 'react';
import { connect } from 'react-redux';
import {selectIdiom} from '../../globals';
import './index.scss';

const comp= (props)=>
{
  //const {props.msgs1,msgs2,...props}=props.children;
  const render=
  (
    <div className='msg msgCabecera'>
      <div>
        <h5>{selectIdiom(props.msgs1)(props.idiom)}</h5>
        <p>{selectIdiom(props.msgs2)(props.idiom)}</p>
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

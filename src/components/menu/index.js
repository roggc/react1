//index.js

import React, { useState } from 'react';
import './index.scss';

export default (props)=>
{
  const [show, setShow] = useState(false);

  const toggleShow= ()=>{
    setShow(!show);
  };

  const render=
  (
    <div id='Menu' className='menu'>
      <div className='icon'>
        <i className="fas fa-align-justify" onClick={toggleShow}></i>
      </div>
      <div className='clearfix'/>
      <div className={`content ${show? '' : 'noDisplay'}`}>
        {props.children}
      </div>
      <div className='clearfix'/>
    </div>
  );

  return render;
};

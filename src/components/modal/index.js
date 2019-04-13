//index.js

import React from 'react';
import './index.scss';

export default (props)=>
{
  const render =
  (
    <div>
      <div className={`content ${props.show? '' : 'noDisplay'}`}>
        {props.children}
      </div>
    </div>
  );
  return render;
};

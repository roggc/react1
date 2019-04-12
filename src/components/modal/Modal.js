import React from 'react';

import './modal.scss';

const Modal = (props)=>
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

export default Modal;

//index.js

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {menuReset, menuSetShowMenu} from '../../actions/index';
import './index.scss';

const comp= (props)=>
{
  const menuClick=()=>
  {
    if(props.menu.showMenu)
    {
      props.menuReset();
    } else
    {
      props.menuSetShowMenu(!props.menu.showMenu);
    }
  };

  const render=
  (
    <div className='menu'>
      <div className='msg msgMenu icon' onClick={menuClick}>
        <i className="fas fa-align-justify"></i>
      </div>
      <div className='clearfix'/>
      <div className={`content ${props.menu.showMenu? '' : 'noDisplay'}`}>
        {props.children()}
      </div>
      <div className='clearfix'/>
    </div>
  );

  return render;
};

const mapStateToProps=(state)=>
{
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = {
  menuReset,
  menuSetShowMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(comp);

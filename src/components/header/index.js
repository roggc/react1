//index.js

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '../menu/index';
import Modal from '../modal/index';
import {idiomSetIdiom,menuSetShowModalIdiom} from '../../actions/index';
import {idioms,selectIdiom} from '../../globals';
import './index.scss';

const msgs1= ['Wellcome to react dev page!!!'
              ,'Bienvenidos a mi nueva página!!!'];
const msgs2= ['Awesome things awaits you!!!'
              ,'Cosas impresionantes te esperan!!!'];
const msgs3= ['idiom'
              ,'idioma'];
const msgs4= ['about'
              ,'acerca de'];
const msgs5= ['home'
              ,'casa'];
const msgs6=['contact'
            ,'contacto'];

const comp = (props)=>
{
  //managing idiom global state
  const setIdiom0=()=>
  {
    props.idiomSetIdiom(idioms[0]);
    toggleShowModalIdiom();
  };
  const setIdiom1=()=>
  {
    props.idiomSetIdiom(idioms[1]);
    toggleShowModalIdiom();
  };
  const setIdiom_=(idiom)=>
  {
    switch (idiom){
      case idioms[0]: return setIdiom0;
      case idioms[1]: return setIdiom1;
    }
  };

  const toggleShowModalIdiom=()=>
  {
    props.menuSetShowModalIdiom(!props.menu.showModalIdiom);
  };

  const idiomsList= idioms.map
  (
    (idiom)=>
    (
      <li>
        <div onClick={setIdiom_(idiom)}>
          {idiom}
        </div>
      </li>
    )
  );

  const render =
  (
    <div>
      <Menu>
        {()=>
          {
            const render=
            (
              <div>
                <ul>
                  <li>
                    <div onClick={toggleShowModalIdiom}>
                      {selectIdiom(msgs3)(props.idiom)}
                      <i className="fas fa-angle-right"></i>
                    </div>
                    <Modal show={props.menu.showModalIdiom}>
                      <div>
                        <ul>{idiomsList}</ul>
                      </div>
                    </Modal>
                  </li>
                  <li>
                    <Link to="/about/">{selectIdiom(msgs4)(props.idiom)}</Link>
                  </li>
                  <li>
                    <Link to="/">{selectIdiom(msgs5)(props.idiom)}</Link>
                  </li>
                  <li>
                    <Link to="/spotify/">spotify</Link>
                  </li>
                </ul>
              </div>
            );
            return render;
          }
        }
      </Menu>
      <div id='cabecera'>
        <div className='msg msgHeader'>
          <span>{selectIdiom(msgs1)(props.idiom)}</span>
        </div>
        <div className='msg msgHeader'>
          <span>{selectIdiom(msgs2)(props.idiom)}</span>
        </div>
        <div className='clearfix'/>
      </div>
      <hr/>
    </div>
  );
  return render;
};

const mapStateToProps=(state)=>
{
  return {
    idiom: state.idiom,
    menu: state.menu
  };
};

const mapDispatchToProps = {
  idiomSetIdiom,
  menuSetShowModalIdiom
};

export default connect(mapStateToProps, mapDispatchToProps)(comp);

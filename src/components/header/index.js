//index.js

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '../menu/index';
import Modal from '../modal/index';
import { setIdiom } from '../../actions/index';
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
    props.setIdiom(idioms[0]);
  };
  const setIdiom1=()=>
  {
    props.setIdiom(idioms[1]);
  };
  const setIdiom_=(idiom)=>
  {
    switch (idiom){
      case idioms[0]: return setIdiom0;
      case idioms[1]: return setIdiom1;
    }
  };

  //managing showModal local state
  const [showModalIdiom, setShowModalIdiom] = useState(false);
  const toggleShowModalIdiom=()=>
  {
    setShowModalIdiom(!showModalIdiom);
  };

  const idiomsList= idioms.map
  (
    (idiom)=>
    (
      <li>
        <div onClick={setIdiom_(idiom)}>
          <i className="fas fa-angle-right"></i>
          {idiom}
        </div>
      </li>
    )
  );

  const render =
  (
    <div id='Header'>
      <Menu>
        <div>
          <ul>
            <li>
              <div  onClick={toggleShowModalIdiom}>
                {selectIdiom(msgs3)(props.idiom)}
                <i className="fas fa-angle-right"></i>
              </div>
              <Modal show={showModalIdiom}>
                <div>
                  <ul>{idiomsList}</ul>
                </div>
              </Modal>
            </li>
            <li>
              <Link to="/about/">{selectIdiom(msgs4)(props.idiom)}</Link>
            </li>
            <li>
              <Link to="/contact/">{selectIdiom(msgs6)(props.idiom)}</Link>
            </li>
            <li>
              <Link to="/">{selectIdiom(msgs5)(props.idiom)}</Link>
            </li>
            <li>
              <Link to="/spotify/">spotify</Link>
            </li>
          </ul>
        </div>
      </Menu>
      <div id='cabecera'>
        <div className='msg'>
          <span>{selectIdiom(msgs1)(props.idiom)}</span>
        </div>
        <div className='msg'>
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
    idiom: state.idiom
  };
}

const mapDispatchToProps = {
  setIdiom
};

export default connect(mapStateToProps, mapDispatchToProps)(comp);

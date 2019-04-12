import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '../menu/Menu.js';
import Modal from '../modal/Modal.js';
import { SetIdiom } from '../../actions/Actions';
import {idioms,SelectIdiom} from '../../globals.js';
import './header.scss';

const msgs1= ['Wellcome to react dev page!!!'
              ,'Bienvenidos a mi nueva página!!!'];
const msgs2= ['Awesome things awaits you!!!'
              ,'Cosas impresionantes te esperan!!!'];
const msgs3= ['idiom'
              ,'idioma'];

const Header = (props)=>
{
  //managing idiom global state
  const setIdiom0=()=>
  {
    props.SetIdiom(idioms[0]);
  };
  const setIdiom1=()=>
  {
    props.SetIdiom(idioms[1]);
  };
  const SetIdiom_=(idiom)=>
  {
    switch (idiom){
      case idioms[0]: return setIdiom0;
      case idioms[1]: return setIdiom1;
    }
  };

  //managing showModal local state
  const [showModalIdiom, setShowModalIdiom] = useState(false);
  const ShowModalIdiom=()=>
  {
    setShowModalIdiom(!showModalIdiom);
  };

  const idiomsList= idioms.map
  (
    (idiom)=>
    (
      <li>
        <div onClick={SetIdiom_(idiom)}>
          <i class="fas fa-angle-right"></i>
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
              <div  onClick={ShowModalIdiom}>
                {SelectIdiom(msgs3)(props)}
                <i class="fas fa-angle-right"></i>
              </div>
              <Modal show={showModalIdiom}>
                <div>
                  <ul>{idiomsList}</ul>
                </div>
              </Modal>
            </li>
          </ul>
        </div>
      </Menu>
      <div id='cabecera'>
        <div className='msg'>
          <span>{SelectIdiom(msgs1)(props)}</span>
        </div>
        <div className='clearfix'/>
        <div className='msg'>
          <span>{SelectIdiom(msgs2)(props)}</span>
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
  SetIdiom
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

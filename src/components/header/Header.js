import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Menu from '../menu/Menu.js';
import Modal from '../modal/Modal.js';

import './header.scss';

const idiom0Msg1= 'Wellcome to react dev page!!!';
const idiom0Msg2= 'Awesome things awaits you!!!';
const idiom0MenuItem1= 'idiom';
const idiom1Msg1= 'Bienvenidos a mi nueva página!!!';
const idiom1Msg2= 'Cosas impresionantes te esperan!!!';
const idiom1MenuItem1= 'idioma';

const idioms=['english','español'];

const Header = ()=>
{
  const [idiom, setIdiom] = useState(idioms[0]);
  const setIdiom0=()=>
  {
    setIdiom(idioms[0]);
  };
  const setIdiom1=()=>
  {
    setIdiom(idioms[1]);
  };
  const SetIdiom=(idiom)=>
  {
    switch (idiom){
      case idioms[0]: return setIdiom0;
      case idioms[1]: return setIdiom1;
    }
  };
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
        <div onClick={SetIdiom(idiom)}>
          <i class="fas fa-angle-right"></i>
          {idiom}
        </div>
      </li>
    )
  );
  const SelectIdiomMenuItem=()=>
  {
      switch(idiom)
      {
        case idioms[0]:return idiom0MenuItem1;
        case idioms[1]:return idiom1MenuItem1;
      }
  };
  const SelectIdiomMsg1=()=>
  {
      switch(idiom)
      {
        case idioms[0]:return idiom0Msg1;
        case idioms[1]:return idiom1Msg1;
      }
  };
  const SelectIdiomMsg2=()=>
  {
      switch(idiom)
      {
        case idioms[0]:return idiom0Msg2;
        case idioms[1]:return idiom1Msg2;
      }
  };
  const render =
  (
    <div className='header'>
      <Menu>
        <div>
          <ul>
            <li>
              <div  onClick={ShowModalIdiom}>
                {SelectIdiomMenuItem()}
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
          <span>{SelectIdiomMsg1()}</span>
        </div>
        <div className='clearfix'/>
        <div className='msg'>
          <span>{SelectIdiomMsg2()}</span>
        </div>
        <div className='clearfix'/>
      </div>
      <hr/>
    </div>
  );
  return render;
};

export default Header;

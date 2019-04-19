//index.js

import {combineReducers} from 'redux';
import * as types from '../actions/types';
import {idioms} from '../globals';

const menuReducer=(val={showModalIdiom:false,showMenu:false}, act)=>
{
  let newVal;
  switch(act.type)
  {
    case types.MENU_RESET:
      newVal=
      {
        ...val,
        showModalIdiom:false,
        showMenu:false
      };
      break;
    case types.MENU_SET_SHOW_MODAL_IDIOM:
      newVal=
      {
        ...val,
        showModalIdiom: act.val
      };
      break;
    case types.MENU_SET_SHOW_MENU:
      newVal=
      {
        ...val,
        showMenu: act.val
      };
      break;
    default:
      return val;
  }
  return newVal;
};

const idiomReducer= (val= idioms[0], act) =>
{
  let newVal;
  switch(act.type)
  {
    case types.IDIOM_SET:
      newVal= act.idiom;
      break;
    default:
      return val;
  }
  return newVal;
};

const spotifyReducer=(val={pending:true,data:{}}, act)=>
{
  let newVal;
  switch(act.type)
  {
    case types.SPOTIFY_SET_DATA:
      newVal=
      {
        ...val,
        pending:false,
        data: act.data
      };
      break;
    case types.SPOTIFY_RESET:
      newVal=
      {
        ...val,
        pending:true,
        data: {}
      };
      break;
    default:
      return val;
  }
  return newVal;
};

const routerReducer= (val=
  {
    home:false,
    about:false,
    spotify:false
  }, act) =>
{
  let newVal;
  switch(act.type)
  {
    case types.ROUTER_TURN_ON_HOME:
      newVal=
      {
        ...val,
        home:true
      };
      break;
    case types.ROUTER_TURN_ON_ABOUT:
      newVal=
      {
        ...val,
        about:true
      };
      break;
    case types.ROUTER_TURN_ON_SPOTIFY:
      newVal=
      {
        ...val,
        spotify:true
      };
      break;
    case types.ROUTER_TURN_OFF_HOME:
      newVal=
      {
        ...val,
        home:false
      };
      break;
    case types.ROUTER_TURN_OFF:
      newVal=
      {
        ...val,
        home:false,
        about:false,
        spotify:false
      };
      break;
    default:
      return val;
  }
  return newVal;
};

export default combineReducers({
    idiom: idiomReducer,
    spotify: spotifyReducer,
    menu: menuReducer,
    router: routerReducer
});

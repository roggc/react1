//index.js

import { combineReducers } from 'redux';
import {SET_IDIOM,SPOTIFY_SET_DATA,SPOTIFY_RESET} from '../actions/index';
import {idioms} from '../globals';

const idiomReducer= (value= idioms[0], action) =>
{
  switch(action.type)
  {
    case SET_IDIOM:
      return action.idiom;
    default:
      return value;
  }
};

const spotifyReducer=(value={pending:true,data:{}}, action)=>
{
  let ob;
  switch(action.type)
  {
    case SPOTIFY_SET_DATA:
      ob=
      {
        ...value,
        pending:false,
        data: action.data
      }
      return ob;
    case SPOTIFY_RESET:
      ob=
      {
        ...value,
        pending:true,
        data: {}
      }
      return ob;
    default:
      return value;
  }
};

export default combineReducers({
    idiom: idiomReducer,
    spotify: spotifyReducer
});

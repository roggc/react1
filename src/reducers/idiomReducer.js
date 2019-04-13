//idiomReducer.js

import {idioms} from '../globals';
import {SET_IDIOM} from '../actions/types';

const initialState =
{
  idiom:idioms[0]
};

const idiomReducer=(state=initialState, action) =>
{
  let newState;
  switch(action.type)
  {
    case SET_IDIOM:
      newState=
      {
        ...state,
        idiom: action.idiom
      };
      break;
    default:
      newState=
      {
        ...state
      };
      break;
  }
  return newState;
};

export default idiomReducer;

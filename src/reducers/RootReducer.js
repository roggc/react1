import {idioms} from '../globals.js';
import {SetIdiom, SET_IDIOM} from '../actions/Actions.js';

const initialState =
{
  idiom:idioms[0]
};

const RootReducer=(state=initialState, action) =>
{
  switch(action.type)
  {
    case SET_IDIOM:
      return Object.assign
      ({}, state,
        {
          idiom: action.idiom
        }
      )
    default: return state;
  }
};

export default RootReducer;

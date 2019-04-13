//idiomReducer.js

import {idioms} from '../globals';
import {SET_IDIOM} from '../actions/types';

export default (value= idioms[0], action) =>
{
  switch(action.type)
  {
    case SET_IDIOM:
      return action.idiom;
    default:
      return value;
  }
};

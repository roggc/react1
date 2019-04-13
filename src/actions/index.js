// index.js

import {SET_IDIOM} from './types';

export const setIdiom=(idiom)=>
{
  const action=
  {
    type:SET_IDIOM,
    idiom: idiom
  };
  return action;
};

// index.js

import * as types from './types';
import axios from 'axios';

export const idiomSetIdiom=(val)=>
{
  const act=
  {
    type: types.IDIOM_SET,
    idiom: val
  };
  return act;
};

const spotifySetData=(dat)=>
{
  const act=
  {
    type: types.SPOTIFY_SET_DATA,
    data: dat
  };
  return act;
};

export const spotifyReset=()=>
{
  const act=
  {
    type: types.SPOTIFY_RESET
  };
  return act;
};

export const spotifyFetchData= ()=>(dispatch)=>
{
  axios
  ({
    url:'https://react1-api.herokuapp.com/api/v1/access_token',
    method:'get'
  }).then(resp=>
    {
      axios({
        url:'https://api.spotify.com/v1/browse/new-releases',
        method:'get',
        headers: {
          Authorization: 'Bearer ' + resp.data.access_token
        }
      }).then(resp=>
        {
        dispatch(spotifySetData(resp.data));
      });
    });
};

export const menuReset=()=>
{
  const act=
  {
    type: types.MENU_RESET
  };
  return act;
}

export const menuSetShowModalIdiom=(val)=>
{
  const act=
  {
    type: types.MENU_SET_SHOW_MODAL_IDIOM,
    val: val
  };
  return act;
}

export const menuSetShowMenu=(val)=>
{
  const act=
  {
    type: types.MENU_SET_SHOW_MENU,
    val: val
  };
  return act;
}

export const routerTurnOnHome= ()=>
{
  const act=
  {
    type: types.ROUTER_TURN_ON_HOME
  };
  return act;
};

export const routerTurnOnAbout= ()=>
{
  const act=
  {
    type: types.ROUTER_TURN_ON_ABOUT
  };
  return act;
};

export const routerTurnOnSpotify= ()=>
{
  const act=
  {
    type: types.ROUTER_TURN_ON_SPOTIFY
  };
  return act;
};

export const routerTurnOffHome= ()=>
{
  const act=
  {
    type: types.ROUTER_TURN_OFF_HOME
  };
  return act;
};

export const routerTurnOff= ()=>
{
  const act=
  {
    type: types.ROUTER_TURN_OFF
  };
  return act;
};

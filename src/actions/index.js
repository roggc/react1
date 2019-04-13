// index.js

import axios from 'axios';

export const SET_IDIOM = 'SET_IDIOM';
export const setIdiom=(idiom)=>
{
  const action=
  {
    type:SET_IDIOM,
    idiom: idiom
  };
  return action;
};

export const SPOTIFY_SET_DATA = 'SPOTIFY_SET_DATA';
const spotifySetData=(data)=>
{
  const action=
  {
    type:SPOTIFY_SET_DATA,
    data:data
  };
  return action;
};

export const SPOTIFY_RESET = 'SPOTIFY_RESET';
export const spotifyReset=()=>
{
  const action=
  {
    type:SPOTIFY_RESET
  };
  return action;
};

const spotifyToken= 'BQDkOAaPHbEHYZ24qAGaCYdZT2ADwrDnIdMnNBFfE5XnI8ptTwhL54wnzDlIS5dbNx0g26bpQ0wNBMwQIH0';
const spotifyConf=
{
  url:'https://api.spotify.com/v1/browse/new-releases',
  method:'get',
  headers:
  {
    Authorization: 'Bearer ' + spotifyToken
  }
};

export const spotifyFetchData= ()=>(dispatch)=>
{
  axios(spotifyConf).then(response=>dispatch(spotifySetData(response.data)));
};

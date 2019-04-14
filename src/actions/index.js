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

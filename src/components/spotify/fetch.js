//fetch.js

import React from 'react';
import {connect} from 'react-redux';
import {spotifyFetchData,spotifyReset} from '../../actions/index';

const comp= (props)=>
{
  props.spotifyReset();
  props.spotifyFetchData();
  const render=
  (
    <div className='noDisplay'></div>
  );
  return render;
};

const mapDispatchToProps = {
  spotifyFetchData,
  spotifyReset
};

export default connect(null, mapDispatchToProps)(comp);

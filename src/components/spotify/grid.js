//grid.js

import React from 'react';
import {connect} from 'react-redux';
import './grid.scss';

const comp= (props)=>
{
  const render=
  (
    <div>
      <div className={props.spotify.pending?'':'noDisplay'}><i className="fas fa-spinner"></i></div>
      <div className={props.spotify.pending?'noDisplay':'cardContainer'}>
        {
          props.spotify.pending?'':
          props.spotify.data.albums.items.map((item,index)=>
          {
            const render=
            (
              <div className='card'>
                <img src={item.images[1].url} alt="pic"/>
              </div>
            );
            return render;
          })
        }
      </div>
    </div>
  );
  return render;
};

const mapStateToProps=(state)=>
{
  const ob=
  {
    spotify: state.spotify
  };
  return ob;
};

export default connect(mapStateToProps)(comp);

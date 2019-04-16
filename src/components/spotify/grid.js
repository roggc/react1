//grid.js

import React from 'react';
import {connect} from 'react-redux';
import './grid.scss';

const comp= (props)=>
{
  const render=
  (
    <div className='spotifyGrid'>
    {

        // <div className={props.spotify.pending?'mainContainer':'noDisplay'}>
        //   <div className='fixerContainer'>
        //     <div className='msg'><i className="fas fa-spinner fa-spin"></i></div>
        //   </div>
        // </div>
        // <div className='clearfix'/>
    }

      <div className={props.spotify.pending?'spotifyLoadingContainer':'noDisplay'}>
        <div className='msg'><i className="fas fa-spinner fa-spin"></i></div>
      </div>
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

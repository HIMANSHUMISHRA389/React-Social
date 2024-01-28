import React from 'react'
import './feed.css'
import Share from '../Share/Share'
import Post from '../userPost/Post';
import {Posts} from '../../dummyData.js'
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share />
      {Posts.map((p, i) => (
        <Post key={p.id} posts={p} />
      ))}
    </div>
  );
}

export default Feed
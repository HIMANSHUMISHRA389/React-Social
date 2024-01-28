import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
const Post = ({posts}) => {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="top">
          <div className="toppostleft">
            <div className="topPostImgDiv">
              <img
                className="topPostImg"
                src={Users.filter((user) => user.id == posts.id)[0].profilePicture}
              />
            </div>
            <span className="topPosttext">
              {Users.filter((user) => user.id == posts.id)[0].username}
            </span>
            <span className="topPostTime">{posts.date}</span>
          </div>
          <div className="toppostRight">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <div className="centerTop">
            <span className="centerText">{posts.desc}</span>
            <img className="centerImg" src={posts.photo} />
          </div>
        </div>
        <div className="bottom">
          <div className="postBottomLeft">
            <img className="postLike" src="/assets/like.png" />
            <img className="postLike" src="/assets/heart.png" />
            <span className="postLikeCounter">
              {posts.like} people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{posts.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post
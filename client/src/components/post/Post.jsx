import "./post.css";
import { MoreVert } from "@material-ui/icons";

import { useState,useEffect } from "react";
import  {format} from "timeago.js"
import {Link} from "react-router-dom"
export default function Post({ post }) {
    const [users, setUsers] = useState([]);
  const BASEURL = "https://react-social-7e9a.onrender.com/api/";
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
const PF = process.env.REACT_APP_PUBLIC_FOLDER
const userId=localStorage.getItem("userId")
//console.log(PF)
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
console.log(post)
// const fetchUsers = async () => {

 const fetchUsers=async()=>{
   try {
   console.log(userId)
     

    const res =  await fetch(BASEURL + 'users/'+post.userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
    const data = await res.json();
    console.log(data);
    setUsers(data);
  } catch (error) {
    console.log(error);
  }
 
};

useEffect(() => {
fetchUsers()
}, [post.userId]);
//  console.log(post)

return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${users.username}`}>
              <img
                className="postProfileImg"
                src={users.profilePicture || PF + "uploads/assets/person/nodp.png"}
                alt=""
              />
            </Link>

            <span className="postUsername">{users.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post?.img} alt="post image" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}uploads/assets/like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}uploads/assets/heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

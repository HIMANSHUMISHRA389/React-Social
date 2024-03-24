import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContexts";

import Post from "../post/Post";
import Share from "../Share/Share.jsx";
import "./feed.css";

export default function Feed({ username }) {
  const BASEURL = "https://react-social-7e9a.onrender.com/api/";
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = localStorage.getItem("userId");
  console.log(userId);

  
  //  console.log(user?.user?.token);
  const fetchPosts = async () => {
    
    console.log(user.user._id);
    try {
      const res = username
        ? await fetch(BASEURL + "posts/profile/" + username, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
        : await fetch(BASEURL + `posts/timeline/${user.user._id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share fetchPosts={fetchPosts} />
        {posts?.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

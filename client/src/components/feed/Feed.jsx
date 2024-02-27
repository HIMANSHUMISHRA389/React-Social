import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const BASEURL = "http://localhost:8800/api/";
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = username
        ? await fetch(BASEURL + "posts/profile/" + username, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
        : await fetch(BASEURL + "posts/timeline/65d8207caa06ba934122ed9d", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      const data = await res.json();
      //console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(posts);
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useState,useEffect }from "react"
import { AuthContext } from '../../components/context/AuthContexts';
import { useContext } from "react";
export default function Profile() {
    const { user } = useContext(AuthContext);
    console.log(user)
    const BASEURL = "http://localhost:8800/api/";
     const [users, setUsers] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const fetchUsers = async () => {
    try {
      const res = await fetch(BASEURL + `users?username=${user.username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }, 
      });
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(users)
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={users.coverPicture || PF + "person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={users.profilePicture || PF + "person/nodp.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{users.username}</h4>
              <span className="profileInfoDesc">{users.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Hi" />
            <Rightbar user={users} />
          </div>
        </div>
      </div>
    </>
  );
}

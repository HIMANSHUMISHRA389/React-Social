import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContexts";

import { useContext,  useRef, useState } from "react";
export default function Share({fetchPosts}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const BASEURL = "https://react-social-7e9a.onrender.com/";

  const formData = new FormData();
  let mind = useRef();
 console.log(user)
  const upload = async () => {
    try {
       formData.append("file", file);
       formData.append("text", mind.current.value);
       formData.append("userId",user._id)
      //  formData.append("userId",user._id)
      console.log(mind.current.value)
       let res = await fetch(BASEURL + "/upload", {
         method: "POST",
         body:formData
       });
       setFile(null)
       mind.current.value=""
       fetchPosts()
       
    } catch (error) {
      console.log(error)
    }
   
  };







  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user?.profilePicture || PF + "uploads/assets/person/nodp.png"}
            alt=""
          />
          <input
            placeholder={"what's in your mind " + user.username}
            className="shareInput"
            ref={mind}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <input
                style={{ display: "none" }}
                type="file"
                encType="multipart/form-data"
                accept=".png,.jpg,.jpeg"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={upload}>Share</button>
        </div>
      </div>
    </div>
  );
}

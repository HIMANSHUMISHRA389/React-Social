import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContexts";
import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const BASEURL = "http://localhost:8800";
  const ab = {
    img: file,
  };
  const formData = new FormData();
  formData.append("file", file);
  const upload = async () => {
    try {
       let res = await fetch(BASEURL + "/upload", {
         method: "POST",
         body:formData
       });
      //  res = await res.json();
       console.log(res);
    } catch (error) {
      console.log(error)
    }
   
  };

  useEffect(() => {
    console.log(file);
    upload();
  }, [file]);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user?.profilePicture || PF + "person/nodp.png"}
            alt=""
          />
          <input
            placeholder={"what's in your mind " + user.username}
            className="shareInput"
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

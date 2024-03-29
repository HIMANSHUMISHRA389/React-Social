import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Container } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Conversation from "./components/Conversation";
import io from "socket.io-client";
import { AuthContext } from "../../components/context/AuthContexts";
const MainChat = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const userId = localStorage.getItem("userId") || user._id;
  console.log(userId);
  const getConversation = async () => {
    try {
      const res = await fetch(PF + "conversations/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getConversation();
  }, [userId]);
  return (
    <>
      <Container style={{ display: "flex", margin: "0", padding: "0" }}>
        <Container flex="10vw">
          <Sidebar />
        </Container>
        <Container flex="30vw" bg="#F6F6F6">
          <Contact />
        </Container>
        <Container flex="80vw" bg="#F6F6F6">
          <Conversation />
        </Container>
      </Container>
    </>
  );
};

export default MainChat;

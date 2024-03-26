import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Container } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Conversation from "./components/Conversation";
import io from "socket.io-client";

const socket = io("https://react-social-7e9a.onrender.com");
const MainChat = () => {

const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");

useEffect(() => {
  // Listen for incoming messages
  socket.on("message", (data) => {
    setMessages([...messages, data]);
  });

  // Clean up when component unmounts
  return () => {
    socket.disconnect();
  };
}, [messages]);

const handleMessageSubmit = (e) => {
  e.preventDefault();
  if (input.trim() !== "") {
    socket.emit("message", { text: input });
    setInput("");
  }
};

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
          <Conversation handleMessageSubmit={handleMessageSubmit} />
        </Container>
      </Container>
    </>
  );
};

export default MainChat;

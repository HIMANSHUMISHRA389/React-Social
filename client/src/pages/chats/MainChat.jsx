import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Container } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Conversation from "./components/Conversation";
import io from "socket.io-client";
import {AuthContext} from "../../components/context/AuthContexts"


const MainChat = () => {



const {user}=useContext(AuthContext)

console.log(user)



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
          <Conversation  />
        </Container>
      </Container>
    </>
  );
};

export default MainChat;

import React, { useEffect, useState } from "react";
import ConvoTop from "./ConvoTop";
import ConvoBottom from "./ConvoBottom";
import io from "socket.io-client";
import ConvoChat from "./ConvoChat";

const Conversation = () => {
  return (
    <div>
      <ConvoTop />
      <ConvoChat />
      <ConvoBottom />
    </div>
  );
};

export default Conversation;

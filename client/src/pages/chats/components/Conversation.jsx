import React from 'react'
import ConvoTop from './ConvoTop'
import ConvoBottom from './ConvoBottom'

const Conversation = ({ handleMessageSubmit }) => {
  return (
    <div>
      <ConvoTop />
      <ConvoBottom handleMessageSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Conversation
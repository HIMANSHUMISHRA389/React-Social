import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdOutlineMic } from "react-icons/md";
import { PiSmiley } from "react-icons/pi";
import { TbSend } from "react-icons/tb";
import { MdPermMedia } from "react-icons/md";


const ConvoBottom = () => {
  
  
  return (
    <Container
      position="fixed"
      bottom="2"
      display="flex"
      width="95%"
      height="8%"
      margin="0 0.5%"
      bg="#F6F6F6"
      alignItems="center"
    >
      <Box width="50vw" bg="white" rounded="20px">
        <InputGroup
          size="sm"
          height="100%"
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "24px",
          }}
        >
          <InputLeftAddon>
            <MdPermMedia />
          </InputLeftAddon>
          <form >
            <Input
             
              placeholder="Write messages..."
              height="88%"
              width="85%"
              style={{
                outline: "none",
                borderRadius: "30px",
                margin: "3px",
                border: "none",
              }}
            />
            <button>Send</button>
          </form>
          <InputRightAddon>
            <PiSmiley />
          </InputRightAddon>
        </InputGroup>
      </Box>
      <Flex
        width="14vw"
        fontSize="24px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          rounded="20%"
          bg="white"
          h="90%"
          textAlign="center"
          alignContent="center"
        >
          <MdOutlineMic />
        </Box>
        <Box
          rounded="20%"
          bg="white"
          h="90%"
          textAlign="center"
          alignContent="center"
        >
          <TbSend />
        </Box>
      </Flex>
    </Container>
  );
};

export default ConvoBottom;

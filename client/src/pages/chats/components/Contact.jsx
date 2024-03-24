import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import React from "react";
import Person  from "../components/Person";

const Contact = () => {
  return (
    <Container height="97vh">
      <Flex
        justifyContent="space-around"
        textAlign="center"
        alignContent="center"
        alignItems="center"
        height="10vh"
        rounded="8"
        margin="2%"
        fontWeight="bolder"
        bg="white"
      >
        <Box>
          <span>Chat</span>
        </Box>

        <Box display="flex">
          <Input
            variant="outline"
            placeholder="Search"
            rounded="16"
            padding="12"
            border="1px solid grey"
          />
          <Search2Icon
            style={{ position: "relative", right: "32px", top: "12px" }}
          />
        </Box>

        <Box
          width="45px"
          height="45px"
          bg="orangered"
          rounded="50%"
          textAlign="center"
          fontSize="200%"
          alignContent="center"
          color="white"
          fontWeight="bolder"
        >
          +
        </Box>
      </Flex>
      <Container height="87vh" rounded="8" margin="2%" bg="white">
        <div style={{ maxHeight: "96%", overflowY: "auto" }}>
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </Container>
    </Container>
  );
};

export default Contact;

import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
import { Search } from "@material-ui/icons";
import React from "react";
import { IoIosMore } from "react-icons/io";

const ConvoTop = () => {
  return (
    <Container
      bg="#F6F6F6"
      style={{ display: "flex" }}
      height="10vh"
      margin="0.9%"
    >
      <Flex bg="white" flex="3" alignItems="center">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          width="40px"
          height="40px"
          borderRadius="50%"
          margin="0 5% 0 3%"
        />
        <Box>
          <p>Dany Daniel</p>
          <p>Online</p>
        </Box>
      </Flex>
      <Flex bg="white" flex="4"></Flex>
      <Flex
        bg="white"
        flex="5"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          width="25%"
          height="35%"
          rounded="25px"
          textAlign="center"
          alignContent="center"
          border="1px solid grey"
          cursor="pointer"
        >
          Profile
        </Box>
        <Box
          width="25%"
          height="35%"
          rounded="25px"
          textAlign="center"
          alignContent="center"
          border="1px solid grey"
          cursor="pointer"
          bg="black"
          color="white"
        >
          call
        </Box>
        <Box
          display="flex"
          width="25%"
          height="35%"
          textAlign="center"
          alignContent="center"
          alignItems="center"
          justifyContent="space-around"
        >
          <Search />
          <IoIosMore />
        </Box>
      </Flex>
    </Container>
  );
};

export default ConvoTop;

import React from 'react'
import { Container, Box, Avatar, Flex } from "@chakra-ui/react";
import {
  StarIcon,
  ChatIcon,
  EmailIcon,
  DeleteIcon,
  BellIcon,
} from "@chakra-ui/icons";
const Sidebar = () => {
  return (
    <>
        <Container
          minH="97vh"
          bg="#010019"
          rounded="8"
          color="white"
          display="flex"
          flexDir="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex
            paddingTop="20%"
            flex="3"
            textAlign="center"
            alignItems="flex-start"
          >
            <StarIcon color="orangered" />
          </Flex>
          <Flex
            direction="column"
            flex="6"
            textAlign="center"
            justifyContent="space-around"
          >
            <EmailIcon />
            <ChatIcon color="orangered" />
            <BellIcon />
            <DeleteIcon />
          </Flex>
          <Flex
            direction="column"
            flex="3"
            textAlign="center"
            alignItems="center"
            justifyContent="flex-end"
            paddingBottom="20%"
          >
            <Avatar width="25%" src="https://bit.ly/broken-link" />
          </Flex>
        </Container>
        
      
    </>
  );
}

export default Sidebar
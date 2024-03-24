import { Avatar, Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Person = () => {
  return (
    <Box>
      <Box
        style={{
          margin: "2%",
          display: "flex",
          alignItems: "center",
          height: "65px",
          borderRadius: "5px",
        }}
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          width="40px"
          height="40px"
          borderRadius="50%"
          margin="0 5% 0 3%"
        />
        <Box
          height="90%"
          width="80%"
          alignContent="center"
         
          flexDirection="column"
          alignItems="center"
          textAlign="left"
        >
          <Text fontWeight="bolder" fontSize="larger">Sonia Malhotra</Text>
          <Text fontSize="smaller" color="#C4C4C4"
          style={{marginTop:"-5%"}}
          >
            Hello How are you ?
          </Text>
        </Box>
      </Box>
      <hr style={{ width: "90%", marginTop: "-1%", fontWeight: "bolder" }} />
    </Box>
  );
};

export default Person;

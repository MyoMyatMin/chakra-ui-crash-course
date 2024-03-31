import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      color: "black",
      bg: "blue.200",
    },
  };
  return (
    <Container as="section" maxW="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI components
      </Heading>
      <Text ml="30px" color="blue" fontWeight="bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eos!
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box.</Text>
      </Box>

      <Box sx={boxStyles}>Hello, Bots!</Box>
    </Container>
  );
}

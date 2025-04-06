import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProdFrame = ({ name, price, image }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      p={4} 
      textAlign="center"
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={image} alt={name} boxSize="150px" mx="auto" />
      <Text fontWeight="bold" mt={2}>{name}</Text>
      <Text color="gray.600">${price}</Text>
    </Box>
  );
};

export default ProdFrame;

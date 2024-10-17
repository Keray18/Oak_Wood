import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Grid, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import './LoginReg.css'

const LoginReg = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Grid templateColumns="1fr 1fr" h="100vh">
      
      <Flex
        w="100%"
        h="100vh"
        bg="#917357"
        align="center"
        borderRadius={isRegister ? '5rem 0rem 0rem 5rem' : '0rem 5rem 5rem 0rem'}
        justify="center"
        color="white"
        position="relative"
        transition="all 0.6s ease"
        transform={isRegister ? 'translateX(100%)' : 'translateX(0%)'}
        zIndex={isRegister ? 1 : 2}
      >
        <Text fontSize="2xl" fontWeight="bold">
          {isRegister ? 'Welcome' : 'Welcome'}
        </Text>
        {!isRegister ? (
          <Text position="absolute" bottom="20px">
            Don't have an account ? <span _hover={{ cursor: 'pointer' }} onClick={toggleForm}>Register Now.</span>
          </Text>
        ) : (
          <Text position="absolute" bottom="20px">
            Already have an account ? <span _hover={{ cursor: 'pointer' }} onClick={toggleForm}>Login.</span>
          </Text>
        )}
      </Flex>

      <Flex
        w="100%"
        h="100vh"
        align="center"
        justify="center"
        transition="all 0.6s ease"
        transform={isRegister ? 'translateX(-100%)' : 'translateX(0%)'}
        zIndex={isRegister ? 2 : 1}
        p={10}
      >
        {isRegister ? (

          //  Registration UI
          <Box w="300px">
            <Text textColor='#917357' fontWeight='bold' fontStyle='italic' fontSize="2xl" mb={9}>
              <center>Sign Up</center>
            </Text>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' borderBottom='3px solid black' placeholder="Enter your name" />
            </FormControl>
            <FormControl id="email" isRequired mt={9}>
              <FormLabel>Email</FormLabel>
              <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' borderBottom='3px solid black' type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password" isRequired mt={9}>
              <FormLabel>Password</FormLabel>
              <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' borderBottom='3px solid black' type="password" placeholder="Enter your password" />
            </FormControl>
            <Button
              w="100%"
              mt={4}
              colorScheme='blackAlpha'
            >
              Register
            </Button>
          </Box>
        ) : (
          
          // Login Form
          <Box w="300px">
            <Text textColor='#917357' fontStyle='italic' fontSize="2xl" mb={5}>
              Sign In
            </Text>
            <FormControl id="email" isRequired>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password" isRequired mt={5}>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Flex justify='center' alignItems='center'>
              <Checkbox size='sm' mt={4} px={4}>Remember Me</Checkbox>
              <Text fontSize='0.9rem' mt={4} px={4}>Forgot Password ?</Text>
            </Flex>
            <Button
              w="100%"
              mt={5}
              colorScheme='blackAlpha'
            >
              Login
            </Button>
          </Box>
        )}
      </Flex>
    </Grid>
  );
};

export default LoginReg;

import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Grid, Checkbox, Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import './LoginReg.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LoginReg = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()
  const auth_api = import.meta.env.VITE_AUTH_API

  // console.log(auth_api)

  const toggleForm = () => {
    setIsRegister(!isRegister)
    setMessage('')
  }

  // Custom toast styles
  const successToastStyle = {
    title: "",
    description: "",
    status: "success",
    duration: 1000,
    isClosable: true,
    position: "top",
    containerStyle: {
      background: "#917357",
      color: "white",
      borderRadius: "8px",
      padding: "16px",
      fontFamily: "'Montserrat', sans-serif",
      border: "1px solid #a88768",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }
  }

  const errorToastStyle = {
    ...successToastStyle,
    containerStyle: {
      ...successToastStyle.containerStyle,
      background: "#473c38",
      border: "1px solid #452811"
    }
  }

  const register = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const data = { name, email, password }

    try {
      const response = await axios.post(`${auth_api}/register`, data)

      if (response) {
        setIsRegister(false)
        toast({
          ...successToastStyle,
          title: "Registration Successful",
          description: "You can now login with your credentials",
          render: ({ title, description, onClose }) => (
            <Box
              p={4}
              color="white"
              bg="#917357"
              borderRadius="lg"
              border="1px solid #a88768"
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text 
                    fontFamily="'Crimson Text', serif"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {title}
                  </Text>
                  <Text 
                    mt={1}
                    fontFamily="'Montserrat', sans-serif"
                    fontSize="sm"
                  >
                    {description}
                  </Text>
                </Box>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onClose}
                  color="white"
                  _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                >
                  ✕
                </Button>
              </Flex>
            </Box>
          )
        })
      }
      
      setMessage(response.data.message)
    } catch(error) {
      const errorMessage = error.response ? error.response.data.error: "An error occurred"
      setMessage(errorMessage)
      toast({
        ...errorToastStyle,
        title: "Registration Failed",
        description: errorMessage,
        render: ({ title, description, onClose }) => (
          <Box
            p={4}
            color="white"
            bg="#473c38"
            borderRadius="lg"
            border="1px solid #452811"
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text 
                  fontFamily="'Crimson Text', serif"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {title}
                </Text>
                <Text 
                  mt={1}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="sm"
                >
                  {description}
                </Text>
              </Box>
              <Button
                size="sm"
                variant="ghost"
                onClick={onClose}
                color="white"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              >
                ✕
              </Button>
            </Flex>
          </Box>
        )
      })
    } finally {
      setIsLoading(false)
    }
  }

  const login = async(e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = { email, password }
      const response = await axios.post(`${auth_api}/login`, data)
      
      localStorage.setItem('token', response.data.token)
      
      toast({
        ...successToastStyle,
        title: "Login Successful",
        description: "Welcome back!",
        render: ({ title, description, onClose }) => (
          <Box
            p={4}
            color="white"
            bg="#917357"
            borderRadius="lg"
            border="1px solid #a88768"
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text 
                  fontFamily="'Crimson Text', serif"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {title}
                </Text>
                <Text 
                  mt={1}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="sm"
                >
                  {description}
                </Text>
              </Box>
              <Button
                size="sm"
                variant="ghost"
                onClick={onClose}
                color="white"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              >
                ✕
              </Button>
            </Flex>
          </Box>
        )
      })

      navigate('/home')
    } catch(error) {
      const errorMessage = error.response ? error.response.data.error : "Login Failed"
      setMessage(errorMessage)
      toast({
        ...errorToastStyle,
        title: "Login Failed",
        description: errorMessage,
        render: ({ title, description, onClose }) => (
          <Box
            p={4}
            color="white"
            bg="#473c38"
            borderRadius="lg"
            border="1px solid #452811"
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text 
                  fontFamily="'Crimson Text', serif"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {title}
                </Text>
                <Text 
                  mt={1}
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="sm"
                >
                  {description}
                </Text>
              </Box>
              <Button
                size="sm"
                variant="ghost"
                onClick={onClose}
                color="white"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              >
                ✕
              </Button>
            </Flex>
          </Box>
        )
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  }

  return (
    <Grid templateColumns="1fr 1fr" h="100vh" overflow="hidden" position="relative">
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
            Don't have an account? <span onClick={toggleForm}>Register Now</span>
          </Text>
        ) : (
          <Text position="absolute" bottom="20px">
            Already have an account? <span onClick={toggleForm}>Login</span>
          </Text>
        )}
      </Flex>

      <Flex
        w="100%"
        h="100vh"
        align="center"
        justify="center"
        className={`sliding-panel`}
        position="relative"
        transform={isRegister ? 'translateX(-100%)' : 'translateX(0%)'}
        zIndex={isRegister ? 2 : 1}
        p={10}
      >
        <Box className="form-container" w="300px">
          {isRegister ? (
            // Registration Form
            <>
              <Text 
                textColor='#917357' 
                fontWeight='bold' 
                fontStyle='italic' 
                fontSize="2xl" 
                mb={9}
                textAlign="center"
              >
                Sign Up
              </Text>

              <form onSubmit={register}>
                <FormControl id="name" isRequired className="form-field">
                  <FormLabel>Name</FormLabel>
                  <Input 
                    _placeholder={{ p: '1rem'}} 
                    borderRadius='0.5rem' 
                    variant='unstyled' 
                    borderBottom='3px solid black' 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormControl id="email" isRequired mt={6} className="form-field">
                  <FormLabel>Email</FormLabel>
                  <Input 
                    _placeholder={{ p: '1rem'}} 
                    borderRadius='0.5rem' 
                    variant='unstyled' 
                    borderBottom='3px solid black' 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormControl id="password" isRequired mt={6} className="form-field">
                  <FormLabel>Password</FormLabel>
                  <Input 
                    _placeholder={{ p: '1rem'}} 
                    borderRadius='0.5rem' 
                    variant='unstyled' 
                    borderBottom='3px solid black' 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </FormControl>

                <Button
                  w="100%"
                  mt={8}
                  colorScheme='brown'
                  bg="#917357"
                  type='submit'
                  disabled={isLoading}
                  className="animated-button form-field"
                  _hover={{
                    bg: '#473c38'
                  }}
                >
                  {isLoading ? <Spinner color="white" size="sm" /> : 'Register'}
                </Button>
              </form>
            </>
          ) : (
            // Login Form
            <>
              <Text 
                textColor='#917357' 
                fontStyle='italic' 
                fontSize="2xl" 
                mb={5}
                textAlign="center"
              >
                Sign In
              </Text>

              <form onSubmit={login}>
                <FormControl id="login-email" isRequired className="form-field">
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    borderRadius='0.5rem' 
                    variant='unstyled' 
                    borderBottom='3px solid black'
                    disabled={isLoading}
                  />
                </FormControl>

                <FormControl id="login-password" isRequired mt={6} className="form-field">
                  <FormLabel>Password</FormLabel>
                  <Input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius='0.5rem' 
                    variant='unstyled' 
                    borderBottom='3px solid black'
                    disabled={isLoading}
                  />
                </FormControl>

                <Flex justify='center' alignItems='center' mt={4} className="form-field">
                  <Checkbox size='sm' px={4}>Remember Me</Checkbox>
                  <Text fontSize='0.9rem' px={4} cursor="pointer" color="#917357">
                    Forgot Password?
                  </Text>
                </Flex>

                <Button
                  w="100%"
                  mt={6}
                  colorScheme='brown'
                  bg="#917357"
                  type='submit'
                  disabled={isLoading}
                  className="animated-button form-field"
                  _hover={{
                    bg: '#473c38'
                  }}
                >
                  {isLoading ? <Spinner color="white" size="sm" /> : 'Login'}
                </Button>
              </form>
            </>
          )}
        </Box>
      </Flex>

      {message && (
        <Text 
          position="absolute" 
          bottom="20px" 
          color={message.includes('error') ? 'red.500' : 'green.500'}
        >
          {message}
        </Text>
      )}
    </Grid>
  )
}

export default LoginReg

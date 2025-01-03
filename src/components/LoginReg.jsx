import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Grid, Checkbox, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import './LoginReg.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginReg = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const auth_api=import.meta.env.VITE_AUTH_API

  // console.log(auth_api)

  const toggleForm = () => {
    setIsRegister(!isRegister)
  }

  const register = async (e) => {
    e.preventDefault()

    const data = { name, email, password, role }

    try {
      const response = await axios.post(`${auth_api}/register`, data)

      if (response) {
        setIsRegister(false)
      }
      
      setMessage(response.data.message)
    } catch(error) {
      setMessage(error.response ? error.response.data.error: "An error occured")
    }
  }


  const login = async(e) => {
    e.preventDefault()

    try {
      const data = { email, password }

    const response = await axios.post(`${auth_api}/login`, data)
    setMessage(response.data.message)

    localStorage.setItem('token', response.data.token)
    navigate('/home')

    } catch(error) {
      setMessage(error.response) ? error.response.data.error: "Login Failed"
    }
  }

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
              <Text style={{ textAlign: 'center'}}>Sign Up</Text>
            </Text>

            <form onSubmit={register}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' 
                borderBottom='3px solid black' placeholder="Enter your name" 
                value={name} onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <Select my={5} icon={<MdOutlineArrowDropDown />} placeholder="Choose a role..." 
              variant="filled" colorScheme="blackAlpha" required
              value={role} onChange={(e) => setRole(e.target.value)}
              >
                <option>customer</option>
                <option>admin</option>
              </Select>

              <FormControl id="eemail" isRequired>
                <FormLabel>Email</FormLabel>
                <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' 
                borderBottom='3px solid black' type="eemail" placeholder="Enter your eemail" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired mt={9}>
                <FormLabel>Password</FormLabel>
                <Input _placeholder={{ p: '1rem'}} borderRadius='0.5rem' variant='unstyled' 
                borderBottom='3px solid black' type="password" placeholder="Enter your password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              
              
              <Button
                w="100%"
                mt={4}
                colorScheme='blackAlpha'
                type='submit'
              >
                Register
              </Button>
              {message && <Text>{message}</Text>}
            </form>
          </Box>
        ) : (
          
          // Login Form
          <Box w="300px">
            <Text textColor='#917357' fontStyle='italic' fontSize="2xl" mb={5}>
              Sign In
            </Text>
            <form onSubmit={login}>
              <FormControl id="email" isRequired>
                <Input type="email" placeholder="Enter your email" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired mt={5}>
                <Input type="password" placeholder="Enter your password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Flex justify='center' alignItems='center'>
                <Checkbox size='sm' mt={4} px={4}>Remember Me</Checkbox>
                <Text fontSize='0.9rem' mt={4} px={4}>Forgot Password ?</Text>
              </Flex>
              <Button
                w="100%"
                mt={5}
                colorScheme='blackAlpha'
                type='submit'
              >
                Login
              </Button>
            </form>
          </Box>
        )}
      </Flex>
    </Grid>
  )
}

export default LoginReg

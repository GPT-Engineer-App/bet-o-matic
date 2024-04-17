import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';

function Login() {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');

   
    console.log('Login Attempt:', username, password);

    toast({
      title: "Login Attempt",
      description: "This is a placeholder login attempt.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input id='username' name='username' type='text' placeholder='Enter your username' />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' name='password' type='password' placeholder='Enter your password' />
        </FormControl>
        <Button mt={4} colorScheme='blue' type='submit'>Login</Button>
      </form>
    </Box>
  );
}

export default Login;
import { authModalState } from '@/atoms/AuthModalAtom';
import { auth } from '@/firebase/clientApp';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'


const SignUp:React.FC = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
  
  const [signUpFrom, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState('')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth); /// this is from the firebase clientapp

  /// Here needs to be added prob firebase logic
  const onSubmit = ()=>{
    
    if (signUpFrom.password !== signUpFrom.confirmPassword){
        setError('Passwords do not match')
        return;
    }
    // passwd match
    createUserWithEmailAndPassword(signUpFrom.email, signUpFrom.password);
}
   
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return <form onSubmit={onSubmit}>
    <Input 
      required
      name="email" 
      placeholder="email" 
      type="mail" 
      mb={2} 
      onChange={onChange}
      fontSize='10pt'
      _placeholder={{
        color:"gray.500"
      }}
      _hover={{
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      _focus={{
        outline: "none",
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      bg="gray.50"
    />
    <Input 
      required
      name = "password"
      placeholder="password"
      type="password"
      onChange={onChange}
      fontSize='10pt'
      mb={2}
      _placeholder={{
        color:"gray.500"
      }}
      _hover={{
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      _focus={{
        outline: "none",
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      bg="gray.50"
    />
    <Input 
      required
      name = "confirmPassword"
      placeholder="confirm password"
      type="password"
      onChange={onChange}
      fontSize='10pt'
      mb={2}
      _placeholder={{
        color:"gray.500"
      }}
      _hover={{
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      _focus={{
        outline: "none",
        bg:"white",
        border:"1px solid",
        borderColor: "brand.300",
      }}
      bg="gray.50"
    />
    {error && (
        <Text textAlign='center' color="red" fontSize="10pt">
            {error}
        </Text>
    )}
    
    <Button 
      type="submit"
      width="100%" 
      height="36px"
      mt={2}
    >
        Sign Up
    </Button>

    <Flex fontSize='9pt' justifyContent='center' mt={3}>
      <Text mr={1}>Already have an account?</Text>
      <Text 
        color="brand.300" 
        fontWeight={700} 
        cursor="pointer"
        onClick={()=> setAuthModalState((prev)=>({
          ...prev,
          view: "login",
        }))}      
      > 
        LOG IN
      </Text>

    </Flex>
  </form>;
}
export default SignUp;
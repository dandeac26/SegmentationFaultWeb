import { authModalState } from "@/atoms/AuthModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  
  const setAuthModalState = useSetRecoilState(authModalState);
  
  const [loginFrom, setLoginForm] = useState({
    email: "",
    password: "",
  });

  /// Here needs to be added prob firebase logic
  const onSubmit = ()=>{}
  
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return <form>
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
        borderColor: "blue.500",
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
        borderColor: "blue.500",
      }}
      bg="gray.50"
    />
    <Button 
      type="submit"
      width="100%" 
      height="36px"
      mt={2}
    >Log In
    </Button>

    <Flex fontSize='9pt' justifyContent='center' mt={3}>
      <Text mr={1}>New here?</Text>
      <Text 
        color="brand.300" 
        fontWeight={700} 
        cursor="pointer"
        onClick={()=> setAuthModalState((prev)=>({
          ...prev,
          view: "signup",
        }))}      
      > 
        SIGN UP
      </Text>

    </Flex>
  </form>;
};
export default Login;

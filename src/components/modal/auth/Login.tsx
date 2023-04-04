import React, { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginFrom, setLoginForm] = useState({
    email: "",
    password: "",
  });
  return <form>{/*2 inputs */}</form>;
};
export default Login;

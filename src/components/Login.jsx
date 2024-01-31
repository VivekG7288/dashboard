// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WeberonHeading = styled.h1`
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
`;

const LoginForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.3);
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.5);
  }
`;

const LoginLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this check with a more secure authentication mechanism
    if (email.endsWith('weberon.net') && password === '489P') {
      // If the email ends with "weberon.net" and the password is correct, navigate to the home page
      navigate('/home');
    } else {
      alert('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <LoginWrapper>
      <WeberonHeading>WEBERON</WeberonHeading>
      <LoginForm>
        <h2>Login</h2>
        <LoginLabel>Email:</LoginLabel>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your weberon.net email"
        />
        <LoginLabel>Password:</LoginLabel>
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;

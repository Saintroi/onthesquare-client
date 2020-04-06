import React from 'react';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { useInput } from '../hooks';

// Styles
const LoginBox = styled.div`
  height: 20vh;
  width: 20vw;
  background-color: white;
  border-color: black;
  border-width: 5px;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content; center;
  padding-top: 20px;
`;

const TextInput = styled.input`
  display: inline-block;
  padding: 15px;
  width: 70%;
  height: 40px;
  margin: 8px;
  align-self: center;
`;

const LogBtn = styled.button`
  background: #00467e;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5vmin;
  align-self: center;
  margin-top: 10%;
  width: 30%;
  height: 30px;
  border-radius: 25px;
`;

// Queries / Mutations

const LOGIN = gql`
  mutation loginGraphql($input: loginInput) {
    loginUser(input: $input) {
      success
      token
    }
  }
`;

// JSX

function Login(props) {
  const [loginResponse, { data }] = useMutation(LOGIN);
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: pass, bind: bindPass, reset: resetPass } = useInput('');

  function onSubmit(e) {
    console.log(email, pass);
    loginResponse({
      variables: {
        input: {
          email: email,
          pword: pass
        }
      }
    });
    e.preventDefault();
    console.log(data);

    resetEmail();
    resetPass();
  }

  return (
    <LoginBox>
      <form onSubmit={onSubmit}>
        <TextInput
          type='text'
          required
          placeholder='Email'
          {...bindEmail}
        ></TextInput>
        <TextInput
          type='text'
          required
          placeholder='Password'
          {...bindPass}
        ></TextInput>
        <LogBtn>Login</LogBtn>
      </form>
    </LoginBox>
  );
}

export default withRouter(Login);

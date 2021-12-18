import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

interface Props {}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = styled.section`
    
`;

const Login: NextPage = () => {
  return (
    <Wrapper>
      <CenterContainer>Login</CenterContainer>
    </Wrapper>
  );
};

export default Login;

import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Output from '../components/modules/Output';

function Home() {

  return (
      <ContainerHome>
        <Header />
        <Output />
      </ContainerHome>
  );
}

const ContainerHome = styled.section`
    && {
      width: 100%;
      min-height: 100vh;
      background: #1b1c22;
    }
`;

export default Home;
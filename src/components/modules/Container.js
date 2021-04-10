import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => (
  <ContainerMain className="container">
    {children}
  </ContainerMain>
);

const ContainerMain = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export default Container;

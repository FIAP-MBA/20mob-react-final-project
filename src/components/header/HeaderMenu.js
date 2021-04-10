import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import HeaderLink from './HeaderLink'

function HeaderMenu() {
  const { hiddenMenu } = useApplication();

  return (
    <Menu className={(hiddenMenu ? "hidden" : "") + " headerMenu"}>
      <HeaderLink btnText="Home" />
      <HeaderLink btnText="Populares" />
      <HeaderLink btnText="Favoritos" />
      <HeaderLink btnText="Sobre" />
    </Menu>
  );
};

const Menu = styled.div`
  padding-left: 80px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0;
    padding: 20px 50px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
  }
`;

export default HeaderMenu;
import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import Container from '../modules/Container'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'

function Header() {
  const { hiddenMenu, setHiddenMenu, activeLink } = useApplication();
  const { handleLogout, currentUser } = useApplication();

  return (
    <Nav>
      <Container>
        <div className="wrapper">
          <HeaderLogo />
          <HeaderMenu />
        </div>
        <HeaderSearch />
        {activeLink === "Favoritos" && (
          <ButtonHeader onClick={handleLogout}>{currentUser ? "Logout" : null}</ButtonHeader>
        )}
      </Container>
    </Nav>
  );
};

const ButtonHeader = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media (max-width: 860px) {
    font-size: 40px;
  }
`;

const Nav = styled.div`
    width: 100%;
    min-height: 80px;
    padding: 20px 0;
    background: #212229;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .wrapper {
        display: flex;
        align-items: center;
      }
    }
  `;

export default Header;
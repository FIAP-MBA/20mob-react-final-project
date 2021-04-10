import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'

function HeaderLink({ btnText }) {
  const { activeLink, setActiveLink, setHiddenMenu } = useApplication();

  return (
    <ButtonHeader
      style={{ color: activeLink === btnText ? "#f9a5ff" : "#fff" }}
      onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
      }}
    >
      {btnText}
    </ButtonHeader>
  );
};

const ButtonHeader = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
`;

export default HeaderLink;
import React from 'react';
import styled from 'styled-components';

const HeaderLogo = () => <Logo>MovieApp</Logo>;

const Logo = styled.h2`
  font-size: 22px;
  color: #cb6ad2;
  font-weight: 900;
  user-select: none;
`;

export default HeaderLogo;
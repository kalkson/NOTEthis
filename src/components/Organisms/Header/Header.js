import React from 'react';
import styled from 'styled-components';
import LogoSVG from 'components/Atoms/Logo/Logo';
import StyledHeader from './Header.styled';

const Logo = styled(LogoSVG)`
  width: 200px;
  height: 70px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;

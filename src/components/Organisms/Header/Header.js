import Logo from 'components/Atoms/Logo/Logo';
import AccountButtons from 'components/Molecules/AccountButtons/AccountButtons';
import React from 'react';
import StyledHeader from './Header.styled';

const Header = () => (
  <StyledHeader>
    <Logo />
    <AccountButtons />
  </StyledHeader>
);

export default Header;

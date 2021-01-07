import React from 'react';
import propTypes from 'prop-types';
import StyledLinkButton from './LinkButton.styled';

const LinkButton = ({ children }) => (
  <StyledLinkButton>{children}</StyledLinkButton>
);

LinkButton.propTypes = {
  children: propTypes.string.isRequired,
};

export default LinkButton;

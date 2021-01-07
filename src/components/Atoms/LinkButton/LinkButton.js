import React from 'react';
import propTypes from 'prop-types';
import StyledLinkButton from './LinkButton.styled';

const LinkButton = ({ children, border }) => (
  <StyledLinkButton border={border}>{children}</StyledLinkButton>
);

LinkButton.propTypes = {
  border: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

LinkButton.defaultProps = {
  border: false,
};

export default LinkButton;

import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledAddnotation = styled.span`
  font-style: italic;
  font-size: 1.4rem;
`;

const Addnotation = ({ children }) => (
  <StyledAddnotation>{children}</StyledAddnotation>
);

Addnotation.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Addnotation;

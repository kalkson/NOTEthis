import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledAddnotation = styled.span`
  font-style: italic;
  font-size: 1.4rem;
`;

const Addnotation = ({ children, className }) => (
  <StyledAddnotation className={className}>{children}</StyledAddnotation>
);

Addnotation.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
};

Addnotation.defaultProps = {
  className: null,
};

export default Addnotation;

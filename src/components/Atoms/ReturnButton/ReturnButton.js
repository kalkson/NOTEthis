import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledReturnButton = styled.button`
  border: none;
  outline: none;
  font-size: 2rem;
  font-style: italic;
  text-decoration: underline;
  align-self: flex-start;
  margin-top: auto;
  background-color: transparent;
  margin-bottom: 100px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ReturnButton = ({ onClick }) => {
  return <StyledReturnButton onClick={onClick}>« Wróć</StyledReturnButton>;
};

ReturnButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ReturnButton;

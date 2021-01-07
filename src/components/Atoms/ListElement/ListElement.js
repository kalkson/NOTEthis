import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledListElement = styled.li`
  cursor: pointer;
  margin: 7px 0;
`;

const ListElement = ({ children }) => (
  <StyledListElement>{children}</StyledListElement>
);

ListElement.propTypes = {
  children: propTypes.string.isRequired,
};

export default ListElement;
